"use client";
import { Suspense } from "react";
import { EmojiProps } from "./Emoji.types";
import { Canvas } from "@react-three/fiber";
import CanvaContent from "./components/CanvaContent";
import * as THREE from "three";

const Emoji = (props: EmojiProps) => {
  return (
    <Suspense
      fallback={
        <>
          {/* TODO create 2d Placeholder Section */}
          <p className="tw-text-headings">Loading</p>
        </>
      }
    >
      <Canvas
        gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
        style={{ height: "100vh", width: "100%" }}
      >
        <CanvaContent />
      </Canvas>
    </Suspense>
  );
};

export default Emoji;
