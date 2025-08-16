import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  OrbitControls, 
  ContactShadows,
  Html
} from '@react-three/drei';
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

// Fallback avatar component if GLTF loading fails
function FallbackAvatar({ mousePosition, isVisible }) {
  const headRef = useRef();
  const [blinking, setBlinking] = useState(false);
  
  // Enhanced materials
  const skinMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#D4A574'),
      roughness: 0.6,
      metalness: 0.0,
      clearcoat: 0.1,
      clearcoatRoughness: 0.8,
      transmission: 0.05,
      thickness: 0.5,
      ior: 1.4,
      emissive: new THREE.Color('#FFF8F0').multiplyScalar(0.03),
    });
  }, []);

  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0A0A0A'),
      metalness: 0.1,
      roughness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.85,
      transmission: 0.1,
      ior: 1.52,
      reflectivity: 0.9,
    });
  }, []);

  const suitMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1A1A1A'),
      roughness: 0.3,
      metalness: 0.05,
      clearcoat: 0.2,
      clearcoatRoughness: 0.7,
    });
  }, []);

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

    // Smooth head tracking
    const targetRotationX = -mousePosition.y * 0.15;
    const targetRotationY = mousePosition.x * 0.2;
    
    headRef.current.rotation.x = THREE.MathUtils.lerp(
      headRef.current.rotation.x, 
      targetRotationX, 
      0.05
    );
    headRef.current.rotation.y = THREE.MathUtils.lerp(
      headRef.current.rotation.y, 
      targetRotationY, 
      0.05
    );

    // Breathing animation
    headRef.current.position.y = 0.3 + Math.sin(state.clock.elapsedTime * 1.2) * 0.01;
  });

  return (
    <group ref={headRef} position={[0, 0.3, 0]}>
      {/* Head */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <primitive object={skinMaterial} />
      </mesh>
      
      {/* Eyes */}
      <group position={[0, 0.05, 0.18]}>
        <mesh position={[-0.08, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        <mesh position={[0.08, 0, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        
        {/* Pupils */}
        <mesh position={[-0.08, 0, 0.03]}>
          <sphereGeometry args={[0.015, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.08, 0, 0.03]}>
          <sphereGeometry args={[0.015, 12, 12]} />
          <meshStandardMaterial color="#000000" />
        </mesh>

        {/* Eyelids for blinking */}
        {blinking && (
          <>
            <mesh position={[-0.08, 0.01, 0.03]} scale={[1, 0.05, 1]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <primitive object={skinMaterial} />
            </mesh>
            <mesh position={[0.08, 0.01, 0.03]} scale={[1, 0.05, 1]}>
              <sphereGeometry args={[0.045, 12, 12]} />
              <primitive object={skinMaterial} />
            </mesh>
          </>
        )}
      </group>

      {/* Sunglasses */}
      <group position={[0, 0.05, 0.15]}>
        {/* Lenses */}
        <mesh position={[-0.08, 0, 0]} castShadow>
          <sphereGeometry args={[0.06, 16, 16]} />
          <primitive object={glassMaterial} />
        </mesh>
        <mesh position={[0.08, 0, 0]} castShadow>
          <sphereGeometry args={[0.06, 16, 16]} />
          <primitive object={glassMaterial} />
        </mesh>
        
        {/* Bridge */}
        <mesh position={[0, 0.01, 0.01]}>
          <capsuleGeometry args={[0.005, 0.03, 4, 8]} />
          <meshStandardMaterial color="#2A2A2A" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Body */}
      <mesh position={[0, -0.4, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.2, 0.6, 8, 16]} />
        <primitive object={suitMaterial} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.28, -0.25, 0]} rotation={[0, 0, 0.3]} castShadow>
        <capsuleGeometry args={[0.05, 0.35, 6, 12]} />
        <primitive object={suitMaterial} />
      </mesh>
      <mesh position={[0.28, -0.25, 0]} rotation={[0, 0, -0.3]} castShadow>
        <capsuleGeometry args={[0.05, 0.35, 6, 12]} />
        <primitive object={suitMaterial} />
      </mesh>
    </group>
  );
}

// Loading component
function LoadingIndicator() {
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-3 p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg backdrop-blur-sm">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        <p className="text-gray-700 dark:text-gray-300 font-medium">Loading 3D Avatar...</p>
      </div>
    </Html>
  );
}

// Enhanced avatar component - simplified to use fallback for now
function EnhancedAvatar({ mousePosition, isVisible }) {
  // Always use fallback avatar for now to avoid GLTF loading issues
  return <FallbackAvatar mousePosition={mousePosition} isVisible={isVisible} />;
}

// Main Avatar Scene
function AvatarScene({ mousePosition, isVisible }) {
  return (
    <>
      <EnhancedAvatar mousePosition={mousePosition} isVisible={isVisible} />
    </>
  );
}

// Main GLTF Avatar Component
const GLTFAvatar = ({ className = "", isVisible = true }) => {
  const mousePosition = useMousePosition();

  return (
    <div className={`w-80 h-80 rounded-2xl overflow-hidden ${className}`}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0.5, 3], fov: 50 }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <Suspense fallback={<LoadingIndicator />}>
          {/* Professional Lighting Setup */}
          <ambientLight intensity={0.4} color="#FFF8E7" />
          
          {/* Key light */}
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={1.2}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={20}
            shadow-camera-left={-5}
            shadow-camera-right={5}
            shadow-camera-top={5}
            shadow-camera-bottom={-5}
          />
          
          {/* Fill light */}
          <pointLight 
            position={[-3, 2, 3]} 
            intensity={0.3} 
            color="#87CEEB" 
          />
          
          {/* Rim light */}
          <spotLight
            position={[3, 3, -3]}
            intensity={0.5}
            angle={Math.PI / 6}
            penumbra={0.5}
            color="#FFE4B5"
            castShadow
          />
          
          {/* Studio Environment */}
          <Environment preset="studio" />
          
          {/* Avatar */}
          <AvatarScene mousePosition={mousePosition} isVisible={isVisible} />
          
          {/* Ground with shadows */}
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.4} 
            scale={8} 
            blur={2} 
            far={4} 
          />
          
          {/* Optional orbit controls for testing */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
      
      {/* Status indicator */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
        Professional Avatar
      </div>
    </div>
  );
};

// No preloading needed for fallback avatar

export default GLTFAvatar;