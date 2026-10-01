import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";


function CaseStudyObject() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        state.clock.elapsedTime * 0.3;

      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={0.8}
    >
      <group ref={groupRef}>
        <Sphere args={[1.1, 48, 48]}>
          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.2}
            wireframe
          />
        </Sphere>

        <Torus args={[1.5, 0.025, 16, 100]}>
          <meshStandardMaterial
            color="#D4AF37"
            metalness={1}
            roughness={0.2}
          />
        </Torus>

        <Torus
          args={[1.8, 0.018, 16, 100]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.25}
          />
        </Torus>
      </group>
    </Float>
  );
}

function CaseStudyVisual() {
  return (
    <div className="case-study-visual">
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
          intensity={15}
          color="#D4AF37"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={8}
          color="#ffffff"
        />

        <CaseStudyObject />
      </Canvas>
    </div>
  );
}

export default CaseStudyVisual;