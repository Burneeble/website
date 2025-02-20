"use client";

import { Suspense, useEffect } from "react";
import { Center, useGLTF, Clone, Html } from "@react-three/drei";
import { Euler, useThree, Vector3 } from "@react-three/fiber";

const CanvaContent = () => {
  const model = useGLTF("/models/thinking_emoji/scene.gltf");

  const { size } = useThree();

  // Function to calculate responsive positions
  const calculatePositionAndScale = (
    x: number,
    y: number,
    z: number,
    scale: number
  ) => {
    const positionFactor = size.width / 2000;
    const scaleFactor = size.width < 750 ? size.width / 700 : 1;

    return {
      position: [x * positionFactor, y, z] as Vector3,
      scale: scale * scaleFactor,
    };
  };

  useEffect(() => {
    console.log("Thinking Emoji Model by Ricardo Sanchez, Sketchfab");
  }, []);

  return (
    <>
      {/* <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      /> */}
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />

      <Center>
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

      {/* TODO add fallback */}
      <Suspense>
        {/*These objects represent the positions, scales, and rotations of the 3D models in the scene. */}
        {[
          {
            x: 4,
            y: 0.5,
            z: 1,
            scale: 0.5,
            rotation: [0, -0.3 * Math.PI, 0.2 * Math.PI],
          },
          { x: 2, y: 2, z: -2, scale: 0.3, rotation: [0, 0.2 * Math.PI, 0] },
          {
            x: 5,
            y: -1.5,
            z: 0.5,
            scale: 0.8,
            rotation: [0, -0.5 * Math.PI, 0],
          },
          {
            x: 4,
            y: 2.5,
            z: 0,
            scale: 1,
            rotation: [0, -0.1 * Math.PI, -0.1 * Math.PI],
          },
          {
            x: -3,
            y: 1,
            z: 2,
            scale: 0.3,
            rotation: [0, 0.5 * Math.PI, 0.2 * Math.PI],
          },
          { x: 1.5, y: -1, z: 1.5, scale: 0.3, rotation: [0, 0, 0] },
          {
            x: -6,
            y: -1,
            z: -1.5,
            scale: 1.2,
            rotation: [0, 0.2 * Math.PI, 0],
          },
          {
            x: -2,
            y: -2,
            z: 0,
            scale: 0.6,
            rotation: [0, 0.5 * Math.PI, -0.1 * Math.PI],
          },
          { x: -2.5, y: 2, z: -2, scale: 0.7, rotation: [0, 0, 0] },
          {
            x: -3,
            y: 4,
            z: -1.5,
            scale: 0.3,
            rotation: [0, -1.7 * Math.PI, 0],
          },
        ].map(({ x, y, z, scale, rotation }, index) => {
          const { position, scale: calculatedScale } =
            calculatePositionAndScale(x, y, z, scale);
          return (
            <Clone
              key={index}
              object={model.scene}
              position={position}
              scale={calculatedScale}
              rotation={rotation as Euler}
            />
          );
        })}
      </Suspense>
    </>
  );
};

export default CanvaContent;
useGLTF.preload("/models/thinking_emoji/scene.gltf");
