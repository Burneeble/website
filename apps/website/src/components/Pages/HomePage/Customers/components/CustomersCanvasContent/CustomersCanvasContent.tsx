"use client";

import { Center, Clone, OrbitControls, useGLTF } from "@react-three/drei";

const CustomersCanvasContent = () => {
  // Import gltf model
  const starModel = useGLTF("/models/star/star-3d-icon.gltf");

  return (
    <>
      <OrbitControls
        enableZoom={false}
        // Limit the vertical rotation of the camera
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
        // Enable damping for smoother camera movements
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />
      <ambientLight intensity={1.5} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2} />
      <Center>
        <Clone
          object={starModel.scene}
          scale={1.5}
          position={[0, 0, 0]}
        ></Clone>
      </Center>
    </>
  );
};

export default CustomersCanvasContent;
