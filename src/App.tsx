import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Monitor, Apple, Terminal, Github } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

function AnimatedSphere() {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </div>
  );
}

function App() {
  const downloadLinks = {
    mac: "https://github.com/TeZado/Code-companion/releases/latest/download/GitCompanion-mac.dmg",
    win: "https://github.com/TeZado/Code-companion/releases/latest/download/GitCompanion-win.exe",
    linux: "https://github.com/TeZado/Code-companion/releases/latest/download/GitCompanion-linux.AppImage"
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative font-sans">
      <Scene />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-2xl font-bold tracking-tighter"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Github size={24} className="text-white" />
            </div>
            GitCompanion
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="https://github.com/TeZado/Code-companion" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center gap-2 font-medium"
          >
            <Github size={18} />
            View Source
          </motion.a>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
            >
              The ultimate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Git companion
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 max-w-xl leading-relaxed"
            >
              A visually stunning, cross-platform desktop application reimagining the Git and GitHub workflow. Experience real-time updates and an inline 3-way merge editor.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl pt-4"
            >
              <a href={downloadLinks.mac} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group backdrop-blur-sm shadow-xl">
                <Apple size={32} className="mb-3 text-gray-300 group-hover:text-white transition-colors" />
                <span className="font-semibold text-lg">macOS</span>
                <span className="text-sm text-gray-500 mt-1">.dmg</span>
              </a>
              <a href={downloadLinks.win} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group backdrop-blur-sm shadow-xl">
                <Monitor size={32} className="mb-3 text-gray-300 group-hover:text-white transition-colors" />
                <span className="font-semibold text-lg">Windows</span>
                <span className="text-sm text-gray-500 mt-1">.exe</span>
              </a>
              <a href={downloadLinks.linux} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group backdrop-blur-sm shadow-xl">
                <Terminal size={32} className="mb-3 text-gray-300 group-hover:text-white transition-colors" />
                <span className="font-semibold text-lg">Linux</span>
                <span className="text-sm text-gray-500 mt-1">.AppImage</span>
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 w-full max-w-xl lg:max-w-none relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full"></div>
            <div className="aspect-[4/3] rounded-3xl bg-[#0F0F13] border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center relative backdrop-blur-xl">
               <div className="text-center p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Download size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium">Ready to deploy</h3>
                  <p className="text-sm text-gray-400">Download for your platform to get started.</p>
               </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

export default App;
