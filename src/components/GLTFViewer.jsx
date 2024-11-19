import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import view from '../../public/3d_model/scene.gltf?url'

// Configure draco loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.3/');

const Model = () => {
  const { scene } = useGLTF(view, undefined, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });
  
  return <primitive object={scene} />;
};

const LoadingSpinner = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="gray" wireframe />
  </mesh>
);

export default function GLTFViewer() {
  return (
    <div style={{ width: '700px', height: '500px', background: '#f0f0f0' }}>
      <Canvas
        camera={{ position: [10, 10, 10], fov: 50 }}
        style={{ background: '#f0f0f0' }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Pre-load the model
useGLTF.preload('/3d_model/scene.gltf');