"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface WalkingAvatarProps {
  scrollProgress: React.RefObject<number>;
}

export default function WalkingAvatar3D({ scrollProgress }: WalkingAvatarProps) {
  const avatarGroupRef = useRef<THREE.Group>(null!);

  // Limb refs for walking gait animation
  const headRef = useRef<THREE.Group>(null!);
  const torsoRef = useRef<THREE.Mesh>(null!);
  const leftArmRef = useRef<THREE.Group>(null!);
  const rightArmRef = useRef<THREE.Group>(null!);
  const leftLegRef = useRef<THREE.Group>(null!);
  const rightLegRef = useRef<THREE.Group>(null!);

  const walkCycleRef = useRef(0);
  const prevProgressRef = useRef(0);

  useFrame((state, delta) => {
    const currentProgress = scrollProgress.current || 0;
    const scrollDelta = Math.abs(currentProgress - prevProgressRef.current);
    prevProgressRef.current = currentProgress;

    // Determine if user is scrolling/walking
    const isWalking = scrollDelta > 0.0005;
    const walkSpeed = isWalking ? Math.min(scrollDelta * 800, 12) : 1.5; // Active walk on scroll, subtle idling otherwise

    walkCycleRef.current += delta * walkSpeed * 4;
    const cycle = walkCycleRef.current;

    // Avatar Position along 3D path based on scroll progress
    if (avatarGroupRef.current) {
      // Moves from Z = 6 to Z = -16 as user scrolls
      const targetZ = 5 - currentProgress * 22;
      const targetX = Math.sin(currentProgress * Math.PI * 2) * 2.2;
      const targetY = -1.2 + Math.abs(Math.sin(cycle * 2)) * 0.12; // Step bobbing up and down

      avatarGroupRef.current.position.z = THREE.MathUtils.lerp(
        avatarGroupRef.current.position.z,
        targetZ,
        0.1
      );
      avatarGroupRef.current.position.x = THREE.MathUtils.lerp(
        avatarGroupRef.current.position.x,
        targetX,
        0.1
      );
      avatarGroupRef.current.position.y = THREE.MathUtils.lerp(
        avatarGroupRef.current.position.y,
        targetY,
        0.1
      );

      // Rotate avatar to face direction of movement
      avatarGroupRef.current.rotation.y = Math.sin(currentProgress * Math.PI) * 0.4;
    }

    // Walking Limb Swing Physics (Bipedal Gait)
    const legAngle = Math.sin(cycle) * 0.6;
    const armAngle = Math.sin(cycle) * 0.5;

    if (leftLegRef.current) leftLegRef.current.rotation.x = legAngle;
    if (rightLegRef.current) rightLegRef.current.rotation.x = -legAngle;

    if (leftArmRef.current) leftArmRef.current.rotation.x = -armAngle;
    if (rightArmRef.current) rightArmRef.current.rotation.x = armAngle;

    // Slight head tilt while walking
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(cycle * 0.5) * 0.1;
      headRef.current.rotation.z = Math.cos(cycle * 0.5) * 0.05;
    }
  });

  return (
    <group ref={avatarGroupRef} position={[0, -1.2, 5]} scale={0.85}>
      {/* Head with Glowing Cyber Visor */}
      <group ref={headRef} position={[0, 2.2, 0]}>
        {/* Head Sphere */}
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} />
        </mesh>
        {/* Glowing Cyan Visor */}
        <mesh position={[0, 0.04, 0.22]}>
          <boxGeometry args={[0.35, 0.12, 0.15]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={3.0}
            roughness={0.1}
          />
        </mesh>
        {/* Hair / Cyber Crown */}
        <mesh position={[0, 0.25, -0.05]}>
          <boxGeometry args={[0.32, 0.1, 0.35]} />
          <meshStandardMaterial color="#0f172a" />
        </mesh>
      </group>

      {/* Torso / Jacket */}
      <mesh ref={torsoRef} position={[0, 1.3, 0]}>
        <boxGeometry args={[0.65, 0.9, 0.38]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Illuminated Core Emblem on Chest */}
      <mesh position={[0, 1.45, 0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.12, 0.12, 0.05, 6]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={2.5} />
      </mesh>

      {/* Left Arm */}
      <group ref={leftArmRef} position={[-0.45, 1.6, 0]}>
        <mesh position={[0, -0.38, 0]}>
          <capsuleGeometry args={[0.09, 0.55, 16, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} />
        </mesh>
        {/* Glowing Hand */}
        <mesh position={[0, -0.72, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.5} />
        </mesh>
      </group>

      {/* Right Arm */}
      <group ref={rightArmRef} position={[0.45, 1.6, 0]}>
        <mesh position={[0, -0.38, 0]}>
          <capsuleGeometry args={[0.09, 0.55, 16, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} />
        </mesh>
        {/* Glowing Hand */}
        <mesh position={[0, -0.72, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.5} />
        </mesh>
      </group>

      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.2, 0.8, 0]}>
        <mesh position={[0, -0.45, 0]}>
          <capsuleGeometry args={[0.11, 0.65, 16, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} />
        </mesh>
        {/* Cyber Shoe */}
        <mesh position={[0, -0.82, 0.08]}>
          <boxGeometry args={[0.15, 0.12, 0.3]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.2} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.2, 0.8, 0]}>
        <mesh position={[0, -0.45, 0]}>
          <capsuleGeometry args={[0.11, 0.65, 16, 16]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} />
        </mesh>
        {/* Cyber Shoe */}
        <mesh position={[0, -0.82, 0.08]}>
          <boxGeometry args={[0.15, 0.12, 0.3]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.2} />
        </mesh>
      </group>

      {/* Light Ripple Ring Underneath Character's Feet */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.3, 0.6, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}
