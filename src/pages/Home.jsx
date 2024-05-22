import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(true);
  const [isShooting, setIsShooting] = useState(false);

  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);

  // Function to update the target position
  const handleTargetPositionChange = (newTargetPosition) => {
    const [clientX, clientY] = newTargetPosition;
    // Convert screen coordinates to your scene's coordinate range
    const x = (clientX / window.innerWidth) * 100 - 50;
    const y = -(clientY / window.innerHeight) * 100 + 50;
    setTargetPosition([x, y, 0]); // Update the target position
    setIsShooting(true);
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 700) {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, -6.5, -43.4];
    } else if (window.innerWidth < 1300) {
      screenScale = [0.6, 0.6, 0.6];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 700) {
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -2, 3];
    } else if (window.innerWidth < 1300) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -2, 3];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, 3];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div
        className="absolute top-28 left-0 right-0 z-10 
      flex items-center justify-center opacity-90"
      >
        {!isShooting && <HomeInfo />}
      </div>
      <div className="absolute top-20 left-0 z-10 right-0 flex items-center justify-center xl:hidden bg-red-200 py-3  text-center text-xl text-gray-700">
        <p className="text-xs lg:text-base">For better experience try this <b>page</b> with PC or Laptop!🙏</p>
      </div>

      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={[0.1, 0, 0]}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setIsShooting={setIsShooting}
            onTargetPositionChange={handleTargetPositionChange}
          />
          <Bird />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 3, 0]}
            isShooting={isShooting}
            targetPosition={targetPosition}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
