"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Environment } from "@react-three/drei"
import { Suspense, useRef } from "react"
import type * as THREE from "three"

function FluidBlob() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle floating rotation, using delta to avoid THREE.Clock deprecation warnings
      meshRef.current.rotation.x += delta * 0.1
      meshRef.current.rotation.y += delta * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#5155E6" // Indigo/Blue color matching the text
        envMapIntensity={0.2}
        clearcoat={0.2}
        clearcoatRoughness={0.5}
        metalness={0.1}
        roughness={0.8} // Higher roughness makes it less bright and reflective
        distort={0.5}
        speed={1.5}
      />
    </mesh>
  )
}

export function GradientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 
        We use styling to softly blur and fade the 3D scene 
        so it seamlessly blends into the background as a gradient.
      */}
      <div className="absolute -bottom-32 -right-32 w-120 h-120 opacity-20 dark:opacity-40 blur-[50px] pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 2]} intensity={0.6} color="#818CF8" />
          <Suspense fallback={null}>
            <FluidBlob />
            <Environment preset="night" />
          </Suspense>
        </Canvas>
      </div>

      {/* Subtle top-left static accent (kept from original for balance) */}
      <div 
        className="absolute -top-32 -left-32 w-100 h-100 rounded-full opacity-10 dark:opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, oklch(0.72 0.10 275 / 0.5) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
