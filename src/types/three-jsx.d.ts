// src/types/three-jsx.d.ts
import * as THREE from 'three';
import { Object3DNode } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      directionalLight: Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
      hemisphereLight: Object3DNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>;
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      // Add any other Three.js elements you use
    }
  }
}