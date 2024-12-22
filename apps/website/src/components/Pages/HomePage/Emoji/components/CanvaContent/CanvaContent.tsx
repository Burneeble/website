"use client";

import * as THREE from "three";
import { useEffect } from "react";
import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import RandomPositionModel from "../RandomPositionModel";

const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshMatcapMaterial();

const CanvaContent = () => {
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

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={1.5} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />

      <Center>
        <Text3D
          font={"/Bowlby One_Regular.json"}
          size={0.3}
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
      <RandomPositionModel geometry={torusGeometry} material={material} />
    </>
  );
};

export default CanvaContent;
