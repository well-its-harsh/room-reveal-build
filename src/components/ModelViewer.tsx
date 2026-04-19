import { Suspense, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, PerspectiveCamera, Environment, ContactShadows, Float, Html } from "@react-three/drei";
import { X, Loader2, Rotate3d, Maximize2, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

interface ModelViewerProps {
  modelUrl: string;
  productName: string;
  onClose: () => void;
}

export default function ModelViewer({ modelUrl, productName, onClose }: ModelViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="fixed inset-0 z-[110] bg-[#050505] flex flex-col">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 z-[120] p-6 flex items-center justify-between pointer-events-none">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-2xl pointer-events-auto">
          <h3 className="text-white text-base font-bold font-heading">{productName}</h3>
          <div className="flex items-center gap-2 mt-0.5">
             <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
             <p className="text-white/40 text-[10px] font-body uppercase tracking-[0.2em]">3D Asset Inspection</p>
          </div>
        </div>
        
        <Button 
          size="icon" 
          variant="ghost" 
          onClick={onClose} 
          className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 border border-white/10 pointer-events-auto transition-all active:scale-95"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Viewer Canvas */}
      <div className="flex-1 relative">
        <Canvas 
          shadows 
          camera={{ position: [0, 0, 5], fov: 45 }} 
          dpr={[1, 2]}
          gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={["#050505", 5, 15]} />
          
          <Suspense fallback={<Loader />}>
            <Stage 
              intensity={0.5} 
              environment="city" 
              adjustCamera={true} 
              shadows={{ type: 'contact', opacity: 0.8, blur: 3 }}
            >
              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <GltfModel url={modelUrl} onLoad={() => setIsLoading(false)} />
              </Float>
            </Stage>
            
            <OrbitControls 
              makeDefault 
              autoRotate={false} 
              autoRotateSpeed={0.5} 
              enableDamping={true}
              dampingFactor={0.05}
              minDistance={2}
              maxDistance={10}
            />
          </Suspense>
          
          <Environment preset="city" />
        </Canvas>

        {/* Interaction Hints */}
        {!isLoading && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[120] pointer-events-none fade-in">
             <div className="bg-white/5 backdrop-blur-lg border border-white/10 px-6 py-3 rounded-full flex items-center gap-4">
                <div className="flex items-center gap-2 text-white/50 text-xs font-body">
                   <Rotate3d className="w-4 h-4" />
                   <span>Drag to rotate</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-white/50 text-xs font-body">
                   <ZoomIn className="w-4 h-4" />
                   <span>Pinch to zoom</span>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

function GltfModel({ url, onLoad }: { url: string; onLoad: () => void }) {
  const { scene } = useGLTF(url) as any;
  
  // Notify parent on load
  useMemo(() => {
    onLoad();
  }, [scene, onLoad]);

  return <primitive object={scene} />;
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-accent animate-spin" />
          <div className="absolute inset-0 blur-xl bg-accent/20 animate-pulse" />
        </div>
        <p className="text-white/40 text-[10px] font-body uppercase tracking-[0.3em] font-bold">Synchronizing Geometry</p>
      </div>
    </Html>
  );
}
