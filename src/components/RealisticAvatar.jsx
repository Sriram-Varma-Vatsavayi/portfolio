import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  ContactShadows,
  useTexture
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

// Enhanced Head Component with better geometry and materials
function EnhancedHead({ mousePosition, isVisible }) {
  const headGroupRef = useRef();
  const eyesGroupRef = useRef();
  const [blinking, setBlinking] = useState(false);
  
  // Advanced materials with better realism
  const skinMaterial = useMemo(() => {
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#D4A574'),
      roughness: 0.6,
      metalness: 0.0,
      clearcoat: 0.1,
      clearcoatRoughness: 0.8,
      // Subsurface scattering simulation
      transmission: 0.05,
      thickness: 0.5,
      ior: 1.4,
      // Warm skin undertone
      emissive: new THREE.Color('#FFF8F0').multiplyScalar(0.03),
    });
    return material;
  }, []);

  const hairMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1A1A1A'),
      roughness: 0.9,
      metalness: 0.02,
      clearcoat: 0.3,
      clearcoatRoughness: 0.7,
      // Hair fiber simulation
      anisotropy: 0.8,
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

  const frameMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#2A2A2A'),
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
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
    if (!headGroupRef.current || !isVisible) return;

    // Smooth head tracking with more natural movement
    const targetRotationX = -mousePosition.y * 0.12;
    const targetRotationY = mousePosition.x * 0.18;
    
    headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      headGroupRef.current.rotation.x, 
      targetRotationX, 
      0.04
    );
    headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      headGroupRef.current.rotation.y, 
      targetRotationY, 
      0.04
    );

    // Eye tracking
    if (eyesGroupRef.current) {
      const eyeTargetX = mousePosition.x * 0.1;
      const eyeTargetY = -mousePosition.y * 0.06;
      
      eyesGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        eyesGroupRef.current.rotation.y,
        eyeTargetX,
        0.08
      );
      eyesGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        eyesGroupRef.current.rotation.x,
        eyeTargetY,
        0.08
      );
    }

    // Subtle breathing for head position
    headGroupRef.current.position.y = 1.3 + Math.sin(state.clock.elapsedTime * 1.1) * 0.008;
  });

  return (
    <group ref={headGroupRef} position={[0, 1.3, 0]}>
      {/* Main head with better proportions */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.38, 64, 64]} />
        <primitive object={skinMaterial} />
      </mesh>
      
      {/* Face shape refinement */}
      <mesh position={[0, -0.08, 0.12]} castShadow receiveShadow>
        <sphereGeometry args={[0.32, 48, 48]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Jaw definition */}
      <mesh position={[0, -0.18, 0.08]} castShadow receiveShadow>
        <boxGeometry args={[0.45, 0.15, 0.25]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Enhanced hair with better volume and texture */}
      <group>
        {/* Main hair volume */}
        <mesh position={[0, 0.12, -0.08]} castShadow>
          <sphereGeometry args={[0.42, 48, 48]} />
          <primitive object={hairMaterial} />
        </mesh>
        
        {/* Hair front section */}
        <mesh position={[0, 0.08, 0.15]} scale={[1, 0.6, 0.8]} castShadow>
          <sphereGeometry args={[0.35, 32, 32]} />
          <primitive object={hairMaterial} />
        </mesh>
        
        {/* Side hair details */}
        <mesh position={[-0.25, 0.05, 0]} scale={[0.8, 1.2, 1]} castShadow>
          <sphereGeometry args={[0.15, 24, 24]} />
          <primitive object={hairMaterial} />
        </mesh>
        <mesh position={[0.25, 0.05, 0]} scale={[0.8, 1.2, 1]} castShadow>
          <sphereGeometry args={[0.15, 24, 24]} />
          <primitive object={hairMaterial} />
        </mesh>
      </group>
      
      {/* Enhanced eyes with better realism */}
      <group ref={eyesGroupRef}>
        {/* Left eye */}
        <group position={[-0.13, 0.06, 0.28]}>
          {/* Eye socket shadow */}
          <mesh position={[0, 0, -0.02]}>
            <sphereGeometry args={[0.095, 32, 32]} />
            <meshStandardMaterial color="#F5DEB3" />
          </mesh>
          {/* Eye white */}
          <mesh>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          {/* Iris */}
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.04, 32, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          {/* Pupil */}
          <mesh position={[0, 0, 0.06]}>
            <sphereGeometry args={[0.018, 24, 24]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          {/* Eye highlight */}
          <mesh position={[0.01, 0.01, 0.065]}>
            <sphereGeometry args={[0.008, 16, 16]} />
            <meshStandardMaterial 
              color="#FFFFFF" 
              emissive="#FFFFFF" 
              emissiveIntensity={0.3}
            />
          </mesh>
          {/* Eyelid */}
          {blinking && (
            <mesh position={[0, 0.015, 0.06]} scale={[1, 0.05, 1]}>
              <sphereGeometry args={[0.085, 24, 24]} />
              <primitive object={skinMaterial} />
            </mesh>
          )}
        </group>
        
        {/* Right eye */}
        <group position={[0.13, 0.06, 0.28]}>
          <mesh position={[0, 0, -0.02]}>
            <sphereGeometry args={[0.095, 32, 32]} />
            <meshStandardMaterial color="#F5DEB3" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.04, 32, 32]} />
            <meshStandardMaterial color="#8B4513" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <sphereGeometry args={[0.018, 24, 24]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[-0.01, 0.01, 0.065]}>
            <sphereGeometry args={[0.008, 16, 16]} />
            <meshStandardMaterial 
              color="#FFFFFF" 
              emissive="#FFFFFF" 
              emissiveIntensity={0.3}
            />
          </mesh>
          {blinking && (
            <mesh position={[0, 0.015, 0.06]} scale={[1, 0.05, 1]}>
              <sphereGeometry args={[0.085, 24, 24]} />
              <primitive object={skinMaterial} />
            </mesh>
          )}
        </group>
      </group>
      
      {/* Enhanced eyebrows */}
      <mesh position={[-0.13, 0.16, 0.32]} rotation={[0, 0, -0.08]} castShadow>
        <capsuleGeometry args={[0.018, 0.1, 8, 16]} />
        <primitive object={hairMaterial} />
      </mesh>
      <mesh position={[0.13, 0.16, 0.32]} rotation={[0, 0, 0.08]} castShadow>
        <capsuleGeometry args={[0.018, 0.1, 8, 16]} />
        <primitive object={hairMaterial} />
      </mesh>
      
      {/* Enhanced nose */}
      <mesh position={[0, 0.01, 0.35]} castShadow receiveShadow>
        <coneGeometry args={[0.035, 0.07, 12]} />
        <primitive object={skinMaterial} />
      </mesh>
      
      {/* Nostrils */}
      <mesh position={[-0.012, -0.015, 0.36]} scale={[0.6, 0.8, 1]}>
        <sphereGeometry args={[0.008, 16, 16]} />
        <meshStandardMaterial color="#C4956F" />
      </mesh>
      <mesh position={[0.012, -0.015, 0.36]} scale={[0.6, 0.8, 1]}>
        <sphereGeometry args={[0.008, 16, 16]} />
        <meshStandardMaterial color="#C4956F" />
      </mesh>
      
      {/* Enhanced mouth */}
      <mesh position={[0, -0.09, 0.33]} rotation={[0, 0, 0]}>
        <capsuleGeometry args={[0.008, 0.08, 8, 16]} />
        <meshStandardMaterial color="#B85450" />
      </mesh>
      
      {/* Professional sunglasses with better design */}
      <group position={[0, 0.08, 0.32]}>
        {/* Left lens with better curvature */}
        <mesh position={[-0.13, 0, 0]} rotation={[0, 0.1, 0]} castShadow>
          <sphereGeometry args={[0.11, 32, 32]} />
          <primitive object={glassMaterial} />
        </mesh>
        
        {/* Right lens */}
        <mesh position={[0.13, 0, 0]} rotation={[0, -0.1, 0]} castShadow>
          <sphereGeometry args={[0.11, 32, 32]} />
          <primitive object={glassMaterial} />
        </mesh>
        
        {/* Bridge */}
        <mesh position={[0, 0.01, 0.02]}>
          <capsuleGeometry args={[0.008, 0.05, 8, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        
        {/* Frame rings */}
        <mesh position={[-0.13, 0, 0]}>
          <torusGeometry args={[0.115, 0.006, 8, 48]} />
          <primitive object={frameMaterial} />
        </mesh>
        <mesh position={[0.13, 0, 0]}>
          <torusGeometry args={[0.115, 0.006, 8, 48]} />
          <primitive object={frameMaterial} />
        </mesh>
        
        {/* Temples with proper curve */}
        <mesh position={[-0.21, -0.01, -0.05]} rotation={[0, -0.15, 0]} castShadow>
          <capsuleGeometry args={[0.006, 0.1, 8, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        <mesh position={[0.21, -0.01, -0.05]} rotation={[0, 0.15, 0]} castShadow>
          <capsuleGeometry args={[0.006, 0.1, 8, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        
        {/* Temple ends */}
        <mesh position={[-0.26, -0.02, -0.12]} castShadow>
          <sphereGeometry args={[0.008, 16, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        <mesh position={[0.26, -0.02, -0.12]} castShadow>
          <sphereGeometry args={[0.008, 16, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
      </group>
    </group>
  );
}

// Enhanced Body Component
function EnhancedBody({ isVisible }) {
  const bodyRef = useRef();
  
  const suitMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1A1A1A'),
      roughness: 0.3,
      metalness: 0.05,
      clearcoat: 0.2,
      clearcoatRoughness: 0.7,
    });
  }, []);

  const shirtMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#F8F8FF'),
      roughness: 0.8,
      metalness: 0.0,
    });
  }, []);

  const skinMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#D4A574'),
      roughness: 0.6,
      metalness: 0.0,
      clearcoat: 0.1,
      transmission: 0.05,
    });
  }, []);

  useFrame((state) => {
    if (!bodyRef.current || !isVisible) return;

    // Subtle breathing animation
    const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 1.1) * 0.012;
    bodyRef.current.scale.setScalar(breathingScale);
    
    // Slight torso movement
    bodyRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.015;
  });

  return (
    <group ref={bodyRef}>
      {/* Enhanced torso */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.32, 0.8, 12, 48]} />
        <primitive object={suitMaterial} />
      </mesh>
      
      {/* Shirt collar area */}
      <mesh position={[0, 0.75, 0.02]} scale={[0.9, 0.4, 0.95]} castShadow>
        <capsuleGeometry args={[0.25, 0.3, 8, 32]} />
        <primitive object={shirtMaterial} />
      </mesh>
      
      {/* Suit lapels with better detail */}
      <mesh position={[-0.1, 0.65, 0.05]} rotation={[0, 0, -0.2]} castShadow>
        <boxGeometry args={[0.06, 0.18, 0.02]} />
        <primitive object={suitMaterial} />
      </mesh>
      <mesh position={[0.1, 0.65, 0.05]} rotation={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[0.06, 0.18, 0.02]} />
        <primitive object={suitMaterial} />
      </mesh>
      
      {/* Arms in neutral position */}
      <mesh position={[-0.45, 0.4, 0]} rotation={[0, 0, 0.1]} castShadow>
        <capsuleGeometry args={[0.08, 0.5, 8, 32]} />
        <primitive object={suitMaterial} />
      </mesh>
      <mesh position={[0.45, 0.4, 0]} rotation={[0, 0, -0.1]} castShadow>
        <capsuleGeometry args={[0.08, 0.5, 8, 32]} />
        <primitive object={suitMaterial} />
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.52, 0.1, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.06, 32, 32]} />
        <primitive object={skinMaterial} />
      </mesh>
      <mesh position={[0.52, 0.1, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.06, 32, 32]} />
        <primitive object={skinMaterial} />
      </mesh>
    </group>
  );
}

// Main Scene
function AvatarScene({ mousePosition, isVisible }) {
  return (
    <>
      <EnhancedHead mousePosition={mousePosition} isVisible={isVisible} />
      <EnhancedBody isVisible={isVisible} />
    </>
  );
}

// Main Component
const RealisticAvatar = ({ className = "", isVisible = true }) => {
  const mousePosition = useMousePosition();

  return (
    <div className={`w-80 h-80 rounded-2xl overflow-hidden ${className}`}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0.8, 2.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Enhanced lighting setup */}
          <ambientLight intensity={0.3} color="#FFF8E7" />
          
          {/* Key light */}
          <directionalLight 
            position={[3, 4, 3]} 
            intensity={1.4}
            color="#FFFFFF"
            castShadow
            shadow-mapSize={[4096, 4096]}
            shadow-camera-far={15}
            shadow-camera-left={-4}
            shadow-camera-right={4}
            shadow-camera-top={4}
            shadow-camera-bottom={-4}
            shadow-bias={-0.001}
          />
          
          {/* Fill light */}
          <pointLight 
            position={[-2, 2, 2]} 
            intensity={0.4} 
            color="#E6F3FF" 
          />
          
          {/* Rim light */}
          <pointLight 
            position={[2, 1, -2]} 
            intensity={0.3} 
            color="#FFE4B5" 
          />
          
          {/* Environment */}
          <Environment preset="studio" />
          
          {/* Avatar */}
          <AvatarScene mousePosition={mousePosition} isVisible={isVisible} />
          
          {/* Enhanced shadows */}
          <ContactShadows 
            position={[0, -1, 0]} 
            opacity={0.25} 
            scale={6} 
            blur={1.5} 
            far={2.5} 
          />
        </Suspense>
      </Canvas>
      
      {/* Status indicator */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
        Enhanced Avatar
      </div>
    </div>
  );
};

export default RealisticAvatar;