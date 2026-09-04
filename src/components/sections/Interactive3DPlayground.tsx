"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MotionSection } from "@/components/ui/MotionSection";
import Hero3DScene from "@/components/canvas/Hero3DScene";
import { soundFx } from "@/utils/audio";
import { FaSlidersH, FaEye, FaSyncAlt, FaPalette, FaMagic } from "react-icons/fa";

export default function Interactive3DPlayground() {
  const [wireframe, setWireframe] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [lightColor, setLightColor] = useState("#ffffff");

  const shades = [
    { name: "Pure White", value: "#ffffff" },
    { name: "Silver Zinc", value: "#d4d4d8" },
    { name: "Platinum Slate", value: "#a1a1aa" },
    { name: "Graphite Dark", value: "#52525b" },
  ];

  const resetControls = () => {
    soundFx.playClick();
    setWireframe(false);
    setSpeed(1);
    setLightColor("#ffffff");
  };

  return (
    <MotionSection id="playground" className="py-24 relative z-10 bg-black text-white border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Nudot Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
              WEBGL & <span className="text-stroke-white">3D CANVAS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-mono leading-relaxed">
            Real-time interactive WebGL shader parameters, wireframe toggles, and orbital velocity controls.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center font-mono">
          {/* Controls Panel */}
          <div className="lg:col-span-5 bg-zinc-950 p-8 rounded-2xl border border-white/15 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-sm font-bold uppercase text-white flex items-center gap-2">
                <FaSlidersH /> SHADER CONTROLS
              </h3>
              <button
                onClick={resetControls}
                onMouseEnter={() => soundFx.playHover()}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors font-bold uppercase"
              >
                <FaSyncAlt /> RESET
              </button>
            </div>

            {/* Wireframe Toggle */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-black border border-white/10">
              <div>
                <label className="text-xs font-bold text-white uppercase block">WIREFRAME MESH</label>
                <span className="text-[10px] text-zinc-500 uppercase">TOGGLE POLYGON FRAMEWORK</span>
              </div>
              <button
                onClick={() => {
                  soundFx.playClick();
                  setWireframe(!wireframe);
                }}
                className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                  wireframe ? "bg-white" : "bg-zinc-800"
                }`}
              >
                <span
                  className={`block w-4 h-4 rounded-full transition-transform ${
                    wireframe ? "translate-x-6 bg-black" : "translate-x-0 bg-white"
                  }`}
                />
              </button>
            </div>

            {/* Rotation Speed Slider */}
            <div className="space-y-3 p-4 rounded-xl bg-black border border-white/10">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-white uppercase">ORBITAL VELOCITY</label>
                <span className="text-white font-bold">{speed.toFixed(1)}X</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>

            {/* Monochrome Shade Selector */}
            <div className="space-y-3 p-4 rounded-xl bg-black border border-white/10">
              <label className="text-xs font-bold text-white uppercase flex items-center gap-2">
                <FaPalette /> SPECULAR SHADE
              </label>
              <div className="flex flex-wrap gap-2 pt-1">
                {shades.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => {
                      soundFx.playClick();
                      setLightColor(s.value);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-mono flex items-center gap-2 border transition-all uppercase ${
                      lightColor === s.value
                        ? "border-white bg-white text-black font-bold"
                        : "border-white/10 text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 border border-white/30"
                      style={{ backgroundColor: s.value }}
                    />
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live WebGL Canvas Preview Window */}
          <div className="lg:col-span-7 bg-zinc-950 p-4 rounded-2xl border border-white/15 relative h-[480px]">
            <div className="absolute top-4 left-6 z-10 text-[10px] font-mono text-white flex items-center gap-2 bg-black px-3 py-1.5 rounded-full border border-white/20 font-bold uppercase">
              <FaEye /> LIVE WEBGL SHADER RENDERER
            </div>
            <Hero3DScene wireframe={wireframe} speed={speed} lightColor={lightColor} />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

