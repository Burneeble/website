"use client";

import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { OrbitControls, Text3D, useMatcapTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useClientInfoService } from "@burneeble/ui-components";

const material = new THREE.MeshMatcapMaterial();

const TextCanvasContent = () => {
  // E9CCA1_A63106_DF8C3B_621304
  // 422509_C89536_824512_0A0604
  const [matcapTexture] = useMatcapTexture("E9CCA1_A63106_DF8C3B_621304", 512);
  const [textSize, setTextSize] = useState<number>(2.8);
  const textRef = useRef<THREE.Mesh>(null);

  const { size: canvasSize } = useThree();
  const { width } = useClientInfoService();

  //update the material with the new texture
  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;
    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  useEffect(() => {
    if (textRef.current) {
      const bbox = new THREE.Box3().setFromObject(textRef.current);
      const center = bbox.getCenter(new THREE.Vector3());
      textRef.current.position.x -= center.x;
      textRef.current.position.y -= center.y;
      textRef.current.position.z -= center.z;
    }
  }, [textSize]);

  useEffect(() => {
    if (canvasSize.height > 300) {
      if (canvasSize.width) {
        const newSize = Math.max(Math.min(canvasSize.width / 200, 2.8), 1.5);
        setTextSize(newSize);
      }
    } else {
      if (width) {
        const newSize = Math.max(Math.min(width / 125, 4.5), 1.5);
        setTextSize(newSize);
      }
    }
  }, [canvasSize.width, width]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        // TODO horizontal and vertical limit
      />
      <ambientLight intensity={2} />
      <directionalLight castShadow position={[1, 2, 3]} intensity={2.5} />
      <Text3D
        ref={textRef}
        font={"/fonts/Bowlby_One_SC_Regular.json"}
        // todo responsive
        size={textSize}
        height={1.25}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.01}
        bevelOffset={0}
        bevelSegments={5}
        material={material}
        // rotation={[0, -0.1 * Math.PI, 0]}
      >
        404
      </Text3D>
    </>
  );
};

export default TextCanvasContent;
