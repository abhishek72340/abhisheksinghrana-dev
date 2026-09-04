"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

interface SkillOrbProps {
  name: string;
  position: [number, number, number];
  color: string;
}

const skillsList: SkillOrbProps[] = [
  { name: "React", position: [-2.2, 1.2, 0.5], color: "#61dafb" },
  { name: "Next.js", position: [0, 2, -0.5], color: "#ffffff" },
  { name: "TypeScript", position: [2.2, 1.2, 0.5], color: "#3178c6" },
  { name: "Node.js", position: [-2.5, -0.8, -0.2], color: "#68a063" },
  { name: "Express", position: [-0.8, -1.8, 0.8], color: "#a855f7" },
  { name: "Docker", position: [1.2, -1.8, 0.8], color: "#2496ed" },
  { name: "MongoDB", position: [2.6, -0.8, -0.2], color: "#47a248" },
  { name: "Tailwind", position: [0, 0.2, 1.2], color: "#38bdf8" },
  { name: "Git & GitHub", position: [-1.2, 0.2, -1.5], color: "#f1502f" },
];

function SkillOrb({ name, position, color }: SkillOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(elapsedRef.current + position[0]) * 0.5;
      meshRef.current.rotation.x = Math.cos(elapsedRef.current + position[1]) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <dodecahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
        <Text
          position={[0, -0.8, 0]}
          fontSize={0.22}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

function SkillGroup() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {skillsList.map((skill, idx) => (
        <SkillOrb key={idx} {...skill} />
      ))}
    </group>
  );
}

export default function SkillOrbs3D() {
  return (
    <div className="w-full h-[380px] sm:h-[450px] relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8b5cf6" />
        <SkillGroup />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
