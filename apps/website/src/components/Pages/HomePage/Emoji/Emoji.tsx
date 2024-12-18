"use client";

import { EmojiProps } from "./Emoji.types";
import { Canvas } from "@react-three/fiber";
import CanvaContent from "./components/CanvaContent";
import * as THREE from "three";

const Emoji = (props: EmojiProps) => {
  return (
    <Canvas
      gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}
      style={{ height: "100vh", width: "100%" }}
    >
      <CanvaContent />
    </Canvas>
  );
};

export default Emoji;
