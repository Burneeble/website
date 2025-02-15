"use client";
import { Suspense, useRef } from "react";
import { TextCanvasProps } from "./TextCanvas.types";
import { Canvas } from "@react-three/fiber";
import { TextCanvasContent } from "./components/TextCanvasContent";
import * as THREE from "three";

const TextCanvas = (props: TextCanvasProps) => {
  const cameraRef = useRef<THREE.Camera | null>(null);

  return (
    <Suspense
      fallback={
        <>
          <h1
            className={`
              cs-text-color-primary-gradient tw-relative tw-w-full
              tw-text-center tw-font-bowlby-one-sc tw-text-[40vw]
              tw-text-headings

              lg:tw-text-[200px]

              sm:tw-text-[170px]
            `}
          >
            404
          </h1>{" "}
        </>
      }
    >
      <Canvas
        camera={{
          fov: 85,
          near: 0.1,
          far: 100,
        }}
        gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
        className={`
          text-3d-canvas !tw-h-[300px]

          lg:tw-w-[700px] lg:tw-absolute lg:tw-top-1/2 lg:tw-left-1/2
          lg:-tw-translate-y-[50%] lg:-tw-translate-x-[50%] lg:!tw-h-full
        `}
        onCreated={(state) => {
          cameraRef.current = state.camera;
        }}
      >
        <axesHelper args={[5]} />
        <TextCanvasContent />
      </Canvas>
    </Suspense>
  );
};

export default TextCanvas;
