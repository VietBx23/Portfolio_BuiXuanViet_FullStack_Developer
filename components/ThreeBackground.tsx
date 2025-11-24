import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, Stars, Torus } from '@react-three/drei';
import * as THREE from 'three';

// Fix for TypeScript errors regarding missing intrinsic elements for Three.js
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      octahedronGeometry: any;
      dodecahedronGeometry: any;
      tetrahedronGeometry: any;
      ringGeometry: any;
      ambientLight: any;
      pointLight: any;
      directionalLight: any;
      fog: any;
      lineSegments: any;
      edgesGeometry: any;
      lineBasicMaterial: any;
      planeGeometry: any;
      meshBasicMaterial: any;
      boxGeometry: any;
      torusGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      sphereGeometry: any;
      meshPhysicalMaterial: any;
      circleGeometry: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      octahedronGeometry: any;
      dodecahedronGeometry: any;
      tetrahedronGeometry: any;
      ringGeometry: any;
      ambientLight: any;
      pointLight: any;
      directionalLight: any;
      fog: any;
      lineSegments: any;
      edgesGeometry: any;
      lineBasicMaterial: any;
      planeGeometry: any;
      meshBasicMaterial: any;
      boxGeometry: any;
      torusGeometry: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
      sphereGeometry: any;
      meshPhysicalMaterial: any;
      circleGeometry: any;
    }
  }
}

// Warp Speed Stars that stretch based on scroll
const WarpStars = () => {
  const ref = useRef<THREE.Points>(null!);
  const scrollRef = useRef(0);
  const targetSpeed = useRef(0);

  const starCount = 6000; // Increased count
  
  const [positions] = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    // Detect scroll speed
    const currentScroll = window.scrollY;
    const scrollDelta = Math.abs(currentScroll - scrollRef.current);
    scrollRef.current = currentScroll;
    
    // Smoothly interpolate speed
    targetSpeed.current = THREE.MathUtils.lerp(targetSpeed.current, scrollDelta * 2, 0.1);
    const speed = 0.5 + targetSpeed.current * 0.8; // Faster base speed

    if (ref.current) {
        const positionsAttribute = ref.current.geometry.attributes.position;
        
        for (let i = 0; i < starCount; i++) {
            let z = positionsAttribute.getZ(i);
            
            // Move stars towards camera
            z += speed;
            
            // Reset if behind camera
            if (z > 500) z = -500;
            
            positionsAttribute.setZ(i, z);
        }
        positionsAttribute.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.8}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

// Moving Cyber Grid Terrain with Waves
const CyberGrid = () => {
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (ref.current) {
      // Move grid forward
      ref.current.position.z = (state.clock.elapsedTime * 8) % 10;
      // Gentle wave effect on rotation
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group position={[0, -20, 0]} rotation={[-Math.PI / 2.2, 0, 0]}>
      <mesh ref={ref}>
        <planeGeometry args={[400, 400, 80, 80]} />
        <meshBasicMaterial 
          color="#06b6d4" 
          wireframe 
          transparent 
          opacity={0.08} 
        />
      </mesh>
    </group>
  );
};

// Complex Floating Geometry (Octahedrons, Tetrahedrons)
const CyberShape = ({ position, color, type, scale = 1, speed = 1 }: any) => {
  const ref = useRef<THREE.Mesh>(null!);
  const seed = useMemo(() => Math.random(), []);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * speed * 0.5;
    ref.current.rotation.y += delta * speed * 0.3;
    ref.current.rotation.z += delta * speed * 0.2;
    // Bobbing motion
    ref.current.position.y += Math.sin(state.clock.elapsedTime * speed + seed * 10) * 0.01;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
      {type === 'tetrahedron' && <tetrahedronGeometry args={[1, 0]} />}
      {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
      {type === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}
      <meshStandardMaterial 
        color={color} 
        wireframe 
        emissive={color}
        emissiveIntensity={0.8}
        transparent 
        opacity={0.4} 
        roughness={0}
        metalness={1}
      />
    </mesh>
  );
};

// A Spinning Gyroscope Core representing the "Engine"
const TechCore = ({ position }: { position: [number, number, number] }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    // Hovering
    groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    
    // Spinning Rings
    if(ring1.current) ring1.current.rotation.x = state.clock.elapsedTime * 0.5;
    if(ring1.current) ring1.current.rotation.y = state.clock.elapsedTime * 0.2;
    
    if(ring2.current) ring2.current.rotation.y = state.clock.elapsedTime * 0.4;
    if(ring2.current) ring2.current.rotation.z = state.clock.elapsedTime * 0.1;

    if(ring3.current) ring3.current.rotation.x = state.clock.elapsedTime * 0.3;
    if(ring3.current) ring3.current.rotation.z = state.clock.elapsedTime * 0.6;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Central Crystal */}
      <mesh>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2} toneMapped={false} />
      </mesh>
      
      {/* Outer Glow */}
      <pointLight color="#06b6d4" distance={10} intensity={5} />

      {/* Ring 1 */}
      <mesh ref={ring1}>
         <torusGeometry args={[3, 0.05, 16, 100]} />
         <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
      </mesh>

      {/* Ring 2 */}
      <mesh ref={ring2}>
         <torusGeometry args={[4, 0.05, 16, 100]} />
         <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
      </mesh>
      
      {/* Ring 3 */}
      <mesh ref={ring3}>
         <torusGeometry args={[5, 0.08, 16, 100]} />
         <meshBasicMaterial color="#ffffff" transparent opacity={0.3} wireframe />
      </mesh>

      {/* Orbiting Satellites */}
      <group rotation={[0, 0, Math.PI / 4]}>
        <mesh position={[6, 0, 0]}>
           <boxGeometry args={[0.5, 0.5, 0.5]} />
           <meshBasicMaterial color="#cyan" wireframe />
        </mesh>
      </group>
    </group>
  )
}

// DNA Helix - Rotating particle stream
const DNAHelix = () => {
    const group = useRef<THREE.Group>(null!);
    
    useFrame((state) => {
        group.current.rotation.y = state.clock.elapsedTime * 0.2;
        group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 2;
    });

    const count = 40;
    const radius = 3;
    const height = 15;

    return (
        <group ref={group} position={[-15, 0, -10]} rotation={[0, 0, Math.PI / 6]}>
            {Array.from({ length: count }).map((_, i) => {
                const y = (i / count) * height - height / 2;
                const angle = (i / count) * Math.PI * 4;
                const x1 = Math.cos(angle) * radius;
                const z1 = Math.sin(angle) * radius;
                const x2 = Math.cos(angle + Math.PI) * radius;
                const z2 = Math.sin(angle + Math.PI) * radius;

                return (
                    <group key={i} position={[0, y, 0]}>
                        <mesh position={[x1, 0, z1]}>
                            <sphereGeometry args={[0.15, 8, 8]} />
                            <meshBasicMaterial color="#06b6d4" />
                        </mesh>
                        <mesh position={[x2, 0, z2]}>
                            <sphereGeometry args={[0.15, 8, 8]} />
                            <meshBasicMaterial color="#3adf10ff" />
                        </mesh>
                        <lineSegments>
                            <bufferGeometry>
                                <bufferAttribute 
                                    attach="attributes-position"
                                    count={2}
                                    array={new Float32Array([x1, 0, z1, x2, 0, z2])}
                                    itemSize={3}
                                />
                            </bufferGeometry>
                            <lineBasicMaterial color="#ffffff" opacity={0.1} transparent />
                        </lineSegments>
                    </group>
                )
            })}
        </group>
    )
}

// 3D Mouse Follower Light
const MouseLight = () => {
  const { viewport, mouse } = useThree();
  const ref = useRef<THREE.PointLight>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    
    // Smooth lerp
    ref.current.position.lerp(new THREE.Vector3(x, y, 5), 0.15);
    meshRef.current.position.copy(ref.current.position);
  });

  return (
    <>
      <pointLight ref={ref} color="#06b6d4" distance={20} intensity={4} decay={2} />
      <mesh ref={meshRef}>
         <sphereGeometry args={[0.08, 16, 16]} />
         <meshBasicMaterial color="#00ffff" transparent opacity={0.9} />
      </mesh>
    </>
  );
}

// Camera Rig for Parallax
const CameraRig = ({ children }: { children: React.ReactNode }) => {
    const group = useRef<THREE.Group>(null!);
    const { mouse } = useThree();

    useFrame((state, delta) => {
        // More dramatic rotation for "3D" feel
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.1, 0.05);
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, -mouse.x * 0.1, 0.05);
    });

    return <group ref={group}>{children}</group>;
};


const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020617]">
      <Canvas camera={{ position: [0, 0, 24], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <CameraRig>
            <ambientLight intensity={0.2} />
            <pointLight position={[20, 20, 20]} intensity={2} color="#3b82f6" />
            <pointLight position={[-20, -20, -20]} intensity={2} color="#8b5cf6" />
            
            <WarpStars />
            <MouseLight />
            
            {/* Background Atmosphere */}
            <Stars radius={120} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
            <fog attach="fog" args={['#020617', 10, 80]} />

            {/* Cyber Terrain */}
            <CyberGrid />

            {/* Main Tech Core (Right) */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <TechCore position={[10, 0, -10]} />
            </Float>

            {/* DNA Helix (Left) */}
            <DNAHelix />

            {/* Floating Geometric Artifacts */}
            <Float speed={2} rotationIntensity={2} floatIntensity={1}>
                <CyberShape position={[-6, 8, -5]} type="dodecahedron" color="#06b6d4" scale={1.2} speed={1} />
            </Float>
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                <CyberShape position={[8, -8, -8]} type="tetrahedron" color="#3b82f6" scale={1.8} speed={0.8} />
            </Float>
            <Float speed={3} rotationIntensity={1} floatIntensity={2}>
                <CyberShape position={[-10, -5, -15]} type="icosahedron" color="#8b5cf6" scale={2.5} speed={0.5} />
            </Float>
            <Float speed={4} rotationIntensity={3} floatIntensity={1}>
                <CyberShape position={[0, 10, -12]} type="octahedron" color="#ffffff" scale={1} speed={2} />
            </Float>

            {/* Extra Particles for depth */}
            <Sparkles count={400} scale={30} size={5} speed={0.6} opacity={0.6} color="#06b6d4" />
            <Sparkles count={200} scale={25} size={8} speed={0.4} opacity={0.4} color="#8b5cf6" />
        </CameraRig>
      </Canvas>
      
      {/* Vignette Overlay for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_120%)] opacity-80 pointer-events-none" />
    </div>
  );
};

export default ThreeBackground;