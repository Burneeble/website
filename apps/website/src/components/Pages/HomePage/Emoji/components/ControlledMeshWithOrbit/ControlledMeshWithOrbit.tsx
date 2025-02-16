"use client";

import { Clone, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ControlledMeshWithOrbitProps {
  object: THREE.Object3D;
  position: [number, number, number];
  scale: number;
  rotation: [number, number, number];
}

const ControlledMeshWithOrbit: React.FC<ControlledMeshWithOrbitProps> = ({
  object,
  position,
  scale,
  rotation,
}) => {
  const meshRef = useRef<THREE.Group>(null);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        target={meshRef.current ? meshRef.current.position : [0, 0, 0]}
      />
      <Clone
        ref={meshRef}
        object={object}
        position={position}
        scale={scale}
        rotation={rotation}
      />
    </>
  );
};

export default ControlledMeshWithOrbit;
