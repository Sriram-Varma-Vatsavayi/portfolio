import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Hook for mouse tracking
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

// Avatar Head with eye tracking
function AvatarHead({ mousePosition, isVisible, gestureIndex }) {
  const headRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const [blinking, setBlinking] = useState(false);

  // Blinking animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  useFrame((state) => {
    if (!headRef.current || !isVisible) return;

    // Head tracking mouse movement
    const targetX = mousePosition.x * 0.2;
    const targetY = mousePosition.y * 0.1;
    
    headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.05);
    headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.05);

    // Eye tracking
    if (leftEyeRef.current && rightEyeRef.current) {
      const eyeTargetX = mousePosition.x * 0.1;
      const eyeTargetY = mousePosition.y * 0.05;
      
      leftEyeRef.current.rotation.y = eyeTargetX;
      leftEyeRef.current.rotation.x = -eyeTargetY;
      rightEyeRef.current.rotation.y = eyeTargetX;
      rightEyeRef.current.rotation.x = -eyeTargetY;
    }

    // Gesture-based head movement
    if (gestureIndex === 1) { // Nodding
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 3) * 0.2;
    } else if (gestureIndex === 2) { // Shaking head
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 4) * 0.3;
    }
  });

  return (
    <group ref={headRef} position={[0, 1.2, 0]}>
      {/* Head */}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial 
          color="#D4A574" // Medium-warm skin tone to match your complexion
          roughness={0.3}
          metalness={0.05}
        />
      </mesh>
      
      {/* Hair - Wavy/curly style */}
      <mesh position={[0, 0.25, -0.08]}>
        <sphereGeometry args={[0.50, 16, 16]} />
        <meshStandardMaterial 
          color="#1A1A1A" // Deep black hair
          roughness={0.9}
        />
      </mesh>
      
      {/* Hair texture/volume - additional layer for curly effect */}
      <mesh position={[0, 0.3, -0.05]} scale={[0.95, 0.8, 0.9]}>
        <sphereGeometry args={[0.48, 12, 12]} />
        <meshStandardMaterial 
          color="#0F0F0F" // Slightly darker for depth
          roughness={0.95}
        />
      </mesh>
      
      {/* Eyes */}
      <group position={[-0.15, 0.1, 0.35]}>
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={leftEyeRef} position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#2D1810" />
        </mesh>
        {blinking && (
          <mesh position={[0, 0, 0.06]} scale={[1, 0.1, 1]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color="#D4A574" />
          </mesh>
        )}
      </group>
      
      <group position={[0.15, 0.1, 0.35]}>
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh ref={rightEyeRef} position={[0, 0, 0.05]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#2D1810" />
        </mesh>
        {blinking && (
          <mesh position={[0, 0, 0.06]} scale={[1, 0.1, 1]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color="#D4A574" />
          </mesh>
        )}
      </group>
      
      {/* Eyebrows - Thicker and more defined */}
      <mesh position={[-0.15, 0.22, 0.4]} rotation={[0, 0, -0.15]}>
        <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>
      <mesh position={[0.15, 0.22, 0.4]} rotation={[0, 0, 0.15]}>
        <capsuleGeometry args={[0.025, 0.15, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0, 0, 0.42]}>
        <coneGeometry args={[0.05, 0.1, 8]} />
        <meshStandardMaterial color="#FDBCB4" />
      </mesh>
      
      {/* Mouth */}
      <mesh position={[0, -0.1, 0.4]} rotation={[Math.PI, 0, 0]}>
        <torusGeometry args={[0.06, 0.02, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#CD5C5C" />
      </mesh>
      
      {/* Modern Sunglasses - Dark, sleek style like in photo */}
      <group position={[0, 0.12, 0.38]}>
        {/* Left lens */}
        <mesh position={[-0.15, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.02, 16]} />
          <meshStandardMaterial 
            color="#1A1A1A" 
            metalness={0.8}
            roughness={0.1}
            transparent={true}
            opacity={0.9}
          />
        </mesh>
        {/* Right lens */}
        <mesh position={[0.15, 0, 0]}>
          <cylinderGeometry args={[0.13, 0.13, 0.02, 16]} />
          <meshStandardMaterial 
            color="#1A1A1A" 
            metalness={0.8}
            roughness={0.1}
            transparent={true}
            opacity={0.9}
          />
        </mesh>
        {/* Bridge */}
        <mesh position={[0, 0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.015, 0.08, 4, 8]} />
          <meshStandardMaterial color="#2A2A2A" metalness={0.7} roughness={0.2} />
        </mesh>
        {/* Left temple */}
        <mesh position={[-0.25, 0, -0.1]} rotation={[0, -Math.PI / 6, 0]}>
          <capsuleGeometry args={[0.012, 0.15, 4, 8]} />
          <meshStandardMaterial color="#2A2A2A" metalness={0.7} roughness={0.2} />
        </mesh>
        {/* Right temple */}
        <mesh position={[0.25, 0, -0.1]} rotation={[0, Math.PI / 6, 0]}>
          <capsuleGeometry args={[0.012, 0.15, 4, 8]} />
          <meshStandardMaterial color="#2A2A2A" metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

// Avatar Body with gestures
function AvatarBody({ gestureIndex, isVisible }) {
  const bodyRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();

  useFrame((state) => {
    if (!bodyRef.current || !isVisible) return;

    // Breathing animation
    bodyRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02;

    // Gesture animations
    if (leftArmRef.current && rightArmRef.current) {
      switch (gestureIndex) {
        case 0: // Waving
          rightArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 5) * 0.5 - 0.5;
          rightArmRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 5) * 0.3;
          break;
        case 1: // Pointing
          rightArmRef.current.rotation.z = -0.8;
          rightArmRef.current.rotation.x = 0.3;
          break;
        case 2: // Thumbs up
          rightArmRef.current.rotation.z = -1.2;
          rightArmRef.current.rotation.x = 0.5;
          break;
        case 3: // Thinking pose
          rightArmRef.current.rotation.z = -1.0;
          rightArmRef.current.rotation.x = 0.8;
          leftArmRef.current.rotation.z = 0.3;
          break;
        default:
          // Neutral pose
          leftArmRef.current.rotation.z = 0.3;
          rightArmRef.current.rotation.z = -0.3;
          leftArmRef.current.rotation.x = 0;
          rightArmRef.current.rotation.x = 0;
      }
    }
  });

  return (
    <group ref={bodyRef}>
      {/* Suit Jacket - Dark professional suit */}
      <mesh position={[0, 0.4, 0]}>
        <capsuleGeometry args={[0.38, 0.85, 4, 8]} />
        <meshStandardMaterial 
          color="#1A1A1A" // Dark suit jacket
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      
      {/* Dark Shirt underneath */}
      <mesh position={[0, 0.45, 0.02]} scale={[0.9, 0.85, 0.95]}>
        <capsuleGeometry args={[0.32, 0.7, 4, 8]} />
        <meshStandardMaterial 
          color="#2A2A2A" // Dark shirt
          roughness={0.4}
        />
      </mesh>
      
      {/* Suit lapels */}
      <mesh position={[-0.15, 0.7, 0.1]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.05, 0.25, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} />
      </mesh>
      <mesh position={[0.15, 0.7, 0.1]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.05, 0.25, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} />
      </mesh>
      
      {/* Suit Sleeves/Arms */}
      <mesh ref={leftArmRef} position={[-0.6, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.13, 0.65, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} />
      </mesh>
      <mesh ref={rightArmRef} position={[0.6, 0.5, 0]} rotation={[0, 0, -0.3]}>
        <capsuleGeometry args={[0.13, 0.65, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} />
      </mesh>
      
      {/* Shirt cuffs */}
      <mesh position={[-0.75, 0.15, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 16]} />
        <meshStandardMaterial color="#2A2A2A" />
      </mesh>
      <mesh position={[0.75, 0.15, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.05, 16]} />
        <meshStandardMaterial color="#2A2A2A" />
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.8, 0.1, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#D4A574" />
      </mesh>
      <mesh position={[0.8, 0.1, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#D4A574" />
      </mesh>
      
      {/* Suit Pants - Dark to match jacket */}
      <mesh position={[-0.15, -0.4, 0]}>
        <capsuleGeometry args={[0.16, 0.85, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} />
      </mesh>
      <mesh position={[0.15, -0.4, 0]}>
        <capsuleGeometry args={[0.16, 0.85, 4, 8]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.3} />
      </mesh>
      
      {/* Dress Shoes - Professional black */}
      <mesh position={[-0.15, -0.9, 0.12]}>
        <capsuleGeometry args={[0.09, 0.25, 4, 8]} />
        <meshStandardMaterial 
          color="#0A0A0A" 
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
      <mesh position={[0.15, -0.9, 0.12]}>
        <capsuleGeometry args={[0.09, 0.25, 4, 8]} />
        <meshStandardMaterial 
          color="#0A0A0A" 
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
    </group>
  );
}

// Main Avatar Scene
function AvatarScene({ mousePosition, isVisible }) {
  const [gestureIndex, setGestureIndex] = useState(0);
  
  // Cycle through gestures
  useEffect(() => {
    if (!isVisible) return;
    
    const gestureInterval = setInterval(() => {
      setGestureIndex(prev => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(gestureInterval);
  }, [isVisible]);

  return (
    <group>
      <AvatarHead mousePosition={mousePosition} isVisible={isVisible} gestureIndex={gestureIndex} />
      <AvatarBody gestureIndex={gestureIndex} isVisible={isVisible} />
    </group>
  );
}

// Loading component
function AvatarLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400 font-medium">Loading Interactive Avatar...</p>
      </div>
    </div>
  );
}

// Main Component
const InteractiveAvatar = ({ className = "", isVisible = true }) => {
  const mousePosition = useMousePosition();

  return (
    <div className={`w-80 h-80 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      <Canvas shadows>
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera makeDefault position={[0, 0.5, 2.5]} fov={60} />
          
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[3, 3, 2]} 
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={20}
            shadow-camera-left={-5}
            shadow-camera-right={5}
            shadow-camera-top={5}
            shadow-camera-bottom={-5}
          />
          <pointLight position={[-2, 1, 1]} intensity={0.4} color="#8B5CF6" />
          <pointLight position={[2, 1, 1]} intensity={0.3} color="#3B82F6" />
          
          {/* Environment */}
          <Environment preset="studio" />
          
          {/* Avatar */}
          <AvatarScene mousePosition={mousePosition} isVisible={isVisible} />
          
          {/* Ground */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
            <planeGeometry args={[5, 5]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>
          
          {/* Controls */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-2 left-2 right-2 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded px-2 py-1 opacity-75">
          Move your mouse to interact!
        </p>
      </div>
    </div>
  );
};

export default InteractiveAvatar;