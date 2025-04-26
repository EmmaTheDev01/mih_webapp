import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticlesAnimationProps {
  count?: number;
  color?: string;
  size?: number;
  radius?: number;
}

export default function ParticlesAnimation({
  count = 2000,
  color = '#1E3A8A',
  size = 0.02,
  radius = 1.5,
}: ParticlesAnimationProps) {
  const ref = useRef<THREE.Points>(null);

  // Generate random positions for particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const temp = new THREE.Vector3();
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      temp.x = Math.sin(phi) * Math.cos(theta) * radius;
      temp.y = Math.sin(phi) * Math.sin(theta) * radius;
      temp.z = Math.cos(phi) * radius;
      
      positions[i * 3] = temp.x;
      positions[i * 3 + 1] = temp.y;
      positions[i * 3 + 2] = temp.z;
    }
    
    return positions;
  }, [count, radius]);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.01;
      ref.current.rotation.y += delta * 0.015;
    }
  });
  
  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial 
        transparent
        color={color}
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
} 