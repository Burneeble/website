"use client";

import { Suspense, useEffect } from "react";
import { OrbitControls, Center, useGLTF, Clone, Float } from "@react-three/drei";
import { useClientInfoService } from "@burneeble/ui-components";

const HeroCanvas = () => {
  const model = useGLTF("/models/react-svg/react-icon.gltf");
  const { width } = useClientInfoService();
  useEffect(() => {
    console.log("model", model);
  }, []);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />




         <Suspense>
 <Float>
         <Clone
          object={model.scene}
          scale={1}
          rotation={[0, -0.15* Math.PI, 0]}          position={width && width < 992 ? [0, -1, 0] : [0.5, 1, 0]}
        />
        <Clone
          object={model.scene}
          scale={0.6}
          rotation={[0, 0.15* Math.PI, 0]} 
          position={width && width < 992 ? [1.8, 0.5, 0] : [-0.25, -.8, 0]}
        />
 </Float>
      </Suspense> 
    </>
  );
};

export default HeroCanvas;
useGLTF.preload("/models/thinking_emoji/scene.gltf");
