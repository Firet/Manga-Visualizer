import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

export default function MyScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 15, 10]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      {/* <OrbitControls /> */}
    </Canvas>
  );
}