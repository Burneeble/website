"use client";

import { MeshProps } from "@react-three/fiber";

const ModelPlaceholder = (props: MeshProps) => {
  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        <meshBasicMaterial wireframe color="orange" />
      </mesh>
    </>
  );
};

export default ModelPlaceholder;
