"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import type { MotionValue } from "framer-motion";
import RibbonGeometry from "./RibbonGeometry";

export default function HeroScene({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#090909"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#ffffff" />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#b8b8b8" />
      <pointLight position={[0, 0, 4]} intensity={0.3} color="#ffffff" />
      <Suspense fallback={null}>
        <RibbonGeometry scrollProgress={scrollProgress} />
      </Suspense>
      <fog attach="fog" args={["#090909", 6, 11]} />
    </Canvas>
  );
}
