import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Avatar Mesh Component
function AvatarMesh() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Rotating animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Head */}
      <mesh 
        position={[0, 1, 0]} 
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={hovered ? "#8B5CF6" : "#F3E8FF"}
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 0.8, 4, 8]} />
        <meshStandardMaterial 
          color="#3B82F6" 
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.7, 0.2, 0]}>
        <capsuleGeometry args={[0.15, 0.6, 4, 8]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.2} metalness={0.1} />
      </mesh>
      <mesh position={[0.7, 0.2, 0]}>
        <capsuleGeometry args={[0.15, 0.6, 4, 8]} />
        <meshStandardMaterial color="#3B82F6" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.2, -0.8, 0]}>
        <capsuleGeometry args={[0.15, 0.6, 4, 8]} />
        <meshStandardMaterial color="#1F2937" roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0.2, -0.8, 0]}>
        <capsuleGeometry args={[0.15, 0.6, 4, 8]} />
        <meshStandardMaterial color="#1F2937" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Simple face features */}
      {/* Eyes */}
      <mesh position={[-0.15, 1.1, 0.4]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#1F2937" />
      </mesh>
      <mesh position={[0.15, 1.1, 0.4]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#1F2937" />
      </mesh>
      
      {/* Mouth */}
      <mesh position={[0, 0.9, 0.4]}>
        <torusGeometry args={[0.08, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#EF4444" />
      </mesh>
    </group>
  );
}

// Loading component
function AvatarLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  );
}

// Main Avatar3D Component
const Avatar3D = ({ className = "" }) => {
  return (
    <div className={`w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 1, 3]} fov={50} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-2, 2, 2]} intensity={0.5} color="#8B5CF6" />
          
          {/* Environment for better lighting */}
          <Environment preset="studio" />
          
          {/* Avatar */}
          <AvatarMesh />
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay loading state */}
      <Suspense fallback={<AvatarLoader />} />
    </div>
  );
};

export default Avatar3D;