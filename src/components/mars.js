import React from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import texture from "./8k_mars4.jpg";
// import { Link } from "react-router-dom";

export default function Mars() {
  const myMesh = React.useRef();
  useFrame(() => {
    myMesh.current.rotation.y -= 1 / 150;
  });
  const colorMap = useLoader(TextureLoader, texture);

  return (
    <mesh ref={myMesh} onClick={() => (window.location.href = "/Home")}>
      <sphereBufferGeometry args={[2, 32, 32]} attach="geometry" />
      <meshNormalMaterial attach="material" />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
