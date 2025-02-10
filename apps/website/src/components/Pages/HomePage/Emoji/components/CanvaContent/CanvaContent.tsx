"use client";

import * as THREE from "three";
import { Suspense, useEffect } from "react";
import {
  OrbitControls,
  Center,
  useMatcapTexture,
  useGLTF,
  Clone,
  Html,
} from "@react-three/drei";

const material = new THREE.MeshMatcapMaterial();

const CanvaContent = () => {
  // E9CCA1_A63106_DF8C3B_621304
  // 422509_C89536_824512_0A0604
  const [matcapTexture] = useMatcapTexture("E9CCA1_A63106_DF8C3B_621304", 512);

  const model = useGLTF("/models/thinking_emoji/scene.gltf");

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
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />

      <Center>
        {/* <Text3D
          font={"/Bowlby One_Regular.json"}
          size={0.35}
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
        </Text3D> */}
        <Html>
          <h2
            className={`
              title tw-text-center tw-w-[450px] tw-min-w-[100%] tw-absolute
              -tw-translate-x-1/2 -tw-translate-y-1/2
            `}
          >
            Still{" "}
            <span
              className={`
                cs-text-color-primary-gradient tw-font-normal tw-font-bowlby-one
              `}
            >
              not sure?
            </span>{" "}
          </h2>
        </Html>
      </Center>

      <Suspense>
        <Clone
          object={model.scene}
          position={[4, 0.5, 1]}
          scale={0.5}
          rotation={[0, -0.3 * Math.PI, 0.2 * Math.PI]}
        />
        <Clone
          object={model.scene}
          position={[2, 2, -2]}
          scale={0.3}
          rotation={[0, 0.2 * Math.PI, 0]}
        />
        <Clone
          object={model.scene}
          position={[5, -1.5, 0.5]}
          scale={0.8}
          rotation={[0, -0.5 * Math.PI, 0]}
        />
        <Clone
          object={model.scene}
          position={[4, 2.5, 0]}
          scale={1}
          rotation={[0, -0.1 * Math.PI, -0.1 * Math.PI]}
        />
        <Clone
          object={model.scene}
          position={[-3, 1, 2]}
          scale={0.3}
          rotation={[0, 0.5 * Math.PI, 0.2 * Math.PI]}
        />
        <Clone
          object={model.scene}
          position={[1.5, -1, 1.5]}
          scale={0.3}
          rotation={[0, 0, 0]}
        />
        <Clone
          object={model.scene}
          position={[-6, -1, -1.5]}
          scale={1.2}
          rotation={[0, 0.2 * Math.PI, 0]}
        />
        <Clone
          object={model.scene}
          position={[-2, -2, 0]}
          scale={0.6}
          rotation={[0, 0.5 * Math.PI, -0.1 * Math.PI]}
        />
        <Clone
          object={model.scene}
          position={[-2, 1, -2]}
          scale={0.7}
          rotation={[0, 0, 0]}
        />
        <Clone
          object={model.scene}
          position={[-3, 3, -1.5]}
          scale={0.3}
          rotation={[0, 0, 0]}
        />
      </Suspense>
      {/* <RandomPositionModel geometry={torusGeometry} material={material} /> */}
    </>
  );
};

export default CanvaContent;
useGLTF.preload("/models/thinking_emoji/scene.gltf");
