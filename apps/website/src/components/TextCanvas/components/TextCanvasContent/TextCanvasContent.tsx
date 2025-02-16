"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import {
  Float,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useClientInfoService } from "@burneeble/ui-components";

const material = new THREE.MeshMatcapMaterial();

const TextCanvasContent = () => {
  // Import necessary hooks and classes from React and Three.js
  // E9CCA1_A63106_DF8C3B_621304
  // 422509_C89536_824512_0A0604

  // Use a custom hook to get the matcap texture with a specific ID and resolution
  const [matcapTexture] = useMatcapTexture("E9CCA1_A63106_DF8C3B_621304", 512);

  // State to manage the size of the text
  const [textSize, setTextSize] = useState<number>(2.8);

  // Reference to the text mesh object
  const textRef = useRef<THREE.Mesh>(null);

  // Get the size of the canvas from the Three.js context
  const { size: canvasSize } = useThree();

  // Get the width from a custom client info service
  const { width } = useClientInfoService();

  // Update the material with the new texture when the component mounts
  useEffect(() => {
    // Set the color space of the texture
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    // Mark the texture as needing an update
    matcapTexture.needsUpdate = true;
    // Assign the texture to the material's matcap property
    material.matcap = matcapTexture;
    // Mark the material as needing an update
    material.needsUpdate = true;
  }, []);

  // Center the text mesh object when the text size changes
  useEffect(() => {
    if (textRef.current) {
      // Create a bounding box around the text mesh
      const bbox = new THREE.Box3().setFromObject(textRef.current);
      // Get the center of the bounding box
      const center = bbox.getCenter(new THREE.Vector3());
      // Adjust the position of the text mesh to center it
      textRef.current.position.x -= center.x;
      textRef.current.position.y -= center.y;
      textRef.current.position.z -= center.z;
    }
  }, [textSize]);

  // Adjust the text size based on the canvas size or client width
  useEffect(() => {
    if (canvasSize.height > 300) {
      if (canvasSize.width) {
        // Calculate a new text size based on the canvas width, clamped between 1.5 and 2.8
        const newSize = Math.max(Math.min(canvasSize.width / 200, 2.8), 1.5);
        setTextSize(newSize);
      }
    } else {
      if (width) {
        // Calculate a new text size based on the client width, clamped between 1.5 and 4.5
        const newSize = Math.max(Math.min(width / 125, 4.5), 1.5);
        setTextSize(newSize);
      }
    }
  }, [canvasSize.width, width]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        // Limit the horizontal rotation of the camera
        minAzimuthAngle={-Math.PI / 15}
        maxAzimuthAngle={Math.PI / 15}
        // Limit the vertical rotation of the camera
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
        // Enable damping for smoother camera movements
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />
      <Float floatIntensity={1} floatingRange={[0, 0.5]}>
        <Text3D
          ref={textRef}
          font={"/fonts/Bowlby_One_SC_Regular.json"}
          size={textSize}
          height={1.25}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          404
        </Text3D>
      </Float>
    </>
  );
};

export default TextCanvasContent;
