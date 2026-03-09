import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";
import { X, RotateCcw, Move, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

// Demo basin model - using a free model from the three.js examples
const DEMO_MODEL_URL = "https://threejs.org/examples/models/gltf/SheenChair.glb";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function ModelFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 0.5, 0.8]} />
      <meshStandardMaterial color="hsl(38, 60%, 55%)" />
    </mesh>
  );
}

function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground font-body">Loading 3D model...</p>
      </div>
    </Html>
  );
}

interface ARViewerProps {
  modelUrl?: string;
  productName: string;
  onClose: () => void;
  dimensions?: { width?: number | null; height?: number | null; depth?: number | null };
}

export default function ARViewer({ modelUrl, productName, onClose, dimensions }: ARViewerProps) {
  const [showControls, setShowControls] = useState(true);

  return (
    <div className="fixed inset-0 z-[100] bg-background">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-gradient-to-b from-background/90 to-transparent">
        <div>
          <h3 className="font-heading text-base font-semibold text-foreground">{productName}</h3>
          <p className="text-xs text-muted-foreground font-body">3D Preview — Drag to rotate</p>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full bg-secondary">
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }} className="touch-none">
        <Suspense fallback={<LoadingSpinner />}>
          <Stage environment="city" intensity={0.6}>
            {modelUrl ? (
              <Model url={modelUrl} />
            ) : (
              <ModelFallback />
            )}
          </Stage>
        </Suspense>
        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Controls Info */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-background/90 to-transparent">
          <div className="flex justify-center gap-6 mb-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <RotateCcw className="w-4 h-4 text-foreground" />
              </div>
              <span className="text-[10px] text-muted-foreground font-body">Rotate</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Move className="w-4 h-4 text-foreground" />
              </div>
              <span className="text-[10px] text-muted-foreground font-body">Pan</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-foreground" />
              </div>
              <span className="text-[10px] text-muted-foreground font-body">Zoom</span>
            </div>
          </div>
          {dimensions?.width && (
            <p className="text-center text-xs text-muted-foreground font-body">
              Dimensions: {dimensions.width}mm × {dimensions.height ?? "—"}mm × {dimensions.depth ?? "—"}mm
            </p>
          )}
          <p className="text-center text-[10px] text-muted-foreground font-body mt-2">
            * This is a visual preview for size & placement estimation
          </p>
          <button onClick={() => setShowControls(false)} className="text-[10px] text-accent font-body block mx-auto mt-1">
            Hide controls
          </button>
        </div>
      )}
    </div>
  );
}
