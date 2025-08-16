import { Suspense, useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  ContactShadows,
  Float,
  Sphere,
  MeshDistortMaterial,
  Text3D,
  Center,
  useMatcapTexture
} from '@react-three/drei';
import * as THREE from 'three';

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

function ModernHead({ mousePosition, isVisible }) {
  const headRef = useRef();
  const eyesRef = useRef();
  const [blinking, setBlinking] = useState(false);

  const skinMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#DEB887'),
      roughness: 0.5,
      metalness: 0.0,
      clearcoat: 0.3,
      clearcoatRoughness: 0.6,
      transmission: 0.08,
      thickness: 0.5,
      ior: 1.4,
      emissive: new THREE.Color('#FFF8DC').multiplyScalar(0.02),
    });
  }, []);

  const hairMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#2C1810'),
      roughness: 0.85,
      metalness: 0.02,
      clearcoat: 0.4,
      clearcoatRoughness: 0.8,
      anisotropy: 0.9,
    });
  }, []);

  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0a0a0a'),
      metalness: 0.1,
      roughness: 0.02,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.85,
      transmission: 0.15,
      ior: 1.52,
      reflectivity: 0.9,
    });
  }, []);

  const frameMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1a1a1a'),
      metalness: 0.9,
      roughness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
    });
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 150);
    }, 3000 + Math.random() * 2000);
    return () => clearInterval(blinkInterval);
  }, []);

  useFrame((state) => {
    if (!headRef.current || !isVisible) return;

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

    if (eyesRef.current) {
      eyesRef.current.rotation.y = mousePosition.x * 0.1;
      eyesRef.current.rotation.x = -mousePosition.y * 0.05;
    }

    headRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
  });

  return (
    <group ref={headRef} position={[0, 0.5, 0]}>
      {/* Main head sphere */}
      <mesh castShadow receiveShadow>
        <sphereGeometry args={[0.38, 64, 64]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Face shape refinement */}
      <mesh position={[0, -0.05, 0.15]} castShadow receiveShadow>
        <sphereGeometry args={[0.33, 48, 48]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Jaw definition */}
      <mesh position={[0, -0.15, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.12, 0.22]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Forehead */}
      <mesh position={[0, 0.12, 0.1]} castShadow receiveShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Enhanced hair with better volume */}
      <group>
        {/* Main hair volume */}
        <mesh position={[0, 0.15, -0.05]} castShadow>
          <sphereGeometry args={[0.41, 48, 48]} />
          <primitive object={hairMaterial} />
        </mesh>
        
        {/* Hair front section */}
        <mesh position={[0, 0.08, 0.2]} scale={[1, 0.6, 0.8]} castShadow>
          <sphereGeometry args={[0.3, 32, 32]} />
          <primitive object={hairMaterial} />
        </mesh>
        
        {/* Side hair details */}
        <mesh position={[-0.22, 0.05, 0]} scale={[0.7, 1.1, 1]} castShadow>
          <sphereGeometry args={[0.12, 24, 24]} />
          <primitive object={hairMaterial} />
        </mesh>
        <mesh position={[0.22, 0.05, 0]} scale={[0.7, 1.1, 1]} castShadow>
          <sphereGeometry args={[0.12, 24, 24]} />
          <primitive object={hairMaterial} />
        </mesh>

        {/* Hair texture strands */}
        <mesh position={[0, 0.25, 0]} scale={[0.9, 0.3, 0.9]} castShadow>
          <sphereGeometry args={[0.35, 24, 24]} />
          <primitive object={hairMaterial} />
        </mesh>
      </group>

      {/* Enhanced eyes with realistic details */}
      <group ref={eyesRef}>
        {/* Left eye */}
        <group position={[-0.13, 0.08, 0.3]}>
          {/* Eye socket shadow */}
          <mesh position={[0, 0, -0.02]}>
            <sphereGeometry args={[0.09, 32, 32]} />
            <meshStandardMaterial color="#F5DEB3" />
          </mesh>
          {/* Eye white */}
          <mesh>
            <sphereGeometry args={[0.075, 32, 32]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
          </mesh>
          {/* Iris with gradient */}
          <mesh position={[0, 0, 0.04]}>
            <sphereGeometry args={[0.035, 32, 32]} />
            <meshStandardMaterial color="#8B4513" roughness={0.8} />
          </mesh>
          {/* Pupil */}
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.016, 24, 24]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          {/* Eye highlight */}
          <mesh position={[0.008, 0.008, 0.055]}>
            <sphereGeometry args={[0.006, 16, 16]} />
            <meshStandardMaterial 
              color="#FFFFFF" 
              emissive="#FFFFFF" 
              emissiveIntensity={0.4}
            />
          </mesh>
          {/* Upper eyelid */}
          {blinking && (
            <mesh position={[0, 0.015, 0.05]} scale={[1, 0.05, 1]}>
              <sphereGeometry args={[0.08, 24, 24]} />
              <primitive object={skinMaterial} />
            </mesh>
          )}
        </group>

        {/* Right eye */}
        <group position={[0.13, 0.08, 0.3]}>
          <mesh position={[0, 0, -0.02]}>
            <sphereGeometry args={[0.09, 32, 32]} />
            <meshStandardMaterial color="#F5DEB3" />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.075, 32, 32]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.04]}>
            <sphereGeometry args={[0.035, 32, 32]} />
            <meshStandardMaterial color="#8B4513" roughness={0.8} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.016, 24, 24]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[-0.008, 0.008, 0.055]}>
            <sphereGeometry args={[0.006, 16, 16]} />
            <meshStandardMaterial 
              color="#FFFFFF" 
              emissive="#FFFFFF" 
              emissiveIntensity={0.4}
            />
          </mesh>
          {blinking && (
            <mesh position={[0, 0.015, 0.05]} scale={[1, 0.05, 1]}>
              <sphereGeometry args={[0.08, 24, 24]} />
              <primitive object={skinMaterial} />
            </mesh>
          )}
        </group>
      </group>

      {/* Eyebrows */}
      <mesh position={[-0.13, 0.15, 0.32]} rotation={[0, 0, -0.05]} castShadow>
        <capsuleGeometry args={[0.015, 0.08, 8, 16]} />
        <primitive object={hairMaterial} />
      </mesh>
      <mesh position={[0.13, 0.15, 0.32]} rotation={[0, 0, 0.05]} castShadow>
        <capsuleGeometry args={[0.015, 0.08, 8, 16]} />
        <primitive object={hairMaterial} />
      </mesh>

      {/* Enhanced nose */}
      <mesh position={[0, 0.02, 0.36]} castShadow receiveShadow>
        <coneGeometry args={[0.03, 0.06, 12]} />
        <primitive object={skinMaterial} />
      </mesh>
      
      {/* Nose bridge */}
      <mesh position={[0, 0.05, 0.34]} castShadow receiveShadow>
        <boxGeometry args={[0.015, 0.04, 0.02]} />
        <primitive object={skinMaterial} />
      </mesh>
      
      {/* Nostrils */}
      <mesh position={[-0.01, -0.005, 0.37]} scale={[0.6, 0.8, 1]}>
        <sphereGeometry args={[0.006, 16, 16]} />
        <meshStandardMaterial color="#C4956F" />
      </mesh>
      <mesh position={[0.01, -0.005, 0.37]} scale={[0.6, 0.8, 1]}>
        <sphereGeometry args={[0.006, 16, 16]} />
        <meshStandardMaterial color="#C4956F" />
      </mesh>

      {/* Enhanced mouth */}
      <mesh position={[0, -0.08, 0.35]}>
        <capsuleGeometry args={[0.006, 0.06, 8, 16]} />
        <meshStandardMaterial color="#B85450" roughness={0.3} />
      </mesh>
      
      {/* Lips detail */}
      <mesh position={[0, -0.075, 0.355]} scale={[1.2, 0.6, 0.8]}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshStandardMaterial color="#C8665C" roughness={0.2} />
      </mesh>

      {/* Cheekbones */}
      <mesh position={[-0.18, 0.02, 0.25]} scale={[0.8, 1, 1.2]} castShadow receiveShadow>
        <sphereGeometry args={[0.08, 24, 24]} />
        <primitive object={skinMaterial} />
      </mesh>
      <mesh position={[0.18, 0.02, 0.25]} scale={[0.8, 1, 1.2]} castShadow receiveShadow>
        <sphereGeometry args={[0.08, 24, 24]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Ears */}
      <mesh position={[-0.35, 0.05, 0]} rotation={[0, 0, -0.2]} castShadow receiveShadow>
        <sphereGeometry args={[0.06, 24, 24]} />
        <primitive object={skinMaterial} />
      </mesh>
      <mesh position={[0.35, 0.05, 0]} rotation={[0, 0, 0.2]} castShadow receiveShadow>
        <sphereGeometry args={[0.06, 24, 24]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Professional glasses with detailed frame */}
      <group position={[0, 0.08, 0.34]}>
        {/* Left lens with curvature */}
        <mesh position={[-0.12, 0, 0]} rotation={[0, 0.1, 0]} castShadow>
          <sphereGeometry args={[0.085, 32, 32]} />
          <primitive object={glassMaterial} />
        </mesh>
        
        {/* Right lens */}
        <mesh position={[0.12, 0, 0]} rotation={[0, -0.1, 0]} castShadow>
          <sphereGeometry args={[0.085, 32, 32]} />
          <primitive object={glassMaterial} />
        </mesh>
        
        {/* Bridge with better design */}
        <mesh position={[0, 0.008, 0.015]}>
          <capsuleGeometry args={[0.006, 0.035, 8, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        
        {/* Frame rings with depth */}
        <mesh position={[-0.12, 0, 0]}>
          <torusGeometry args={[0.09, 0.005, 8, 48]} />
          <primitive object={frameMaterial} />
        </mesh>
        <mesh position={[0.12, 0, 0]}>
          <torusGeometry args={[0.09, 0.005, 8, 48]} />
          <primitive object={frameMaterial} />
        </mesh>
        
        {/* Temples with proper curve */}
        <mesh position={[-0.18, -0.008, -0.03]} rotation={[0, -0.12, 0]} castShadow>
          <capsuleGeometry args={[0.005, 0.08, 8, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        <mesh position={[0.18, -0.008, -0.03]} rotation={[0, 0.12, 0]} castShadow>
          <capsuleGeometry args={[0.005, 0.08, 8, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        
        {/* Temple ends */}
        <mesh position={[-0.22, -0.015, -0.08]} castShadow>
          <sphereGeometry args={[0.006, 16, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        <mesh position={[0.22, -0.015, -0.08]} castShadow>
          <sphereGeometry args={[0.006, 16, 16]} />
          <primitive object={frameMaterial} />
        </mesh>
        
        {/* Nose pads */}
        <mesh position={[-0.05, -0.02, 0.02]}>
          <sphereGeometry args={[0.008, 16, 16]} />
          <meshStandardMaterial color="#f0f0f0" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0.05, -0.02, 0.02]}>
          <sphereGeometry args={[0.008, 16, 16]} />
          <meshStandardMaterial color="#f0f0f0" transparent opacity={0.8} />
        </mesh>
      </group>
    </group>
  );
}

function ModernBody({ isVisible }) {
  const bodyRef = useRef();

  const suitMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1e293b'),
      roughness: 0.25,
      metalness: 0.05,
      clearcoat: 0.4,
      clearcoatRoughness: 0.6,
    });
  }, []);

  const shirtMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f8fafc'),
      roughness: 0.6,
      metalness: 0.0,
    });
  }, []);

  const skinMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#DEB887'),
      roughness: 0.5,
      metalness: 0.0,
      clearcoat: 0.3,
      transmission: 0.08,
    });
  }, []);

  const tieMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1e40af'),
      roughness: 0.7,
      metalness: 0.1,
    });
  }, []);

  useFrame((state) => {
    if (!bodyRef.current || !isVisible) return;
    
    const breathingScale = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.01;
    bodyRef.current.scale.setScalar(breathingScale);
    bodyRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.7) * 0.01;
  });

  return (
    <group ref={bodyRef}>
      {/* Enhanced torso with better proportions */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.28, 0.7, 12, 48]} />
        <primitive object={suitMaterial} />
      </mesh>

      {/* Shirt with collar */}
      <mesh position={[0, 0.1, 0.025]} scale={[0.8, 0.45, 0.9]} castShadow>
        <capsuleGeometry args={[0.22, 0.3, 8, 32]} />
        <primitive object={shirtMaterial} />
      </mesh>

      {/* Shirt collar details */}
      <mesh position={[-0.06, 0.15, 0.05]} rotation={[0, 0, -0.3]} castShadow>
        <boxGeometry args={[0.03, 0.08, 0.01]} />
        <primitive object={shirtMaterial} />
      </mesh>
      <mesh position={[0.06, 0.15, 0.05]} rotation={[0, 0, 0.3]} castShadow>
        <boxGeometry args={[0.03, 0.08, 0.01]} />
        <primitive object={shirtMaterial} />
      </mesh>

      {/* Detailed suit lapels */}
      <mesh position={[-0.09, 0.05, 0.05]} rotation={[0, 0, -0.18]} castShadow>
        <boxGeometry args={[0.06, 0.18, 0.02]} />
        <primitive object={suitMaterial} />
      </mesh>
      <mesh position={[0.09, 0.05, 0.05]} rotation={[0, 0, 0.18]} castShadow>
        <boxGeometry args={[0.06, 0.18, 0.02]} />
        <primitive object={suitMaterial} />
      </mesh>

      {/* Suit buttons */}
      <mesh position={[0.03, 0.02, 0.06]} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.004, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.03, -0.06, 0.06]} castShadow>
        <cylinderGeometry args={[0.008, 0.008, 0.004, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Enhanced tie with pattern */}
      <mesh position={[0, -0.02, 0.06]} castShadow>
        <boxGeometry args={[0.045, 0.25, 0.012]} />
        <primitive object={tieMaterial} />
      </mesh>
      
      {/* Tie knot */}
      <mesh position={[0, 0.12, 0.065]} castShadow>
        <boxGeometry args={[0.03, 0.04, 0.015]} />
        <primitive object={tieMaterial} />
      </mesh>

      {/* Enhanced arms with proper suit sleeves */}
      <mesh position={[-0.38, -0.02, 0]} rotation={[0, 0, 0.1]} castShadow>
        <capsuleGeometry args={[0.055, 0.45, 8, 32]} />
        <primitive object={suitMaterial} />
      </mesh>
      <mesh position={[0.38, -0.02, 0]} rotation={[0, 0, -0.1]} castShadow>
        <capsuleGeometry args={[0.055, 0.45, 8, 32]} />
        <primitive object={suitMaterial} />
      </mesh>

      {/* Shirt cuffs */}
      <mesh position={[-0.42, -0.25, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.03, 24]} />
        <primitive object={shirtMaterial} />
      </mesh>
      <mesh position={[0.42, -0.25, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.03, 24]} />
        <primitive object={shirtMaterial} />
      </mesh>

      {/* Hands with better proportions */}
      <mesh position={[-0.45, -0.35, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.05, 32, 32]} />
        <primitive object={skinMaterial} />
      </mesh>
      <mesh position={[0.45, -0.35, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.05, 32, 32]} />
        <primitive object={skinMaterial} />
      </mesh>

      {/* Suit jacket details */}
      <mesh position={[-0.15, -0.1, 0.04]} castShadow>
        <boxGeometry args={[0.02, 0.12, 0.01]} />
        <primitive object={suitMaterial} />
      </mesh>
      <mesh position={[0.15, -0.1, 0.04]} castShadow>
        <boxGeometry args={[0.02, 0.12, 0.01]} />
        <primitive object={suitMaterial} />
      </mesh>

      {/* Pocket square */}
      <mesh position={[-0.12, 0.08, 0.055]} castShadow>
        <boxGeometry args={[0.025, 0.015, 0.005]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.8} />
      </mesh>
    </group>
  );
}

function FloatingElements() {
  return (
    <>
      {/* Floating geometric shapes */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-1.5, 1, -1]}>
          <octahedronGeometry args={[0.08]} />
          <meshStandardMaterial color="#3b82f6" transparent opacity={0.7} />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[1.8, 0.5, -0.8]}>
          <icosahedronGeometry args={[0.06]} />
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} />
        </mesh>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[-1.2, -0.5, -1.2]}>
          <tetrahedronGeometry args={[0.07]} />
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.8} />
        </mesh>
      </Float>
    </>
  );
}

function AvatarScene({ mousePosition, isVisible }) {
  return (
    <>
      <ModernHead mousePosition={mousePosition} isVisible={isVisible} />
      <ModernBody isVisible={isVisible} />
      <FloatingElements />
    </>
  );
}

const ModernAvatar = ({ className = "", isVisible = true }) => {
  const mousePosition = useMousePosition();

  return (
    <div className={`w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 ${className}`}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0.5, 2.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} color="#f8fafc" />
          
          <directionalLight 
            position={[3, 4, 3]} 
            intensity={1.2}
            color="#ffffff"
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={10}
            shadow-camera-left={-3}
            shadow-camera-right={3}
            shadow-camera-top={3}
            shadow-camera-bottom={-3}
          />
          
          <pointLight 
            position={[-2, 2, 2]} 
            intensity={0.3} 
            color="#3b82f6" 
          />
          
          <pointLight 
            position={[2, 1, -2]} 
            intensity={0.2} 
            color="#06b6d4" 
          />
          
          <Environment preset="city" />
          
          <AvatarScene mousePosition={mousePosition} isVisible={isVisible} />
          
          <ContactShadows 
            position={[0, -0.8, 0]} 
            opacity={0.3} 
            scale={4} 
            blur={2} 
            far={2} 
          />
        </Suspense>
      </Canvas>
      
      {/* Modern UI indicator */}
      <div className="absolute bottom-3 right-3 flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>Interactive</span>
      </div>
    </div>
  );
};

export default ModernAvatar;