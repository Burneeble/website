"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useClientInfoService } from "@burneeble/ui-components";
import * as THREE from "three";

const WireframeMeshes = () => {
  const { width } = useClientInfoService();

  return (
    <>
      <mesh
        scale={width && width < 992 ? 0.75 : 1}
        position={
          width && width < 767
            ? [0.25, -1.5, 0]
            : width && width < 992
            ? [0.5, -1, 0]
            : [0.75, 1, -1]
        }
      >
        <sphereGeometry args={[2.2]} />
        <meshBasicMaterial wireframe color="#F4511E" />
      </mesh>
      <mesh
        scale={width && width < 992 ? 0.75 : 1}
        position={
          width && width < 767
            ? [1.25, 0.5, 1]
            : width && width < 992
            ? [1.75, 0.5, 1]
            : [-0.25, -0.75, 1]
        }
        rotation={[-0.35, 0.15 * Math.PI, 0.35]}
      >
        <coneGeometry args={[0.75, 1.7]} />
        <meshBasicMaterial wireframe color="#FFA726" />
      </mesh>
    </>
  );
};

const HeroCanvas = () => {
  const reactModel = useGLTF("/models/react-svg/react-3d-icon.gltf");
  const flameModel = useGLTF("/models/flame/flame-3d-icon.gltf");

  const [showRandomPrimitive, setShowRandomPrimitive] = useState<boolean>(true);

  const { width } = useClientInfoService();
  const heroGroup = useRef<THREE.Group>(null);

  useEffect(() => {
    setShowRandomPrimitive(Math.random() < 0.5);
  }, []);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight
        castShadow
        color={"#ffffff"}
        intensity={1}
        position={[-1, 1, 1]}
      />
      <Float floatingRange={[-0.25, 0.25]}>
        <group
          ref={heroGroup}
          position={width && width >= 992 ? [0, -0.5, 0] : [0, 0, 0]}
          scale={width && width < 600 ? 0.8 : 1}
        >
          <Suspense
            fallback={
              <>
                <WireframeMeshes />
              </>
            }
          >
            {showRandomPrimitive ? (
              <>
                <primitive
                  object={reactModel.scene}
                  scale={1}
                  rotation={[0, -0.15 * Math.PI, 0]}
                  position={
                    width && width < 992 ? [0.75, -1.5, 0] : [0.5, 1, 0]
                  }
                />{" "}
                <primitive
                  object={flameModel.scene}
                  scale={0.5}
                  rotation={
                    width && width < 992
                      ? [0, -0.15 * Math.PI, 0.35]
                      : [-0.35, 0.15 * Math.PI, 0.35]
                  }
                  position={
                    width && width < 992 ? [1.75, 0.25, 1] : [-0.25, -0.5, 1]
                  }
                />
              </>
            ) : (
              <>
                <WireframeMeshes />
              </>
            )}
          </Suspense>
        </group>
      </Float>
    </>
  );
};

export default HeroCanvas;
