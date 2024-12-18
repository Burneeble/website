"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Float } from "@react-three/drei";
import { useRef } from "react";

const CanvaContent = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    // Rotate the mesh every frame, this is outside of React without overhead
    if (cubeRef.current)
      cubeRef.current.rotation.x = cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls enableZoom={false} />

      <group ref={groupRef} position-y={2}>
        <mesh ref={cubeRef}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshBasicMaterial color={"purple"} />
        </mesh>
        <mesh position-x={-2}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="orange" />
        </mesh>
      </group>

      <Float floatIntensity={5}>
        <Text
          font={"/BowlbyOne-Regular.ttf"}
          fontSize={0.5}
          color={"white"}
          textAlign="center"
        >
          Still not sure?
        </Text>
      </Float>
    </>
  );
};

export default CanvaContent;
