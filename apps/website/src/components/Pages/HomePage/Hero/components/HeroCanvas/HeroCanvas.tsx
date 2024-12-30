"use client";

import { Suspense, useEffect } from "react";
import { OrbitControls, Center, useGLTF, Clone } from "@react-three/drei";
import { useClientInfoService } from "@burneeble/ui-components";

const HeroCanvas = () => {
  const model = useGLTF("/models/thinking_emoji/scene.gltf");
  const { width } = useClientInfoService();
  useEffect(() => {
    console.log("model", model);
  }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />

      <Suspense>
        <Clone
          object={model.scene}
          scale={1}
          position={width && width < 992 ? [0, -2, 0] : [1, 1, 0]}
        />
        <Clone
          object={model.scene}
          scale={0.8}
          position={width && width < 992 ? [1.8, -0.5, 0] : [-0.5, -1, 0]}
        />
      </Suspense>
      {/* <RandomPositionModel geometry={torusGeometry} material={material} /> */}
    </>
  );
};

export default HeroCanvas;
useGLTF.preload("/models/thinking_emoji/scene.gltf");
