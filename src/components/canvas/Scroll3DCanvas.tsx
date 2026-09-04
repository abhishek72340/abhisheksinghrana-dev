"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Stars } from "@react-three/drei";
import { useScroll } from "framer-motion";
import * as THREE from "three";
import WalkingAvatar3D from "./WalkingAvatar3D";

function CameraWalkthrough({ scrollProgress }: { scrollProgress: React.RefObject<number> }) {
  useFrame((state) => {
    const progress = scrollProgress.current || 0;

    // Camera moves along Z-axis behind/with the walking character
    const targetZ = 9.5 - progress * 24;
    const targetY = 0.5 + Math.sin(progress * Math.PI * 2) * 0.8;
    const targetX = Math.sin(progress * Math.PI * 2) * 1.5;

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.08);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.08);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.08);

    state.camera.rotation.y = Math.sin(progress * Math.PI) * 0.12;
    state.camera.rotation.x = -0.05;
  });

  return null;
}

function CyberTunnelPortals() {
  const portal1Ref = useRef<THREE.Mesh>(null!);
  const portal2Ref = useRef<THREE.Mesh>(null!);
  const portal3Ref = useRef<THREE.Mesh>(null!);
  const elapsedRef = useRef(0);

  useFrame((_, delta) => {
    elapsedRef.current += delta;
    if (portal1Ref.current) {
      portal1Ref.current.rotation.z = elapsedRef.current * 0.4;
    }
    if (portal2Ref.current) {
      portal2Ref.current.rotation.z = -elapsedRef.current * 0.5;
    }
    if (portal3Ref.current) {
      portal3Ref.current.rotation.z = elapsedRef.current * 0.6;
    }
  });

  return (
    <group>
      {/* Portal 1: Hero Gate */}
      <group position={[0, 0, 4]}>
        <mesh ref={portal1Ref}>
          <torusGeometry args={[3.6, 0.06, 16, 100]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={2.5}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* Portal 2: Skills Gate */}
      <group position={[0, 0, -4]}>
        <mesh ref={portal2Ref}>
          <torusKnotGeometry args={[2.8, 0.12, 128, 32]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.1}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>
      </group>

      {/* Portal 3: Projects Gate */}
      <group position={[0, 0, -12]}>
        <mesh ref={portal3Ref}>
          <torusGeometry args={[3.8, 0.08, 16, 100]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#3b82f6"
            emissiveIntensity={3.0}
            wireframe={true}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function Scroll3DCanvas() {
  const { scrollYProgress } = useScroll();
  const scrollProgressRef = useRef(0);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      scrollProgressRef.current = v;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={2.5} color="#8b5cf6" />
        <directionalLight position={[0, 10, 5]} intensity={1.8} color="#ffffff" />

        {/* 3D Starfield Tunnel */}
        <Stars radius={150} depth={80} count={3500} factor={6} saturation={1} fade speed={1.5} />

        {/* 3D Camera Movement */}
        <CameraWalkthrough scrollProgress={scrollProgressRef} />

        {/* Real 3D Person Character Walking along 3D corridor */}
        <WalkingAvatar3D scrollProgress={scrollProgressRef} />

        {/* 3D Cyber Corridor Portals */}
        <CyberTunnelPortals />
      </Canvas>
    </div>
  );
}
