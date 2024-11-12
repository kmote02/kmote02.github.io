import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Model Component
const Model = ({ url }) => {
  const { scene } = useGLTF(url); // Loads the GLTF file
  return <primitive object={scene} />;
};

// GLTF Viewer Component
const GLTFViewer = () => {
  return (
    <div style={{ width: '700px', height: '500px' }}>
      <Canvas camera={{ position: [250, 200, 650], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model url="/3d_model/scene.gltf" /> {/* Correct path to GLTF file */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default GLTFViewer;
