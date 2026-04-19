import { useState, useRef, useEffect, useCallback, Suspense, useMemo } from "react";
import { 
  X, 
  RotateCcw, 
  Move, 
  ZoomIn, 
  Camera, 
  Plus,
  Check, 
  AlertCircle,
  Maximize,
  ArrowDownCircle,
  RefreshCw,
  Box,
  Smartphone,
  ChevronRight,
  Hand
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { removeBackground } from "@imgly/background-removal";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { 
  sobelEdgeDetect, 
  detectVanishingPoints, 
  detectFloorPlane, 
  detectWalls, 
  realToPixelSize, 
  estimateRealSize 
} from "@/utils/arUtils";

interface ARViewerProps {
  productId: string;
  modelUrl?: string;
  productImages?: string[];
  productName: string;
  onClose: () => void;
  dimensions?: { width?: number | null; height?: number | null; depth?: number | null };
}

type ARStep = "analysis" | "placement" | "viewing";

export default function ARViewer({ productId, modelUrl, productImages = [], productName, onClose, dimensions }: ARViewerProps) {
  const [step, setStep] = useState<ARStep>("analysis");
  const [isRemovingBg, setIsRemovingBg] = useState(false);
  const [removedBgImage, setRemovedBgImage] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analysisCanvasRef = useRef<HTMLCanvasElement>(null);
  const frozenFrameRef = useRef<HTMLCanvasElement>(null);

  // CV State
  const [floorY, setFloorY] = useState(0.7);
  const [vanishingPoints, setVanishingPoints] = useState({ x: 0, y: 0 });
  const [walls, setWalls] = useState<number[]>([]);
  
  // Placement State
  const [placement, setPlacement] = useState({ x: 0.5, y: 0.7 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const realW = dimensions?.width || 600;
  const realH = dimensions?.height || 450;
  const realD = dimensions?.depth || 450;

  // 1. Initialize Camera and Analysis Loop
  useEffect(() => {
    if (step === "viewing") return;

    let mounted = true;
    let stream: MediaStream;
    let animationId: number;

    navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } } })
      .then(s => {
        if (!mounted) return;
        stream = s;
        if (videoRef.current) videoRef.current.srcObject = s;
        
        const process = () => {
          if (!mounted || !videoRef.current || !canvasRef.current || !analysisCanvasRef.current) return;
          
          const video = videoRef.current;
          const canvas = canvasRef.current;
          const analysis = analysisCanvasRef.current;
          const ctx = canvas.getContext("2d")!;
          const actx = analysis.getContext("2d", { willReadFrequently: true })!;

          if (video.readyState === video.HAVE_ENOUGH_DATA) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            // Downsample for CV performance
            analysis.width = video.videoWidth / 4;
            analysis.height = video.videoHeight / 4;

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            actx.drawImage(video, 0, 0, analysis.width, analysis.height);

            const imageData = actx.getImageData(0, 0, analysis.width, analysis.height);
            const edges = sobelEdgeDetect(imageData, analysis.width, analysis.height);
            
            const detectedY = detectFloorPlane(edges, analysis.width, analysis.height) / analysis.height;
            const { vp1 } = detectVanishingPoints(edges, analysis.width, analysis.height);
            const detectedWalls = detectWalls(edges, analysis.width, analysis.height).map(x => x / analysis.width);

            setFloorY(prev => prev * 0.8 + detectedY * 0.2); // Smooth
            setVanishingPoints({ x: vp1.x / analysis.width, y: vp1.y / analysis.height });
            setWalls(detectedWalls);

            // Draw Guides (Phase 2)
            drawOverlay(ctx, canvas.width, canvas.height, detectedY, vp1, detectedWalls);
          }
          animationId = requestAnimationFrame(process);
        };
        animationId = requestAnimationFrame(process);
      })
      .catch(err => {
        console.error("Camera access denied:", err);
        toast.error("Camera permission required for AR.");
        onClose();
      });

    return () => {
      mounted = false;
      if (stream) stream.getTracks().forEach(t => t.stop());
      cancelAnimationFrame(animationId);
    };
  }, [step]);

  const drawOverlay = (ctx: CanvasRenderingContext2D, w: number, h: number, fy: number, vp: any, corners: number[]) => {
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    
    // Floor Line
    ctx.strokeStyle = "rgba(74, 222, 128, 0.4)";
    ctx.beginPath();
    ctx.moveTo(0, fy * h);
    ctx.lineTo(w, fy * h);
    ctx.stroke();

    // Wall Corners
    ctx.strokeStyle = "rgba(96, 165, 250, 0.3)";
    corners.forEach(cx => {
      ctx.beginPath();
      ctx.moveTo(cx * w, 0);
      ctx.lineTo(cx * w, h);
      ctx.stroke();
    });

    // Floor Grid (Phase 2 & 3)
    if (step === "placement") {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      
      // Horizontal grid lines
      for (let i = 0; i <= 8; i++) {
        const y = fy * h + (h - fy * h) * (i / 8);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      
      // Vertical grid lines (convergence)
      const vpx = vp.x * 4; // adjusted for downsampling
      for (let i = -10; i <= 10; i++) {
        const x = w/2 + i * (w/20);
        ctx.beginPath();
        ctx.moveTo(vpx, fy * h);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
    }
  };

  // 2. Background Removal & Caching (Phase 7)
  const processBackgroundRemoval = useCallback(async () => {
    if (modelUrl || removedBgImage) return;
    
    const cacheKey = `bg-removed-${productId}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
      setRemovedBgImage(cached);
      return;
    }

    if (productImages.length === 0) return;

    try {
      setIsRemovingBg(true);
      const mainImg = productImages[0];
      const blob = await removeBackground(mainImg);
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        const base64 = reader.result as string;
        setRemovedBgImage(base64);
        sessionStorage.setItem(cacheKey, base64);
      };
    } catch (err) {
      console.error("BG Removal Error:", err);
      // Fallback to original
      setRemovedBgImage(productImages[0]);
    } finally {
      setIsRemovingBg(false);
    }
  }, [productId, modelUrl, productImages]);

  useEffect(() => {
    processBackgroundRemoval();
  }, [processBackgroundRemoval]);

  // 3. Interactions
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!canvasRef.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const rect = canvasRef.current.getBoundingClientRect();
    
    let nx = (clientX - rect.left) / rect.width;
    let ny = (clientY - rect.top) / rect.height;

    // Snapping logic (Phase 4)
    if (Math.abs(ny - floorY) < 0.05) ny = floorY;
    walls.forEach(wx => {
      if (Math.abs(nx - wx) < 0.05) nx = wx;
    });

    setPlacement({ x: nx, y: ny });
    if (step === "analysis") setStep("placement");
  };

  const confirmPlacement = () => {
    if (!videoRef.current || !frozenFrameRef.current) return;
    
    // Freeze Frame (Phase 4.2)
    const video = videoRef.current;
    const frozen = frozenFrameRef.current;
    frozen.width = video.videoWidth;
    frozen.height = video.videoHeight;
    frozen.getContext("2d")?.drawImage(video, 0, 0);
    
    setStep("viewing");
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black touch-none flex flex-col overflow-hidden">
      {/* Top UI */}
      <div className="absolute top-0 left-0 right-0 z-50 p-6 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1 pointer-events-auto">
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl">
            <h3 className="text-white text-sm font-bold font-heading">{productName}</h3>
            <p className="text-white/40 text-[10px] font-body uppercase tracking-[0.2em]">
              {step === "analysis" ? "Scanning Room..." : step === "placement" ? "Position Product" : "Confirming Match"}
            </p>
          </div>
        </div>
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={onClose} 
          className="rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-red-500/80 pointer-events-auto"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Main Viewport */}
      <div className="flex-1 relative bg-[#0a0a0a]">
        {step !== "viewing" ? (
          <>
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
            />
            <canvas 
              ref={canvasRef} 
              className="absolute inset-0 w-full h-full opacity-80"
              onMouseDown={handleMove}
              onTouchStart={handleMove}
              onTouchMove={handleMove}
            />
            {/* Ghost Indicator */}
            {step === "placement" && (
              <div 
                className="absolute pointer-events-none"
                style={{ 
                  left: `${placement.x * 100}%`, 
                  top: `${placement.y * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-2">
                   <Move className="w-3 h-3 text-white" />
                   <span className="text-[10px] font-bold text-white font-body">~{realW}mm × {realH}mm</span>
                </div>
              </div>
            )}
            {/* Hidden analysis canvas */}
            <canvas ref={analysisCanvasRef} className="hidden" />
          </>
        ) : (
          <ThreeViewport 
            modelUrl={modelUrl}
            imageUrl={removedBgImage}
            frozenFrame={frozenFrameRef.current}
            placement={placement}
            floorY={floorY}
            realDims={{ width: realW, height: realH, depth: realD }}
          />
        )}
      </div>

      {/* Instruction Overlay */}
      {step === "analysis" && (
        <div className="absolute inset-0 z-40 pointer-events-none flex flex-col items-center justify-center p-12 text-center">
            <div className="bg-black/40 backdrop-blur px-6 py-4 rounded-3xl border border-white/5 mb-20 animate-pulse">
               <Smartphone className="w-8 h-8 text-accent mx-auto mb-3" />
               <p className="text-white text-sm font-body">Slowly point at your floor<br/>to start analyzing</p>
            </div>
        </div>
      )}

      {/* Bottom Sheet UI */}
      <div className="absolute bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          {step === "placement" && (
            <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl flex flex-col gap-5">
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 overflow-hidden shrink-0 p-1">
                    <img src={removedBgImage || productImages[0]} className="w-full h-full object-contain" />
                 </div>
                 <div className="flex-1">
                    <h4 className="text-white font-bold font-heading text-sm">{productName}</h4>
                    <p className="text-white/40 text-[11px] font-body">Snap to floor or wall corners</p>
                 </div>
              </div>
              
              <div className="flex gap-3">
                 <Button 
                   variant="ghost" 
                   className="flex-1 bg-white/5 text-white h-14 rounded-2xl border border-white/10"
                   onClick={() => setStep("analysis")}
                 >
                   Reset
                 </Button>
                 <Button 
                   className="flex-[2] bg-accent text-accent-foreground h-14 rounded-2xl font-bold shadow-[0_0_20px_rgba(var(--accent),0.3)]"
                   onClick={confirmPlacement}
                 >
                   <Check className="w-5 h-5 mr-2" /> Confirm Placement
                 </Button>
              </div>
            </div>
          )}

          {step === "viewing" && (
            <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl flex flex-col gap-4 items-center text-center">
               <div className="flex flex-col gap-1 mb-2">
                 <p className="text-white text-sm font-bold font-heading">Successfully Placed!</p>
                 <p className="text-white/40 text-[10px] font-body">Rotate below to view different angles</p>
               </div>
               <div className="flex gap-3 w-full">
                  <Button 
                    className="flex-1 bg-white/5 text-white h-12 rounded-2xl border border-white/10"
                    onClick={() => {
                        setStep("placement");
                        // Release frozen frame? handled by state
                    }}
                  >
                    Adjust
                  </Button>
                  <Button 
                    className="flex-1 bg-accent text-accent-foreground h-12 rounded-2xl font-bold"
                    onClick={onClose}
                  >
                    Finish
                  </Button>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Background Frame Capture (Hidden) */}
      <canvas ref={frozenFrameRef} className="hidden" />
      
      {isRemovingBg && (
        <div className="absolute inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-8 text-center text-white">
           <RefreshCw className="w-12 h-12 text-accent animate-spin mb-4" />
           <p className="text-lg font-heading font-bold">Preparing 3D Visualizer</p>
           <p className="text-sm text-white/60 font-body mt-2">Optimizing assets for your room...</p>
        </div>
      )}
    </div>
  );
}

// -----------------------------------------------------------------------------
// 3D Rendering Component (Phase 5)
// -----------------------------------------------------------------------------

function ThreeViewport({ modelUrl, imageUrl, frozenFrame, placement, floorY, realDims }: any) {
  const bgTexture = useMemo(() => {
    if (!frozenFrame) return null;
    const tex = new THREE.CanvasTexture(frozenFrame);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [frozenFrame]);

  // World Pos Calculation
  const worldPos = useMemo(() => {
    // Basic heuristics for Three.js world mapping
    // Screen center is 0,0,0
    const x = (placement.x - 0.5) * 5;
    const z = (placement.y - floorY) * 10; // Depth based on floor dist
    const y = -1.5; // Fixed floor plane in viewer coords
    return new THREE.Vector3(x, y, z);
  }, [placement, floorY]);

  return (
    <div className="w-full h-full">
      <Canvas shadows camera={{ position: [0, 1.5, 4], fov: 65 }} dpr={[1, 2]}>
        {bgTexture && <primitive object={bgTexture} attach="background" />}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} adjustCamera={false}>
            {modelUrl ? (
              <GltfModel 
                url={modelUrl} 
                pos={worldPos} 
                widthMm={realDims.width} 
              />
            ) : (
              <BillboardImage 
                url={imageUrl} 
                pos={worldPos} 
                dims={realDims} 
              />
            )}
          </Stage>
          <ContactShadows 
            position={[0, -1.6, 0]} 
            opacity={0.6} 
            scale={10} 
            blur={2.5} 
            far={4.5} 
          />
          <OrbitControls 
            target={worldPos} 
            makeDefault 
            enablePan={false}
            maxDistance={10}
            minDistance={1.5}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

function GltfModel({ url, pos, widthMm }: any) {
  const { scene } = useGLTF(url) as any;
  
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const targetWInM = widthMm / 1000;
    const scale = targetWInM / size.x;
    scene.scale.setScalar(scale);
    scene.position.copy(pos);
  }, [scene, pos, widthMm]);

  return <primitive object={scene} />;
}

function BillboardImage({ url, pos, dims }: any) {
  const texture = useMemo(() => {
    if (!url) return null;
    return new THREE.TextureLoader().load(url);
  }, [url]);

  if (!texture) return null;

  const widthM = dims.width / 1000;
  const heightM = dims.height / 1000;

  return (
    <mesh position={pos}>
      <planeGeometry args={[widthM, heightM]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        alphaTest={0.5} 
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}
