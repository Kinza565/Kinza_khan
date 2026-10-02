"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Laptop() {
  const laptopRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!laptopRef.current) return;
    const { mouse } = state;
    laptopRef.current.rotation.x = mouse.y * 0.15;
    laptopRef.current.rotation.y = mouse.x * 0.25;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.8}
      floatingRange={[-0.2, 0.2]}
    >
      <group ref={laptopRef} dispose={null}>
        {/* Laptop base */}
        <mesh position={[0, -0.4, 0]}>
          <boxGeometry args={[2.4, 0.15, 1.6]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Laptop screen frame */}
        <mesh position={[0, 0.5, -0.75]}>
          <boxGeometry args={[2.3, 1.4, 0.08]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Screen display */}
        <mesh position={[0, 0.5, -0.7]}>
          <planeGeometry args={[2.1, 1.2]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.1}
            emissive="#22d3ee"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Glowing code lines on screen */}
        <group position={[0, 0.5, -0.69]}>
          {[0, 0.15, 0.3, 0.45, 0.6].map((y, i) => (
            <mesh key={i} position={[0, 0.6 - y, 0]}>
              <planeGeometry args={[1.8 - i * 0.2, 0.04]} />
              <meshBasicMaterial color="#22d3ee" transparent opacity={0.9 - i * 0.15} />
            </mesh>
          ))}
        </group>

        {/* Keyboard area */}
        <mesh position={[0, -0.32, 0.2]}>
          <boxGeometry args={[2, 0.05, 1]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, -0.32, 0.6]}>
          <boxGeometry args={[0.6, 0.02, 0.4]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Camera notch */}
        <mesh position={[0, 1.22, -0.7]}>
          <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
          <meshBasicMaterial color="#0a0a0a" />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Main key light */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      
      {/* Neon cyan point light - behind laptop */}
      <pointLight position={[-3, 2, -2]} color="#22d3ee" intensity={2} distance={8} />
      
      {/* Neon magenta point light - underneath */}
      <pointLight position={[0, -2, 2]} color="#e879f9" intensity={1.5} distance={6} />
      
      {/* Subtle fill light */}
      <pointLight position={[3, 1, 3]} color="#22d3ee" intensity={0.5} distance={5} />

      {/* Laptop model */}
      <Laptop />

      {/* Environment for reflections */}
      <Environment preset="city" />
    </>
  );
}

export default function Laptop3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
