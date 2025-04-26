import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveCubeProps {
  position?: [number, number, number];
  size?: number;
  color?: string;
  wobbleSpeed?: number;
  wobbleStrength?: number;
}

export default function InteractiveCube({
  position = [0, 0, 0],
  size = 1,
  color = '#0D9488',
  wobbleSpeed = 1,
  wobbleStrength = 0.2,
}: InteractiveCubeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={new THREE.Vector3(...position)}
      scale={clicked ? 1.2 : hovered ? 1.1 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[size, size, size]} />
      <MeshWobbleMaterial 
        color={hovered ? '#F97316' : color} 
        factor={wobbleStrength} 
        speed={wobbleSpeed} 
        metalness={0.4}
        roughness={0.7}
      />
    </mesh>
  );
} 