// src/react-three-fiber-types.d.ts
import '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Allow any custom tags used by React Three Fiber
      [elemName: string]: any;
    }
  }
}
