import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html } from "@react-three/drei";
import { useRef } from "react";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "MySQL",
  "JavaScript",
  "Three.js",
  "React Three Fiber",
  "WordPress",
];

function TechnologyNodes() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        state.clock.elapsedTime * 0.08;

      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={1.5}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <mesh>
          <icosahedronGeometry args={[1.15, 2]} />

          <meshStandardMaterial
            color="#D4AF37"
            metalness={0.9}
            roughness={0.2}
            wireframe
          />
        </mesh>

        {technologies.map((technology, index) => {
          const angle =
            (index / technologies.length) * Math.PI * 2;

          const radius = 2.1;

          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;

          return (
            <Float
              key={technology}
              speed={1 + index * 0.08}
              floatIntensity={0.4}
            >
              <mesh position={[x, 0, z]}>
                <sphereGeometry args={[0.08, 16, 16]} />

                <meshStandardMaterial
                  color="#D4AF37"
                  emissive="#D4AF37"
                  emissiveIntensity={1}
                />
              </mesh>

              <Html
                position={[x, 0.15, z]}
                center
                distanceFactor={5}
              >
                <div className="technology-label">
                  {technology}
                </div>
              </Html>
            </Float>
          );
        })}
      </Float>
    </group>
  );
}

function TechnologyEcosystem() {
  return (
    <section className="technology-section">
      <div className="technology-heading">
        <p className="section-label">TECHNOLOGY ECOSYSTEM</p>

        <h2>
          Technology That
          <span> Powers Innovation</span>
        </h2>

        <p>
          We combine modern technologies and digital platforms
          to create scalable, reliable, and future-ready solutions.
        </p>
      </div>

      <div className="technology-visual">
        <Canvas
          camera={{
            position: [0, 0, 7],
            fov: 45,
          }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />

          <pointLight
            position={[4, 4, 4]}
            intensity={15}
            color="#D4AF37"
          />

          <pointLight
            position={[-4, -2, 3]}
            intensity={8}
            color="#ffffff"
          />

          <TechnologyNodes />
        </Canvas>
      </div>
    </section>
  );
}

export default TechnologyEcosystem;