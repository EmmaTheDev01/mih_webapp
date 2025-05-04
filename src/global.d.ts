// src/three-types.d.ts
import { Object3DNode } from '@react-three/fiber';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      primitive: Object3DNode<THREE.Object3D, typeof THREE.Object3D>;
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      directionalLight: Object3DNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
      hemisphereLight: Object3DNode<THREE.HemisphereLight, typeof THREE.HemisphereLight>;
      pointLight: Object3DNode<THREE.PointLight, typeof THREE.PointLight>;
      spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;
      perspectiveCamera: Object3DNode<THREE.PerspectiveCamera, typeof THREE.PerspectiveCamera>;
      boxGeometry: Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
      sphereGeometry: Object3DNode<THREE.SphereGeometry, typeof THREE.SphereGeometry>;
      planeGeometry: Object3DNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
      meshBasicMaterial: Object3DNode<THREE.MeshBasicMaterial, typeof THREE.MeshBasicMaterial>;
      meshStandardMaterial: Object3DNode<THREE.MeshStandardMaterial, typeof THREE.MeshStandardMaterial>;
      meshPhongMaterial: Object3DNode<THREE.MeshPhongMaterial, typeof THREE.MeshPhongMaterial>;
      lineBasicMaterial: Object3DNode<THREE.LineBasicMaterial, typeof THREE.LineBasicMaterial>;
    }
  }
}

export {};
