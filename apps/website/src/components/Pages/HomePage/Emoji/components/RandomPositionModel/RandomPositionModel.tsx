"use client";
import { useEffect, Suspense, useRef } from "react";
import { useGLTF, Clone } from "@react-three/drei";
import * as THREE from "three";

import { Float } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";

const RandomPositionModel = (props: MeshProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const model = useGLTF("/models/thinking_emoji/scene.gltf");

  useFrame((state, delta) => {
    if (groupRef.current)
      for (const child of groupRef.current.children as THREE.Mesh[]) {
        child.rotation.y += delta * 0.2;
      }
  });

  useEffect(() => {
    console.log(
      "Thinking Emoji License: This work is based on `Thinking emoji` (https://sketchfab.com/3d-models/thinking-emoji-149e21aa8901486a9317df4657407182) by Ricardo Sanchez (https://sketchfab.com/380660711785) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)"
    );
  }, []);
  return (
    <>
      <Float>
        <group ref={groupRef}>
          {[...Array(20)].map((_, index) => (
            <>
              <Suspense
                key={index}
                fallback={[...Array(20)].map((_, n) => (
                  <mesh
                    {...props}
                    key={n}
                    position={[
                      Math.random() * 10 - 5,
                      Math.random() * 10 - 5,
                      Math.random() * 10 - 5,
                    ]}
                    scale={0.4 + Math.random() * 0.4}
                    rotation={[
                      Math.random() * Math.PI,
                      Math.random() * Math.PI,
                      0,
                    ]}
                  />
                ))}
              >
                <Clone
                  object={model.scene}
                  position={[
                    Math.random() * 10 - 5,
                    Math.random() * 10 - 5,
                    Math.random() * 10 - 5,
                  ]}
                  scale={0.4 + Math.random() * 0.4}
                  rotation={[0, Math.random() * Math.PI, 0]}
                />
              </Suspense>
            </>
          ))}
        </group>
      </Float>
    </>
  );
};

export default RandomPositionModel;
useGLTF.preload("/models/thinking_emoji/scene.gltf");
