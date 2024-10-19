import { Canvas } from '@react-three/fiber';
import './Scene.css';
import { useGLTF } from '@react-three/drei';

export default function MyScene() {
  const { nodes, materials } = useGLTF('/tankobon.gltf');
  return (
    <>
      <div className="scene">
        <Canvas className="canvas" shadows camera={{
          position: [-6, 7, 7]
        }}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry} />
        </Canvas>
      </div>
    </>
  );
}