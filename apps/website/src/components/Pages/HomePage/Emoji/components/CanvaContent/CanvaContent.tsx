"use client";

import * as THREE from "three";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Text3D,
  Float,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { useRef } from "react";

const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshMatcapMaterial();

const CanvaContent = () => {
  const groupRef = useRef<THREE.Group>(null);

  // E9CCA1_A63106_DF8C3B_621304
  // 422509_C89536_824512_0A0604
  const [matcapTexture] = useMatcapTexture("E9CCA1_A63106_DF8C3B_621304", 512);

  //update the material with the new texture
  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current)
      for (const child of groupRef.current.children as THREE.Mesh[]) {
        child.rotation.y += delta * 0.2;
      }
  });

  return (
    <>
      <OrbitControls enableZoom={false} />

      <Center>
        <Text3D
          font={"/Bowlby One_Regular.json"}
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          Still not sure?
        </Text3D>
      </Center>
      <Float>
        <group ref={groupRef}>
          {[...Array(20)].map((_, index) => (
            <mesh
              geometry={torusGeometry}
              material={material}
              key={index}
              position={[
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
                Math.random() * 10 - 5,
              ]}
              scale={0.4 + Math.random() * 0.4}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
            />
          ))}
        </group>
      </Float>
    </>
  );
};

export default CanvaContent;
