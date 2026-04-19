# Meeting Module Backend Code

## Share Guide 
Use this file to implement the same meeting scheduling and live-meeting socket functionality in another backend project.

### 1. Required Backend Stack

- Node.js with Express
- MongoDB with Mongoose
- Socket.IO (WebRTC signaling layer)
- JWT-based authentication middleware

### 2. Required Dependencies

Install these if missing:

```bash
npm install express mongoose socket.io
```

### 3. Required Existing Modules in Friend Project

This meeting logic depends on these modules. If names differ, map import paths.

- Group model
- User model
- Auth middleware (`isAuthenticated`, `isAuthorized`)
- Async handler middleware
- Error handler class
- Email service (optional but recommended for notifications)

### 4. Environment Variables

Your friend should define:

- `FRONTEND_URL` (for socket CORS)
- Email credentials (if using notification emails)

### 5. Integration Steps

1. Copy meeting controller, router, and model code from this file.
2. Mount meeting route in app setup: `/api/v1/meeting`.
3. Add default namespace meeting socket events in server setup.
4. Keep room identifier consistent between frontend and backend (`roomId`).
5. If email service is unavailable, keep create meeting flow and remove only email sending block.

### 6. Important Path Mapping

Update import paths for your friend project structure, especially:

- `../models/...`
- `../middlewares/...`
- `../services/...`

### 7. Suggested API Test Checklist

- `POST /api/v1/meeting/create`
- `GET /api/v1/meeting/supervisor`
- `GET /api/v1/meeting/student`
- `GET /api/v1/meeting/:id`
- `DELETE /api/v1/meeting/delete/:id`
- `PUT /api/v1/meeting/complete/:id`

### 8. Suggested Socket Test Checklist

- Join room flow (`join-room`)
- Offer/answer/ice exchange
- In-room chat (`send-message`, `receive-message`)
- Media status events (audio/video/screen/hand)
- End meeting (`end-meeting`, `meeting-ended`)
- Disconnect cleanup in active user records

## server/controller/meetingController.js
```js
import { asyncHandler } from "../middlewares/asyncHandler.js";
import ErrorHandler from "../middlewares/error.js";
import { Group } from "../models/group.js";
import { Meeting } from "../models/meeting.js";
import { sendEmail } from "../services/emailService.js";

// @route   POST /api/v1/meeting/create
// @desc    Create a new meeting (Supervisor only)
// @access  Protected (Teacher)
export const createMeeting = asyncHandler(async (req, res, next) => {
  const { title, description, date, groupId } = req.body;

  if (!title || !description || !date || !groupId) {
    return next(new ErrorHandler("Please provide all meeting details", 400));
  }

  if (new Date(date) < Date.now()) {
    return next(new ErrorHandler("Meeting date cannot be in the past", 400));
  }

  // Verify group exists
  const group = await Group.findById(groupId).populate("leaderId", "email name");
  if (!group) {
    return next(new ErrorHandler("Group not found", 404));
  }

  // Create meeting
  const meeting = await Meeting.create({
    title,
    description,
    date,
    groupId,
    createdBy: req.user._id,
  });

  // Prepare email recipients
  const emailList = [];
  if (group.leaderId && group.leaderId.email) {
    emailList.push(group.leaderId.email);
  }
  
  group.members.forEach((member) => {
    if (member.email) {
      emailList.push(member.email);
    }
  });

  // Send emails
  if (emailList.length > 0) {
    const formattedDate = new Date(date).toLocaleString();
    const message = `
      <h3>Meeting Scheduled: ${title}</h3>
      <p><strong>Description:</strong> ${description}</p>
      <p><strong>Date & Time:</strong> ${formattedDate}</p>
      <p><strong>Message:</strong> Meeting scheduled. Join on time.</p>
    `;

    try {
      await sendEmail({
        to: emailList.join(","),
        subject: `New Meeting Scheduled: ${title}`,
        message,
      });
    } catch (err) {
      console.log("Failed to send meeting emails:", err.message);
      // We don't fail the request if emails fail, just log it.
    }
  }

  res.status(201).json({
    success: true,
    message: "Meeting created and notifications sent in the background",
    meeting,
  });
});

// @route   GET /api/v1/meeting/supervisor
// @desc    Get meetings created by supervisor
// @access  Protected (Teacher)
export const getSupervisorMeetings = asyncHandler(async (req, res, next) => {
  const meetings = await Meeting.find({ createdBy: req.user._id })
    .populate("groupId", "groupName")
    .sort({ date: 1 });

  res.status(200).json({
    success: true,
    meetings,
  });
});

// @route   GET /api/v1/meeting/student
// @desc    Get meetings for student's group
// @access  Protected (Student)
export const getStudentMeetings = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;

  // Find the group the student belongs to
  const group = await Group.findOne({
    $or: [{ leaderId: userId }, { "members.userId": userId }],
  });

  let meetings = [];
  if (group) {
    meetings = await Meeting.find({ groupId: group._id })
      .populate("createdBy", "name email")
      .sort({ date: 1 });
  }

  res.status(200).json({
    success: true,
    meetings,
  });
});

// @route   DELETE /api/v1/meeting/delete/:id
// @desc    Delete a meeting
// @access  Protected (Teacher)
export const deleteMeeting = asyncHandler(async (req, res, next) => {
  const meeting = await Meeting.findById(req.params.id);

  if (!meeting) {
    return next(new ErrorHandler("Meeting not found", 404));
  }

  // Ensure only the creator can delete
  if (meeting.createdBy.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("You are not authorized to delete this meeting", 403));
  }

  await meeting.deleteOne();

  res.status(200).json({
    success: true,
    message: "Meeting deleted successfully",
  });
});
// @route   PUT /api/v1/meeting/complete/:id
// @desc    Mark meeting as completed
// @access  Protected (Teacher)
export const completeMeeting = asyncHandler(async (req, res, next) => {
  const meeting = await Meeting.findById(req.params.id);

  if (!meeting) {
    return next(new ErrorHandler("Meeting not found", 404));
  }

  // Ensure only the creator can complete the meeting
  if (meeting.createdBy.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("You are not authorized to end this meeting", 403));
  }

  meeting.status = "completed";
  await meeting.save();

  res.status(200).json({
    success: true,
    message: "Meeting marked as completed",
    meeting,
  });
});

// @route   GET /api/v1/meeting/:id
// @desc    Get a single meeting by ID
// @access  Protected
export const getMeetingById = asyncHandler(async (req, res, next) => {
  const meeting = await Meeting.findById(req.params.id)
    .populate("createdBy", "name email role")
    .populate("groupId", "groupName");

  if (!meeting) {
    return next(new ErrorHandler("Meeting not found", 404));
  }

  res.status(200).json({
    success: true,
    meeting,
  });
});
```

## server/router/meetingRouter.js
```js
import express from "express";
import { isAuthenticated, isAuthorized } from "../middlewares/authMiddleware.js";
import {
  createMeeting,
  getSupervisorMeetings,
  getStudentMeetings,
  deleteMeeting,
  completeMeeting,
  getMeetingById,
} from "../controller/meetingController.js";

const router = express.Router();

router.post("/create", isAuthenticated, isAuthorized("Teacher"), createMeeting);
router.get("/supervisor", isAuthenticated, isAuthorized("Teacher"), getSupervisorMeetings);
router.get("/student", isAuthenticated, isAuthorized("Student"), getStudentMeetings);
router.get("/:id", isAuthenticated, getMeetingById);
router.delete("/delete/:id", isAuthenticated, isAuthorized("Teacher"), deleteMeeting);
router.put("/complete/:id", isAuthenticated, isAuthorized("Teacher"), completeMeeting);

export default router;
```

## server/models/meeting.js
```js
import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed"],
      default: "upcoming",
    },
  },
  { timestamps: true }
);

export const Meeting = mongoose.model("Meeting", meetingSchema);
```

## server/models/activeUser.js
```js
import mongoose from "mongoose";

const activeUserSchema = new mongoose.Schema(
  {
    socketId: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    roomId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ActiveUser = mongoose.model("ActiveUser", activeUserSchema);
```

## server/server.js (meeting socket section)
```js
// MEETING SOCKET (default namespace) - existing WebRTC
io.on("connection", (socket) => {
  socket.on("join-room", async (roomId, userId, name) => {
    try {
      socket.join(roomId);

      // Persist active user to database
      await ActiveUser.findOneAndUpdate(
        { userId, roomId },
        { socketId: socket.id, name },
        { upsert: true, new: true }
      );

      // Fetch all current participants for this room from DB
      const otherUsers = await ActiveUser.find({ 
        roomId, 
        socketId: { $ne: socket.id } 
      }).select("socketId userId name");

      socket.emit("all-users", otherUsers);
      socket.to(roomId).emit("user-connected", userId, name, socket.id);

    } catch (error) {
      console.error("Socket Join Error:", error.message);
    }
  });

  socket.on("offer", (offer, targetSocketId, senderId, senderName) => {
    io.to(targetSocketId).emit("offer", offer, socket.id, senderId, senderName);
  });

  socket.on("answer", (answer, targetSocketId, senderId) => {
    io.to(targetSocketId).emit("answer", answer, socket.id, senderId);
  });

  socket.on("ice-candidate", (candidate, targetSocketId, senderId) => {
    io.to(targetSocketId).emit("ice-candidate", candidate, socket.id, senderId);
  });

  socket.on("send-message", (roomId, message) => {
    socket.to(roomId).emit("receive-message", message);
  });

  socket.on("toggle-audio", (roomId, userId, isMuted) => {
    socket.to(roomId).emit("user-audio-status", userId, isMuted);
  });

  socket.on("toggle-video", (roomId, userId, isVideoOff) => {
    socket.to(roomId).emit("user-video-status", userId, isVideoOff);
  });

  socket.on("toggle-screen", (roomId, userId, isScreenSharing) => {
    socket.to(roomId).emit("user-screen-status", userId, isScreenSharing);
  });

  socket.on("user-hand-status", (roomId, userId, isHandRaised) => {
    socket.to(roomId).emit("user-hand-status", userId, isHandRaised);
  });

  socket.on("end-meeting", async (roomId) => {
    socket.to(roomId).emit("meeting-ended");
    await ActiveUser.deleteMany({ roomId });
  });

  socket.on("disconnect", async () => {
    try {
      const user = await ActiveUser.findOneAndDelete({ socketId: socket.id });
      if (user) {
        socket.to(user.roomId).emit("user-disconnected", user.userId);
      }
    } catch (error) {
      console.error("Socket Disconnect Error:", error.message);
    }
  });
});
```

## server/app.js (meeting route wiring)
```js
import meetingRoutes from "./router/meetingRouter.js";

app.use("/api/v1/meeting", meetingRoutes);
```
