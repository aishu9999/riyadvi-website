import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere } from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={1}
    >
      <Sphere ref={sphereRef} args={[1.6, 64, 64]}>
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.9}
          roughness={0.2}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function ThreeHero() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
      }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />

      <pointLight
        position={[3, 3, 3]}
        intensity={20}
        color="#D4AF37"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={10}
        color="#ffffff"
      />

      <AnimatedSphere />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

export default ThreeHero;