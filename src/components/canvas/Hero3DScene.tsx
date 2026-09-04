"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

interface SceneProps {
  wireframe?: boolean;
  speed?: number;
  lightColor?: string;
}

function FloatingGlassSphere({
  position,
  scale,
  speed = 1,
}: {
  position: [number, number, number];
  scale: number;
  speed?: number;
}) {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const offset = useRef(Math.random() * Math.PI * 2);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset.current;
    if (sphereRef.current) {
      sphereRef.current.position.y = position[1] + Math.sin(t * 1.4) * 0.3;
      sphereRef.current.position.x = position[0] + Math.cos(t * 1.1) * 0.2;
      sphereRef.current.rotation.x = t * 0.4;
      sphereRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <mesh ref={sphereRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial
        color="#ffffff"
        transmission={0.9}
        opacity={1}
        transparent={true}
        roughness={0.05}
        metalness={0.1}
        ior={1.4}
        thickness={1.2}
        clearcoat={1.0}
        clearcoatRoughness={0.02}
      />
    </mesh>
  );
}

function NudotGlassEmblem({ wireframe = false, speed = 1 }: SceneProps) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed * 0.5;
    if (groupRef.current) {
      groupRef.current.rotation.y = t;
      groupRef.current.rotation.x = Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.8} floatIntensity={1.2}>
      <group ref={groupRef}>
        {/* Outer Metallic Ring */}
        <mesh scale={1.7}>
          <torusGeometry args={[1.3, 0.12, 24, 64]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.95}
            clearcoat={1.0}
            clearcoatRoughness={0.02}
            wireframe={wireframe}
          />
        </mesh>
        {/* Inner Refractive Glass Core */}
        <mesh scale={1.1}>
          <octahedronGeometry args={[1, 2]} />
          <meshPhysicalMaterial
            color="#ffffff"
            transmission={0.85}
            roughness={0.08}
            metalness={0.2}
            ior={1.5}
            thickness={1.5}
            clearcoat={1.0}
            wireframe={wireframe}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3DScene({
  wireframe = false,
  speed = 1,
}: SceneProps) {
  const spheresData: { pos: [number, number, number]; scale: number }[] = [
    { pos: [-3.5, 1.8, -1], scale: 0.6 },
    { pos: [3.8, 2.2, -1.5], scale: 0.85 },
    { pos: [-4.2, -1.5, -0.5], scale: 0.5 },
    { pos: [4.0, -1.8, -1.2], scale: 0.75 },
    { pos: [-2.0, 2.8, -2], scale: 0.4 },
    { pos: [2.2, -2.8, -1.8], scale: 0.45 },
    { pos: [0, 3.0, -2.5], scale: 0.65 },
  ];

  return (
    <div className="w-full h-full min-h-[420px] relative">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[8, 10, 5]} intensity={2.5} color="#ffffff" />
        <pointLight position={[-8, -8, -5]} color="#ffffff" intensity={2.5} />
        <pointLight position={[8, 5, 5]} color="#a1a1aa" intensity={2.0} />

        {/* Crisp White Starfield */}
        <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade speed={0.8} />

        {/* Central Nudot Metallic Glass Emblem */}
        <NudotGlassEmblem wireframe={wireframe} speed={speed} />

        {/* Floating Glass Water Spheres (Matching Nudot Screenshots) */}
        {spheresData.map((s, idx) => (
          <FloatingGlassSphere key={idx} position={s.pos} scale={s.scale} speed={speed} />
        ))}

        <OrbitControls
          enableZoom={false}
          autoRotate={true}
          autoRotateSpeed={1.0 * speed}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

