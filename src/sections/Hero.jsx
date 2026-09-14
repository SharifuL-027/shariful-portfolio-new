import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, TorusKnot, Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[#050505] overflow-hidden">
      
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            
            {/* Cinematic Stars Background */}
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

            {/* Floating 3D Element 1: Abstract Distorted Sphere */}
            <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
              <mesh position={[-4, 1, -2]}>
                <sphereGeometry args={[1.2, 64, 64]} />
                <MeshDistortMaterial color="#111111" distort={0.4} speed={2} roughness={0.1} metalness={0.9} />
              </mesh>
            </Float>

            {/* Floating 3D Element 2: Wireframe Geometric Shape */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
              <Icosahedron args={[1.5, 0]} position={[4, -2, -3]}>
                <meshStandardMaterial color="#ffffff" wireframe transparent opacity={0.15} />
              </Icosahedron>
            </Float>

            {/* Floating 3D Element 3: Dark Torus Knot */}
            <Float speed={2.5} rotationIntensity={1} floatIntensity={1}>
              <TorusKnot args={[0.8, 0.2, 128, 32]} position={[0, -3, -5]}>
                <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.8} />
              </TorusKnot>
            </Float>

          </Suspense>
        </Canvas>
      </div>

      {/* Foreground Text Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <span className="block text-[10px] md:text-xs tracking-[0.4em] text-gray-500 uppercase mb-6">
            MERN Stack Software Engineer
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter uppercase mb-4"
        >
          Md. Shariful Islam
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-xl text-sm md:text-base text-gray-400 font-light leading-relaxed"
        >
          Architecting scalable backend infrastructures and crafting immersive, cinematic frontend experiences.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;