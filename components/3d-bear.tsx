"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { useRef, useState, useMemo } from "react"
import type * as THREE from "three"

function Bear() {
  const bearRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  const particlePositions = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        x: Math.cos((i / 20) * Math.PI * 2) * (2.5 + Math.sin(i) * 0.8),
        y: Math.sin((i / 20) * Math.PI * 2) * 1.2 + Math.cos(i * 0.5) * 0.5,
        z: Math.sin((i / 20) * Math.PI * 2) * (2.5 + Math.cos(i) * 0.8),
        delay: i * 0.08,
        size: 0.02 + Math.random() * 0.03,
      })),
    [],
  )

  useFrame((state) => {
    if (bearRef.current) {
      bearRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.4
      bearRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.1
      bearRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.25

      const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.04
      bearRef.current.scale.setScalar(hovered ? breathingScale * 1.2 : breathingScale)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
      <group ref={bearRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <mesh position={[0, -0.3, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial
            color={hovered ? "#A855F7" : "#8B5CF6"}
            roughness={0.2}
            metalness={0.4}
            emissive={hovered ? "#7C3AED" : "#6D28D9"}
            emissiveIntensity={hovered ? 0.3 : 0.15}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
          />
        </mesh>

        <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.65, 64, 64]} />
          <meshStandardMaterial
            color={hovered ? "#A855F7" : "#8B5CF6"}
            roughness={0.2}
            metalness={0.4}
            emissive={hovered ? "#7C3AED" : "#6D28D9"}
            emissiveIntensity={hovered ? 0.3 : 0.15}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
          />
        </mesh>

        <mesh position={[-0.35, 1.35, 0.15]} castShadow>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#5B21B6"
            emissiveIntensity={hovered ? 0.2 : 0.12}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>
        <mesh position={[0.35, 1.35, 0.15]} castShadow>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#5B21B6"
            emissiveIntensity={hovered ? 0.2 : 0.12}
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>

        <mesh position={[0, 0.65, 0.45]} castShadow>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshStandardMaterial
            color={hovered ? "#C084FC" : "#A855F7"}
            emissive="#7C3AED"
            emissiveIntensity={hovered ? 0.25 : 0.15}
            roughness={0.25}
            metalness={0.3}
          />
        </mesh>

        <mesh position={[0, 0.75, 0.65]} castShadow>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#F472B6"
            emissive="#EC4899"
            emissiveIntensity={hovered ? 0.8 : 0.6}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>

        <mesh position={[-0.18, 0.95, 0.55]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#F472B6"
            emissive="#EC4899"
            emissiveIntensity={hovered ? 1.2 : 0.9}
            roughness={0.0}
            metalness={1.0}
          />
        </mesh>
        <mesh position={[0.18, 0.95, 0.55]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#F472B6"
            emissive="#EC4899"
            emissiveIntensity={hovered ? 1.2 : 0.9}
            roughness={0.0}
            metalness={1.0}
          />
        </mesh>

        <mesh position={[-0.75, 0.1, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#5B21B6"
            emissiveIntensity={hovered ? 0.18 : 0.1}
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>
        <mesh position={[0.75, 0.1, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.38, 32, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#5B21B6"
            emissiveIntensity={hovered ? 0.18 : 0.1}
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>

        <mesh position={[-0.35, -1.0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#5B21B6"
            emissiveIntensity={hovered ? 0.18 : 0.1}
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>
        <mesh position={[0.35, -1.0, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial
            color="#7C3AED"
            emissive="#5B21B6"
            emissiveIntensity={hovered ? 0.18 : 0.1}
            roughness={0.3}
            metalness={0.3}
          />
        </mesh>

        {particlePositions.map((pos, i) => (
          <Float key={i} speed={2.5 + pos.delay} rotationIntensity={1.5} floatIntensity={2}>
            <mesh position={[pos.x, pos.y, pos.z]}>
              <sphereGeometry args={[pos.size, 12, 12]} />
              <meshStandardMaterial
                color={i % 3 === 0 ? "#F472B6" : i % 3 === 1 ? "#A855F7" : "#C084FC"}
                emissive={i % 3 === 0 ? "#EC4899" : i % 3 === 1 ? "#7C3AED" : "#8B5CF6"}
                emissiveIntensity={1.2}
                transparent
                opacity={0.9}
                roughness={0.0}
                metalness={1.0}
              />
            </mesh>
          </Float>
        ))}
      </group>
    </Float>
  )
}

export default function Bear3D() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} color="#8B5CF6" />
        <pointLight
          position={[8, 8, 8]}
          intensity={1.2}
          color="#A855F7"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-8, -8, -8]} intensity={0.8} color="#EC4899" />
        <pointLight position={[0, -8, 8]} intensity={0.6} color="#C084FC" />
        <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.6} color="#F472B6" castShadow />
        <Bear />
        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.6}
          minPolarAngle={Math.PI / 3.5}
        />
      </Canvas>
    </div>
  )
}
