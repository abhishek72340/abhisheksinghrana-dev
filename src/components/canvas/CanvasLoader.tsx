"use client";

import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        <span className="absolute text-xs font-mono text-white font-bold">
          {progress.toFixed(0)}%
        </span>
      </div>
      <p className="mt-4 text-xs font-mono tracking-widest text-zinc-400 uppercase">
        Initializing 3D Engine...
      </p>
    </Html>
  );
}
