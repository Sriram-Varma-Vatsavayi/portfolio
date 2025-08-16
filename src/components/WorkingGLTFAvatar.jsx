import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Environment, 
  ContactShadows,
  useGLTF
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

// GLTF Avatar Component
function GLTFAvatarModel({ mousePosition, isVisible }) {
  const avatarRef = useRef();
  const mixerRef = useRef();
  
  // Load the GLTF model
  const { scene, animations } = useGLTF('/models/avatar.glb');

  useEffect(() => {
    // Disable automatic animations for now to allow manual control
    if (scene && animations && animations.length > 0) {
      console.log('Available animations:', animations.length);
      // We'll control movement manually for more natural behavior
      // mixerRef.current = new THREE.AnimationMixer(scene);
      // const action = mixerRef.current.clipAction(animations[0]);
      // action.play();
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (!avatarRef.current || !isVisible) return;

    // Skip mixer updates since we're controlling manually
    // if (mixerRef.current) {
    //   mixerRef.current.update(delta);
    // }

    // Natural idle movements - more pronounced so you can see them clearly
    const idleRotationY = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    const idleRotationX = Math.cos(state.clock.elapsedTime * 0.6) * 0.15;
    
    // Cursor tracking that adds to idle movement
    const cursorInfluence = 0.4; // How much cursor affects movement
    const targetRotationY = idleRotationY + (mousePosition.x * cursorInfluence);
    const targetRotationX = idleRotationX + (-mousePosition.y * cursorInfluence * 0.5);
    
    // Smooth transitions with natural easing
    avatarRef.current.rotation.y = THREE.MathUtils.lerp(
      avatarRef.current.rotation.y, 
      targetRotationY, 
      0.05 // Bit faster so you can see the movement
    );
    avatarRef.current.rotation.x = THREE.MathUtils.lerp(
      avatarRef.current.rotation.x, 
      targetRotationX, 
      0.05
    );

    // More pronounced breathing/floating
    const breathingBase = Math.sin(state.clock.elapsedTime * 1.5) * 0.12;
    const breathingVariation = Math.cos(state.clock.elapsedTime * 0.9) * 0.05;
    avatarRef.current.position.y = -1.5 + breathingBase + breathingVariation;
    
    // More visible side-to-side sway
    avatarRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
  });

  if (!scene) {
    console.log('GLTF scene not loaded, using fallback');
    return null;
  }

  // Debug the actual size of the GLTF model
  const box = new THREE.Box3().setFromObject(scene);
  const size = box.getSize(new THREE.Vector3());
  console.log('GLTF model original dimensions:', size);
  console.log('Using GLTF avatar with scale [15, 15, 15]');
  return (
    <primitive 
      ref={avatarRef}
      object={scene.clone()} 
      scale={[15, 15, 15]} 
      position={[0, -1.5, 0]}
      castShadow
      receiveShadow
    />
  );
}

// Fallback component if GLTF fails
function SimpleFallbackAvatar({ mousePosition, isVisible }) {
  const avatarRef = useRef();

  useFrame((state) => {
    if (!avatarRef.current || !isVisible) return;

    // Cursor tracking
    const targetRotationY = mousePosition.x * 0.2;
    const targetRotationX = -mousePosition.y * 0.1;
    
    avatarRef.current.rotation.y = THREE.MathUtils.lerp(
      avatarRef.current.rotation.y, 
      targetRotationY, 
      0.05
    );
    avatarRef.current.rotation.x = THREE.MathUtils.lerp(
      avatarRef.current.rotation.x, 
      targetRotationX, 
      0.05
    );

    // Floating
    avatarRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
  });

  return (
    <group ref={avatarRef}>
      {/* Simple professional avatar */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#D4A574" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <capsuleGeometry args={[0.25, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.1, 0.55, 0.25]} castShadow>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      <mesh position={[0.1, 0.55, 0.25]} castShadow>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </group>
  );
}

// Main Avatar Component with error handling
function AvatarWithFallback({ mousePosition, isVisible }) {
  const [hasError, setHasError] = useState(false);

  try {
    if (hasError) {
      return <SimpleFallbackAvatar mousePosition={mousePosition} isVisible={isVisible} />;
    }
    return <GLTFAvatarModel mousePosition={mousePosition} isVisible={isVisible} />;
  } catch (error) {
    console.warn('GLTF Avatar failed to load, using fallback:', error);
    setHasError(true);
    return <SimpleFallbackAvatar mousePosition={mousePosition} isVisible={isVisible} />;
  }
}

// Main Working GLTF Avatar Component
const WorkingGLTFAvatar = ({ className = "", isVisible = true }) => {
  const mousePosition = useMousePosition();

  return (
    <div className={`${className}`} style={{ width: '100%', height: '100%', minHeight: '600px' }}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={
          <mesh>
            <sphereGeometry args={[0.5]} />
            <meshStandardMaterial color="#cccccc" />
          </mesh>
        }>
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={1.2}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-far={20}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-4, 3, 4]} intensity={0.4} color="#87CEEB" />
          <pointLight position={[4, 2, -2]} intensity={0.3} color="#FFE4B5" />
          
          {/* Environment */}
          <Environment preset="studio" />
          
          {/* Avatar */}
          <AvatarWithFallback mousePosition={mousePosition} isVisible={isVisible} />
          
          {/* Enhanced Ground shadows */}
          <ContactShadows 
            position={[0, -3.5, 0]} 
            opacity={0.25} 
            scale={12} 
            blur={1.5} 
            far={6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WorkingGLTFAvatar;