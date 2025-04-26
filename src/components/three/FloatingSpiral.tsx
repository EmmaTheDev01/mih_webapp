import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingSpiralProps {
  count?: number;
  radius?: number;
  height?: number;
  rotationSpeed?: number;
  color?: string;
  sphereRadius?: number;
}

export default function FloatingSpiral({
  count = 100,
  radius = 3,
  height = 10,
  rotationSpeed = 0.3,
  color = '#F97316',
  sphereRadius = 0.05,
}: FloatingSpiralProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate points for the spiral
  const points = useMemo(() => {
    const tempPoints = [];
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 10;
      const x = Math.cos(angle) * radius * (1 - t * 0.5);
      const y = t * height - height / 2;
      const z = Math.sin(angle) * radius * (1 - t * 0.5);
      tempPoints.push(new THREE.Vector3(x, y, z));
    }
    return tempPoints;
  }, [count, radius, height]);
  
  // Animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
    }
  });
  
  return (
    <group ref={groupRef}>
      <Line 
        points={points} 
        color={color} 
        lineWidth={1.5} 
      />
      {points.map((point, i) => (
        i % 10 === 0 && (
          <Sphere key={i} position={[point.x, point.y, point.z]} args={[sphereRadius, 8, 8]}>
            <meshBasicMaterial color={color} toneMapped={false} />
          </Sphere>
        )
      ))}
    </group>
  );
} 