import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import { useSpring, a } from "@react-spring/three";
import { useNavigate } from "react-router-dom";

import planeScene from "../assets/3d/plane.glb";
import { useFrame, useThree } from "@react-three/fiber";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
export default function Plane({
  isRotating,
  targetPosition,
  isShooting,
  ...props
}) {
  const ref = useRef();
  const navigate = useNavigate();
  const { camera } = useThree();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  const [zoom, setZoom] = useSpring(() => ({
    from: { z: 10 },
    to: { z: 5 },
    delay: 4000,
  }));

  // Use an effect to control the plane's animation based on 'isRotating'
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    if (isShooting) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isShooting]);

  useFrame(() => {
    if (isShooting) {
      const dx = targetPosition[0] - ref.current.position.x;
      const dy = targetPosition[1] - ref.current.position.y;

      // Calculate the angle for the plane to face the target
      const angle = Math.atan2(dx, dy);

      // Set the plane's rotation to face the target
      ref.current.rotation.y =
        ((angle > 1.1 || angle < -1.1) && angle) || angle + Math.PI;

      // Move the plane towards the target position (adjust the speed as needed)
      const speed = 0.1;
      ref.current.position.x += Math.sin(angle) * speed;
      ref.current.position.z -= Math.abs(Math.cos(angle)) * speed;
      console.log(targetPosition[0]);
      if (ref.current.position.z < -35) {
        if (ref.current.position.x < -16) navigate("/about");
        if (ref.current.position.x > 16) navigate("/skills");
        if (ref.current.position.x < 15 && ref.current.position.x > -15)
          navigate("/projects");
      }

      if (ref.current.position.z <= -5) {
        camera.position.set(
          ref.current.position.x,
          ref.current.position.y + 1.5,
          ref.current.position.z + zoom.z.get()
        );
        camera.lookAt(
          ref.current.position.x + 10 * Math.sin(angle),
          ref.current.position.y,
          ref.current.position.z + 10 * Math.cos(angle)
        );
      }
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
