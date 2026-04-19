# Chat Module Backend Code

## Share Guide 

Use this file as a plug-and-play reference for implementing the same chat functionality in another Node.js + Express + MongoDB backend.

### 1. Required Backend Stack

- Node.js with Express
- MongoDB with Mongoose
- Socket.IO
- JWT authentication via cookies
- Multer-based file upload middleware

### 2. Required Dependencies

Install these if missing:

```bash
npm install express mongoose socket.io jsonwebtoken cookie-parser multer
```

### 3. Required Existing Modules in Friend Project

This chat logic depends on these project parts. If your friend uses different naming, map imports accordingly.

- User model
- Group model
- Project model
- Auth middleware that sets `req.user`
- Async handler middleware
- Error handler class
- Upload middleware (`upload.single("file")`)
- File upload service (for attachment uploads)

### 4. Environment Variables

Your friend should define:

- `JWT_SECRET`
- `FRONTEND_URL`
- Any storage env vars needed by file upload service

### 5. Integration Steps

1. Copy controller, router, and model code from this file.
2. Ensure route mount exists in app setup: `/api/v1/chat`.
3. Add chat namespace section in Socket.IO server (`/chat`).
4. Keep room naming consistent (`conv:${conversationId}`).
5. Verify JWT cookie name is `token` or update socket auth middleware.
6. Test flow: create/get conversation -> send message -> mark read -> real-time events.

### 6. Important Path Mapping

Imports in this file are from your current project structure. Your friend must update relative import paths like:

- `../models/...`
- `../middlewares/...`
- `../services/...`

### 7. Suggested API Test Checklist

- `GET /api/v1/chat/conversations`
- `GET /api/v1/chat/conversations/group/:groupId`
- `POST /api/v1/chat/conversations/private`
- `GET /api/v1/chat/messages/:conversationId`
- `POST /api/v1/chat/messages/:conversationId` (text + file)
- `PUT /api/v1/chat/messages/:conversationId/read`
- `GET /api/v1/chat/chatusers`
- `GET /api/v1/chat/teacher-groups`

## server/controller/chatController.js
```js
import { asyncHandler } from "../middlewares/asyncHandler.js";
import ErrorHandler from "../middlewares/error.js";
import { Conversation } from "../models/conversation.js";
import { Message } from "../models/message.js";
import { Group } from "../models/group.js";
import { User } from "../models/user.js";
import { Project } from "../models/project.js";
import { uploadFileToSupabase } from "../services/fileUpload.service.js";
import { chatNamespace } from "../server.js";

// Helper: Get all group IDs a user belongs to (as leader or member)
// Helper: Get all group IDs a user belongs to (as leader or member or supervisor)
const getUserGroupIds = async (userId) => {
  const groups = await Group.find({
    $or: [{ leaderId: userId }, { "members.userId": userId }],
  }).select("_id");
  const groupIds = groups.map((g) => g._id.toString());

  // Also include groups where user is supervisor
  const supervisedProjects = await Project.find({ supervisor: userId }).select("student");
  for (const proj of supervisedProjects) {
    const group = await Group.findOne({
      $or: [{ leaderId: proj.student }, { "members.userId": proj.student }],
    }).select("_id");
    if (group && !groupIds.includes(group._id.toString())) {
      groupIds.push(group._id.toString());
    }
  }

  return groupIds;
};

// Helper: Get all participant IDs for a group (leader + members + supervisor)
const getGroupParticipantIds = async (groupId) => {
  const group = await Group.findById(groupId);
  if (!group) return [];

  const participantIds = [
    group.leaderId.toString(),
    ...group.members.map((m) => m.userId.toString()),
  ];

  // Also include the supervisor if one is assigned
  const project = await Project.findOne({ student: group.leaderId }).select("supervisor");
  if (project && project.supervisor) {
    participantIds.push(project.supervisor.toString());
  }

  return [...new Set(participantIds)];
};

// Helper: Check if user is a participant of a conversation
const isUserInConversation = async (userId, conversationId) => {
  const conversation = await Conversation.findById(conversationId);
  if (!conversation) return false;
  return conversation.participants.some(
    (p) => p.toString() === userId.toString()
  );
};

// @route   GET /api/v1/chat/conversations
// @desc    Get all conversations for the logged-in user
// @access  Protected
export const getConversations = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // 1. Auto-sync group conversations first
  const groupIds = await getUserGroupIds(userId);
  for (const groupId of groupIds) {
    const participantIds = await getGroupParticipantIds(groupId);
    
    let conversation = await Conversation.findOne({
      type: "group",
      group: groupId,
    });

    if (!conversation) {
      await Conversation.create({
        type: "group",
        group: groupId,
        participants: participantIds,
      });
    } else {
      // Sync participants
      const existingIds = conversation.participants.map((p) => p.toString());
      const newIds = participantIds.filter((id) => !existingIds.includes(id));
      if (newIds.length > 0) {
        conversation.participants.push(...newIds);
        await conversation.save();
      }
    }
  }

  // 2. Now fetch all conversations
  const conversations = await Conversation.find({
    participants: userId,
  })
    .populate("participants", "name email role")
    .populate("group", "groupName pid")
    .populate("lastMessage.sender", "name")
    .sort({ "lastMessage.timestamp": -1, updatedAt: -1 });

  // Get unread counts for each conversation
  const conversationsWithUnread = await Promise.all(
    conversations.map(async (conv) => {
      const unreadCount = await Message.countDocuments({
        conversation: conv._id,
        sender: { $ne: userId },
        "readBy.user": { $ne: userId },
      });
      return { ...conv.toObject(), unreadCount };
    })
  );

  res.status(200).json({
    success: true,
    conversations: conversationsWithUnread,
  });
});

// @route   GET /api/v1/chat/conversations/group/:groupId
// @desc    Get or create a group conversation
// @access  Protected
export const getOrCreateGroupConversation = asyncHandler(
  async (req, res, next) => {
    const userId = req.user._id;
    const { groupId } = req.params;

    // Verify user belongs to this group
    const group = await Group.findById(groupId);
    if (!group) {
      return next(new ErrorHandler("Group not found", 404));
    }

    const participantIds = await getGroupParticipantIds(groupId);
    const isGroupMember = participantIds.includes(userId.toString());
    if (!isGroupMember) {
      return next(
        new ErrorHandler("You are not a member of this group", 403)
      );
    }

    // Check if conversation already exists
    let conversation = await Conversation.findOne({
      type: "group",
      group: groupId,
    })
      .populate("participants", "name email role")
      .populate("group", "groupName pid");

    if (!conversation) {
      // Create new group conversation
      conversation = await Conversation.create({
        type: "group",
        group: groupId,
        participants: participantIds,
      });
      conversation = await Conversation.findById(conversation._id)
        .populate("participants", "name email role")
        .populate("group", "groupName pid");
    } else {
      // Sync participants (members or supervisor may have changed)
      const existingIds = conversation.participants.map((p) =>
        (p._id || p).toString()
      );
      const newIds = participantIds.filter((id) => !existingIds.includes(id));
      if (newIds.length > 0) {
        conversation.participants.push(...newIds);
        await conversation.save();
        conversation = await Conversation.findById(conversation._id)
          .populate("participants", "name email role")
          .populate("group", "groupName pid");
      }
    }

    res.status(200).json({
      success: true,
      conversation,
    });
  }
);

// @route   POST /api/v1/chat/conversations/private
// @desc    Get or create a private conversation
// @access  Protected
export const getOrCreatePrivateConversation = asyncHandler(
  async (req, res, next) => {
    const userId = req.user._id;
    const { participantId } = req.body;

    if (!participantId) {
      return next(new ErrorHandler("Participant ID is required", 400));
    }

    if (participantId === userId.toString()) {
      return next(
        new ErrorHandler("Cannot create conversation with yourself", 400)
      );
    }

    // Verify the other user exists
    const otherUser = await User.findById(participantId);
    if (!otherUser) {
      return next(new ErrorHandler("User not found", 404));
    }

    // Verify both users share a group (or supervisor relationship)
    const userGroups = await Group.find({
      $or: [{ leaderId: userId }, { "members.userId": userId }],
    });

    let isAllowed = false;
    for (const group of userGroups) {
      const allParticipants = await getGroupParticipantIds(group._id);
      if (allParticipants.includes(participantId)) {
        isAllowed = true;
        break;
      }
    }

    // Also check if other user is supervisor of a group the user belongs to
    if (!isAllowed) {
      const otherUserGroups = await Group.find({
        $or: [
          { leaderId: participantId },
          { "members.userId": participantId },
        ],
      });
      for (const group of otherUserGroups) {
        const allParticipants = await getGroupParticipantIds(group._id);
        if (allParticipants.includes(userId.toString())) {
          isAllowed = true;
          break;
        }
      }
    }

    if (!isAllowed) {
      return next(
        new ErrorHandler(
          "You can only message members of your group or your supervisor",
          403
        )
      );
    }

    // Check if private conversation already exists between these two users
    let conversation = await Conversation.findOne({
      type: "private",
      participants: { $all: [userId, participantId], $size: 2 },
    })
      .populate("participants", "name email role")
      .populate("lastMessage.sender", "name");

    if (!conversation) {
      conversation = await Conversation.create({
        type: "private",
        participants: [userId, participantId],
      });
      conversation = await Conversation.findById(conversation._id)
        .populate("participants", "name email role");
    }

    res.status(200).json({
      success: true,
      conversation,
    });
  }
);

// @route   GET /api/v1/chat/messages/:conversationId
// @desc    Fetch messages for a conversation (paginated)
// @access  Protected
export const getMessages = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const { conversationId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 50;

  // Verify user is in the conversation
  if (!(await isUserInConversation(userId, conversationId))) {
    return next(
      new ErrorHandler("You are not a member of this conversation", 403)
    );
  }

  const skip = (page - 1) * limit;

  const messages = await Message.find({ conversation: conversationId })
    .populate("sender", "name email role")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  const totalMessages = await Message.countDocuments({
    conversation: conversationId,
  });

  res.status(200).json({
    success: true,
    messages: messages.reverse(), // Return in chronological order
    pagination: {
      page,
      limit,
      totalMessages,
      totalPages: Math.ceil(totalMessages / limit),
      hasMore: skip + limit < totalMessages,
    },
  });
});

// @route   POST /api/v1/chat/messages/:conversationId
// @desc    Send a message (REST fallback)
// @access  Protected
export const sendMessage = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const { conversationId } = req.params;
  const { content } = req.body;

  if (!content?.trim() && !req.file) {
    return next(new ErrorHandler("Message content or attachment is required", 400));
  }

  // Verify user is in the conversation
  if (!(await isUserInConversation(userId, conversationId))) {
    return next(
      new ErrorHandler("You are not a member of this conversation", 403)
    );
  }

  let attachment = null;
  let messageType = "text";

  if (req.file) {
    // Determine attachment type based on mimetype
    if (req.file.mimetype.startsWith("image/")) {
      messageType = "image";
    } else if (req.file.mimetype.startsWith("video/")) {
      messageType = "video";
    } else {
      messageType = "document";
    }

    const uploadResult = await uploadFileToSupabase(req.file, "chat_attachments");
    attachment = {
      url: uploadResult.url,
      filename: uploadResult.filename,
      mimeType: req.file.mimetype,
      size: req.file.size
    };
  }

  const message = await Message.create({
    conversation: conversationId,
    sender: userId,
    content: content?.trim() || "",
    messageType,
    attachment,
    readBy: [{ user: userId }],
  });

  // Update last message in conversation
  await Conversation.findByIdAndUpdate(conversationId, {
    lastMessage: {
      content: messageType !== "text" ? `Sent a ${messageType}` : content.trim().substring(0, 100),
      sender: userId,
      timestamp: new Date(),
    },
  });

  const populatedMessage = await Message.findById(message._id).populate(
    "sender",
    "name email role"
  );

  // Broadcast to all active users in the conversation room via Socket.io
  chatNamespace.to(conversationId).emit("new-message", populatedMessage);

  res.status(201).json({
    success: true,
    message: populatedMessage,
  });
});

// @route   PUT /api/v1/chat/messages/:conversationId/read
// @desc    Mark messages as read
// @access  Protected
export const markAsRead = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const { conversationId } = req.params;

  if (!(await isUserInConversation(userId, conversationId))) {
    return next(
      new ErrorHandler("You are not a member of this conversation", 403)
    );
  }

  // Mark all unread messages in this conversation as read
  await Message.updateMany(
    {
      conversation: conversationId,
      sender: { $ne: userId },
      "readBy.user": { $ne: userId },
    },
    {
      $push: { readBy: { user: userId, readAt: new Date() } },
    }
  );

  res.status(200).json({
    success: true,
    message: "Messages marked as read",
  });
});

// @route   GET /api/v1/chat/chatusers
// @desc    Get users the current user can chat with (same group + supervisor)
// @access  Protected
export const getChatUsers = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const groups = await Group.find({
    $or: [{ leaderId: userId }, { "members.userId": userId }],
  });

  const userIdSet = new Set();

  for (const group of groups) {
    const participantIds = await getGroupParticipantIds(group._id);
    participantIds.forEach((id) => {
      if (id !== userId.toString()) userIdSet.add(id);
    });
  }

  // Also if this user is a Teacher, get all groups where they are supervisor
  if (req.user.role === "Teacher") {
    const supervisedProjects = await Project.find({
      supervisor: userId,
    }).select("student");
    for (const proj of supervisedProjects) {
      const group = await Group.findOne({
        $or: [
          { leaderId: proj.student },
          { "members.userId": proj.student },
        ],
      });
      if (group) {
        const participantIds = await getGroupParticipantIds(group._id);
        participantIds.forEach((id) => {
          if (id !== userId.toString()) userIdSet.add(id);
        });
      }
    }
  }

  const chatUsers = await User.find({
    _id: { $in: Array.from(userIdSet) },
  }).select("name email role department");

  res.status(200).json({
    success: true,
    users: chatUsers,
  });
});

// @route   GET /api/v1/chat/teacher-groups
// @desc    Get all groups the teacher supervises with auto-created conversations
// @access  Protected (Teacher)
export const getTeacherGroupConversations = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;

  if (req.user.role !== "Teacher") {
    return next(new ErrorHandler("Only teachers can access this endpoint", 403));
  }

  // Find all projects where this teacher is supervisor
  const supervisedProjects = await Project.find({
    supervisor: userId,
  }).select("student");

  const groupConversations = [];

  for (const proj of supervisedProjects) {
    // Find the group the student leader belongs to
    const group = await Group.findOne({
      $or: [
        { leaderId: proj.student },
        { "members.userId": proj.student },
      ],
    });

    if (!group) continue;

    const participantIds = await getGroupParticipantIds(group._id);

    // Get or create the conversation for this group
    let conversation = await Conversation.findOne({
      type: "group",
      group: group._id,
    })
      .populate("participants", "name email role")
      .populate("group", "groupName pid");

    if (!conversation) {
      conversation = await Conversation.create({
        type: "group",
        group: group._id,
        participants: participantIds,
      });
      conversation = await Conversation.findById(conversation._id)
        .populate("participants", "name email role")
        .populate("group", "groupName pid");
    } else {
      // Sync participants
      const existingIds = conversation.participants.map((p) =>
        (p._id || p).toString()
      );
      const newIds = participantIds.filter((id) => !existingIds.includes(id));
      if (newIds.length > 0) {
        conversation.participants.push(...newIds);
        await conversation.save();
        conversation = await Conversation.findById(conversation._id)
          .populate("participants", "name email role")
          .populate("group", "groupName pid");
      }
    }

    // Get unread count
    const unreadCount = await Message.countDocuments({
      conversation: conversation._id,
      sender: { $ne: userId },
      "readBy.user": { $ne: userId },
    });

    groupConversations.push({ ...conversation.toObject(), unreadCount });
  }

  res.status(200).json({
    success: true,
    conversations: groupConversations,
  });
});
```

## server/router/chatRouter.js
```js
import express from "express";
import {
  getConversations,
  getOrCreateGroupConversation,
  getOrCreatePrivateConversation,
  getMessages,
  sendMessage,
  markAsRead,
  getChatUsers,
  getTeacherGroupConversations,
} from "../controller/chatController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/upload.js";

const router = express.Router();

// All chat routes require authentication
router.use(isAuthenticated);

router.get("/conversations", getConversations);
router.get("/conversations/group/:groupId", getOrCreateGroupConversation);
router.post("/conversations/private", getOrCreatePrivateConversation);

router.get("/messages/:conversationId", getMessages);
router.post("/messages/:conversationId", upload.single("file"), sendMessage);
router.put("/messages/:conversationId/read", markAsRead);

router.get("/chatusers", getChatUsers);
router.get("/teacher-groups", getTeacherGroupConversations);

export default router;
```

## server/models/conversation.js
```js
import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["group", "private"],
      required: true,
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      default: null,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lastMessage: {
      content: { type: String, default: null },
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
      timestamp: { type: Date, default: null },
    },
  },
  { timestamps: true }
);

conversationSchema.index({ group: 1 });
conversationSchema.index({ participants: 1 });
conversationSchema.index({ type: 1 });
conversationSchema.index({ "lastMessage.timestamp": -1 });

export const Conversation = mongoose.model("Conversation", conversationSchema);
```

## server/models/message.js
```js
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      maxlength: [5000, "Message cannot exceed 5000 characters"],
      trim: true,
    },
    messageType: {
      type: String,
      enum: ["text", "system", "image", "video", "document"],
      default: "text",
    },
    attachment: {
      url: String,
      filename: String,
      mimeType: String,
      size: Number,
    },
    readBy: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        readAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

messageSchema.index({ conversation: 1, createdAt: -1 });
messageSchema.index({ sender: 1 });

export const Message = mongoose.model("Message", messageSchema);
```

## server/server.js (chat section)
```js
// CHAT SOCKET (/chat namespace) - real-time messaging
const onlineUsers = new Map(); // userId -> socketId

const chatNamespace = io.of("/chat");

// Authenticate via JWT cookie
chatNamespace.use(async (socket, next) => {
  try {
    const rawCookie = socket.handshake.headers.cookie || "";
    const cookies = {};
    rawCookie.split(";").forEach((c) => {
      const [key, ...val] = c.trim().split("=");
      if (key) cookies[key.trim()] = val.join("=");
    });

    const token = cookies.token;
    if (!token) {
      return next(new Error("Authentication required"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("name email role");
    if (!user) {
      return next(new Error("User not found"));
    }

    socket.user = user;
    next();
  } catch (err) {
    next(new Error("Invalid token"));
  }
});

chatNamespace.on("connection", (socket) => {
  const userId = socket.user._id.toString();

  // Track online presence
  onlineUsers.set(userId, socket.id);
  chatNamespace.emit("user-online", { userId, name: socket.user.name });

  // Join all user's conversation rooms
  socket.on("join-conversations", async (conversationIds) => {
    if (Array.isArray(conversationIds)) {
      for (const convId of conversationIds) {
        socket.join(`conv:${convId}`);
      }
    }
  });

  // Send a message via socket (faster than REST)
  socket.on("send-message", async (data) => {
    try {
      const { conversationId, content } = data;
      if (!conversationId || !content || !content.trim()) return;

      // Verify participation
      const conversation = await Conversation.findById(conversationId);
      if (
        !conversation ||
        !conversation.participants.some(
          (p) => p.toString() === userId
        )
      ) {
        return;
      }

      // Save message
      const message = await Message.create({
        conversation: conversationId,
        sender: socket.user._id,
        content: content.trim(),
        readBy: [{ user: socket.user._id }],
      });

      // Update last message
      await Conversation.findByIdAndUpdate(conversationId, {
        lastMessage: {
          content: content.trim().substring(0, 100),
          sender: socket.user._id,
          timestamp: new Date(),
        },
      });

      const populatedMessage = await Message.findById(message._id).populate(
        "sender",
        "name email role"
      );

      // Broadcast to the conversation room
      chatNamespace
        .to(`conv:${conversationId}`)
        .emit("new-message", {
          message: populatedMessage,
          conversationId,
        });
    } catch (err) {
      console.error("Chat send-message error:", err.message);
    }
  });

  // Typing indicators
  socket.on("typing", ({ conversationId }) => {
    socket.to(`conv:${conversationId}`).emit("user-typing", {
      userId,
      name: socket.user.name,
      conversationId,
    });
  });

  socket.on("stop-typing", ({ conversationId }) => {
    socket.to(`conv:${conversationId}`).emit("user-stop-typing", {
      userId,
      conversationId,
    });
  });

  // Mark messages as read
  socket.on("mark-read", async ({ conversationId }) => {
    try {
      await Message.updateMany(
        {
          conversation: conversationId,
          sender: { $ne: socket.user._id },
          "readBy.user": { $ne: socket.user._id },
        },
        {
          $push: { readBy: { user: socket.user._id, readAt: new Date() } },
        }
      );

      socket.to(`conv:${conversationId}`).emit("messages-read", {
        conversationId,
        userId,
      });
    } catch (err) {
      console.error("Chat mark-read error:", err.message);
    }
  });

  // Disconnect
  socket.on("disconnect", () => {
    onlineUsers.delete(userId);
    chatNamespace.emit("user-offline", { userId });
  });
});

// Export onlineUsers and chatNamespace for REST endpoint usage
export { onlineUsers, chatNamespace };
```

## server/app.js (chat route wiring)
```js
import chatRoutes from "./router/chatRouter.js";

app.use("/api/v1/chat", chatRoutes);
```
