"use client";
import { Suspense } from "react";
import { EmojiProps } from "./Emoji.types";
import { Canvas } from "@react-three/fiber";
import CanvaContent from "./components/CanvaContent";
import * as THREE from "three";

const Emoji = (props: EmojiProps) => {
  return (
    <section
      id={"notSure"}
      className={`
        emoji-section cs-section-structure tw-relative tw-flex tw-items-center
        tw-justify-center
      `}
    >
      <div
        className={`
          emoji-shape tw-absolute tw-left-1/2 tw-top-1/2 tw-h-[40rem]
          tw-w-[40rem] -tw-translate-x-1/2 -tw-translate-y-1/2
          tw-bg-[radial-gradient(circle,var(--primary-light)_0%,_rgba(0,0,0,0)_70%)]
          tw-opacity-[.5] tw-blur-[100px]
        `}
      />
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
    </section>
  );
};

export default Emoji;
