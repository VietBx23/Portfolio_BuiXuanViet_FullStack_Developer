import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Text } from '@react-three/drei';
import * as THREE from 'three';

const LaptopModel = () => {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Complex floating animation
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10 - 0.2, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t)) / 10, 0.1);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 20, 0.1);
  });

  return (
    <group ref={group} rotation-x={0.1} position={[0, 0, 0]}>
       {/* Base Chassis */}
       <mesh position={[0, -0.2, 0]}>
         <boxGeometry args={[3.2, 0.2, 2.2]} />
         <meshStandardMaterial color="#1e293b" roughness={0.3} metalness={0.8} />
       </mesh>
       
       {/* Base Glow Strip */}
       <mesh position={[0, -0.2, 1.11]}>
         <boxGeometry args={[3.2, 0.05, 0.02]} />
         <meshBasicMaterial color="#06b6d4" />
       </mesh>
       
       {/* Keyboard Area (Simplified) */}
       <mesh position={[0, -0.09, 0.2]}>
          <planeGeometry args={[2.8, 1.3]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
       </mesh>

       {/* Screen Hinge Group */}
       <group position={[0, -0.1, -1]} rotation-x={-0.2}>
          {/* Lid Back */}
          <mesh position={[0, 1, 0]} rotation-x={0.1}>
            <boxGeometry args={[3.2, 2.1, 0.1]} />
            <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.8} />
          </mesh>
          
          {/* Glowing Logo */}
          <mesh position={[0, 1, -0.06]} rotation-x={0.1} rotation-y={Math.PI}>
             <circleGeometry args={[0.25, 32]} />
             <meshBasicMaterial color="#06b6d4" toneMapped={false} />
          </mesh>

          {/* Screen Display Bezel */}
          <mesh position={[0, 1, 0.06]} rotation-x={0.1}>
             <planeGeometry args={[3.1, 2.0]} />
             <meshBasicMaterial color="#000" />
          </mesh>

          {/* Actual Screen Content */}
          <mesh position={[0, 1, 0.07]} rotation-x={0.1}>
             <planeGeometry args={[2.9, 1.8]} />
             <meshBasicMaterial color="#0f172a" />
          </mesh>
          
          {/* Code Text on Screen */}
          <group position={[-1.3, 1.7, 0.08]} rotation-x={0.1} scale={0.15}>
            <Text
              color="#06b6d4" 
              anchorX="left" 
              anchorY="top"
              fontSize={0.8}
              font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnF8RD8yKxTOlOV.woff"
            >
              {`> INIT SYSTEM\n> LOAD MODULES\n> CONNECTING...\n> SUCCESS`}
            </Text>
          </group>
       </group>
    </group>
  );
};

const CyberLaptop = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 1, 6], fov: 35 }}>
         <ambientLight intensity={1} />
         <pointLight position={[5, 5, 5]} intensity={5} color="#06b6d4" />
         <pointLight position={[-5, 5, -5]} intensity={5} color="#3b82f6" />
         
         <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
           <LaptopModel />
         </Float>
         
         <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#06b6d4" />
      </Canvas>
    </div>
  );
};

export default CyberLaptop;