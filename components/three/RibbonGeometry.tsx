"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";

/**
 * Closed Lissajous-style loop — an original curve echoing the logo's
 * crossing double-arc silhouette, not a trace of the mark itself.
 */
class LogoInspiredCurve extends THREE.Curve<THREE.Vector3> {
  constructor(
    private phase: number,
    private freqA: number,
    private freqB: number,
    private scale: THREE.Vector3
  ) {
    super();
  }

  getPoint(t: number, target = new THREE.Vector3()) {
    const angle = t * Math.PI * 2;
    const x = Math.sin(angle * this.freqA + this.phase) * this.scale.x;
    const y = Math.cos(angle * this.freqB + this.phase * 0.6) * this.scale.y;
    const z = Math.sin(angle * 2 - this.phase * 0.4) * this.scale.z;
    return target.set(x, y, z);
  }
}

type StrandConfig = {
  phase: number;
  freqA: number;
  freqB: number;
  scale: [number, number, number];
  radius: number;
  opacity: number;
  rotationSpeed: number;
};

const STRANDS: StrandConfig[] = [
  { phase: 0, freqA: 1, freqB: 1.5, scale: [1.05, 0.85, 0.4], radius: 0.017, opacity: 0.5, rotationSpeed: 0.035 },
  { phase: Math.PI / 3, freqA: 1, freqB: 1.5, scale: [0.9, 0.95, 0.32], radius: 0.012, opacity: 0.3, rotationSpeed: -0.025 },
  { phase: Math.PI, freqA: 1, freqB: 1.5, scale: [1.2, 0.7, 0.45], radius: 0.009, opacity: 0.18, rotationSpeed: 0.015 },
];

function Strand({
  config,
  scrollProgress,
  index,
}: {
  config: StrandConfig;
  scrollProgress: MotionValue<number>;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const curve = new LogoInspiredCurve(
      config.phase,
      config.freqA,
      config.freqB,
      new THREE.Vector3(...config.scale)
    );
    return new THREE.TubeGeometry(curve, 220, config.radius, 16, true);
  }, [config]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const progress = scrollProgress.get();
    meshRef.current.rotation.z += config.rotationSpeed * delta;
    meshRef.current.rotation.y = progress * 0.6 + Math.sin(index) * 0.1;
    meshRef.current.rotation.x = progress * -0.25;
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#e8e8e4"
        roughness={0.6}
        metalness={0.05}
        clearcoat={0.15}
        clearcoatRoughness={0.5}
        transparent
        opacity={config.opacity}
      />
    </mesh>
  );
}

export default function RibbonGeometry({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const baseX = 1.7;

  useFrame(() => {
    if (!groupRef.current) return;
    const progress = scrollProgress.get();
    groupRef.current.position.z = progress * -1.2;
    groupRef.current.position.x = baseX + progress * 0.4;
    groupRef.current.scale.setScalar(1 - progress * 0.08);
  });

  return (
    <group ref={groupRef} position={[baseX, -0.2, -0.6]}>
      {STRANDS.map((config, index) => (
        <Strand key={index} config={config} scrollProgress={scrollProgress} index={index} />
      ))}
    </group>
  );
}
