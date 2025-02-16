"use client";

import { Suspense, useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useClientInfoService } from "@burneeble/ui-components";
import * as THREE from "three";

const HeroCanvas = () => {
  const reactModel = useGLTF("/models/react-svg/react-3d-icon.gltf");
  const flameModel = useGLTF("/models/flame/flame-3d-icon.gltf");

  const { width } = useClientInfoService();
  const heroGroup = useRef<THREE.Group>(null);
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        color={"#ffffff"}
        intensity={1}
        position={[-1, 1, 1]}
      />
      <Suspense>
        <Float>
          <group ref={heroGroup} position={[0, -0.5, 0]}>
            <primitive
              object={reactModel.scene}
              scale={1}
              rotation={[0, -0.15 * Math.PI, 0]}
              position={width && width < 992 ? [0, -1, 0] : [0.5, 1, 0]}
            />
            <primitive
              object={flameModel.scene}
              scale={0.5}
              rotation={[-0.35, 0.15 * Math.PI, 0.35]}
              position={width && width < 992 ? [1.8, 0.5, 1] : [-0.25, -0.5, 1]}
            />
          </group>
        </Float>
      </Suspense>
    </>
  );
};

export default HeroCanvas;
