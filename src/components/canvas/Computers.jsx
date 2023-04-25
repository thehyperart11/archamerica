import { Suspense, useEffect, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { Mesh, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { vector3 } from "maath";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./modern_house/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0 - 3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    // remove the listener when the component is unmounted.
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [0, -10, -5] }}
      gl={{ preserveDrawingBuffer: true }}
      id="house-model-canvas"
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <Computers isMobile={isMobile} /> */}
        <HouseModel />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const HouseModel = () => {
  const gltf = useLoader(GLTFLoader, "./modern_house/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(0.001, 0.001, 0.001);
    gltf.scene.position.set(-2.5, -6, 0);
    // gltf.scene.rotateOnAxis(1, 10);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} rotation-y={40} />;
};

export default ComputersCanvas;
