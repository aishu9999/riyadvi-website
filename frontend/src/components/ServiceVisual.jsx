import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";

function ServiceObject() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.35;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <group ref={groupRef}>
        <Sphere args={[0.9, 32, 32]}>
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.22}
            wireframe
          />
        </Sphere>

        <Torus args={[1.25, 0.025, 16, 80]}>
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.2}
          />
        </Torus>
      </group>
    </Float>
  );
}

function ServiceVisual() {
  return (
    <div className="service-visual">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />

        <pointLight
          position={[3, 3, 3]}
          intensity={12}
          color="#D4AF37"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={8}
          color="#ffffff"
        />

        <ServiceObject />
      </Canvas>
    </div>
  );
}

export default ServiceVisual;