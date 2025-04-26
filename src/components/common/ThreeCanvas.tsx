import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Loading from './Loading';

interface ThreeCanvasProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  orbitControls?: boolean;
  className?: string;
  background?: string;
  enableZoom?: boolean;
}

export default function ThreeCanvas({
  children,
  cameraPosition = [0, 0, 5],
  orbitControls = false,
  className = '',
  background = 'transparent',
  enableZoom = false,
}: ThreeCanvasProps) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: cameraPosition }}
        style={{ background }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {children}
          {orbitControls && <OrbitControls enableZoom={enableZoom} />}
        </Suspense>
      </Canvas>
    </div>
  );
} 