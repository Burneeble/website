"use client";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text3D,
  Float,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { useRef } from "react";

const CanvaContent = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // E9CCA1_A63106_DF8C3B_621304
  // 422509_C89536_824512_0A0604
  const [matcapTexture] = useMatcapTexture("E9CCA1_A63106_DF8C3B_621304", 512);

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
      {/* fontSize={0.5}
        color={"white"}
        textAlign="center" */}

      <Center>
        <Float floatIntensity={5}>
          <Text3D
            font={"/Bowlby One_Regular.json"}
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            <meshMatcapMaterial matcap={matcapTexture} />
            Still not sure?
          </Text3D>
        </Float>
      </Center>
    </>
  );
};

export default CanvaContent;
