import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Edges } from '@react-three/drei';

function DeveloperCube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float
      speed={2} 
      rotationIntensity={1.5} 
      floatIntensity={2} 
    >
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <meshStandardMaterial 
          color="#1e293b" 
          transparent 
          opacity={0.8}
          roughness={0.1}
          metalness={0.8}
        />
        <Edges
          scale={1}
          threshold={15} // Display edges only when angle between faces exceeds this
          color="#38bdf8"
        />
        {/* Inner colored cube for hollow effect */}
        <mesh>
          <boxGeometry args={[2.48, 2.48, 2.48]} />
          <meshBasicMaterial color="#020617" />
        </mesh>
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-full relative z-10 aspect-square">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#38bdf8" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        <DeveloperCube />
      </Canvas>
    </div>
  );
}
