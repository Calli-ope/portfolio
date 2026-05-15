"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useTexture } from "@react-three/drei"
import { Suspense, useRef } from "react"
import * as THREE from "three"

function RealisticGlobe() {
  const groupRef = useRef<THREE.Group>(null)

  // Load actual Earth textures mapping from a reliable public repository
  // Using the beautiful "Earth at night" version with topography
  const [colorMap, normalMap, specularMap] = useTexture([
    '/earth-color.jpg',
    '/earth-normal.png',
    '/earth-water.png'
  ])

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* The actual structured Earth */}
      <mesh>
        <sphereGeometry args={[2.6, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          specular={new THREE.Color("#4C1D95")} // Gives the ocean a subtle indigo reflection
          shininess={15}
        />
      </mesh>

      {/* Atmospheric Glow */}
      <mesh scale={1.03}>
        <sphereGeometry args={[2.6, 64, 64]} />
        <meshBasicMaterial
          color="#5155E6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

export function TravelGlobe() {
  return (
    <div className="w-full h-100 md:h-125 mb-12 flex justify-center items-center cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        {/* Soft lighting for the globe */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 3, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#818CF8" />
        
        <Suspense fallback={null}>
          <RealisticGlobe />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
