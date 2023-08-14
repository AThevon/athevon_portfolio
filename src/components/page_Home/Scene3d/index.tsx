"use client";

import styles from "./scene3d.module.scss";
import { useState, useEffect } from "react";
import {
   PerspectiveCamera,
   Plane,
   Float,
   Html,
   useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Rocket3d } from "./Rocket_3d";
import * as THREE from "three";
import { Suspense } from "react";
import HeaderLogo from "@/components/Header/Logo";
import { AnimatePresence, motion } from "framer-motion";

const Scene3d = () => {
   const [isLoaded, setIsLoaded] = useState(false);
   // const { loaded } = useProgress();

   // useEffect(() => {
   //    if (loaded) {
   //          setIsLoaded(true);
   //    }
   // }, [loaded]);

   return (
      <section className={styles.scene3d}>
         {/* <Suspense fallback={null}>
            <AnimatePresence>
            {!isLoaded && (
                  <motion.div
                     className={styles.loading}
                     initial={{ scale: 2 }}
                     animate={{ scale: 1 }}
                     exit={{ scale: 2 }}
                     transition={{ duration: 0.2 }}
                  >
                     <HeaderLogo />
                  </motion.div>
         )}
         </AnimatePresence>
         {isLoaded && (
               <Canvas id="canvas" shadows>
                  <PerspectiveCamera
                     makeDefault
                     fov={75}
                     position={[0, 2.5, 5]}
                  />
                  <Float
                     position={[0, 1, 1]}
                     rotation={[0, THREE.MathUtils.degToRad(-20), -0.2]}
                     scale={isLoaded ? [1, 1, 1] : [0, 0, 0]}
                  >
                     <Rocket3d />
                  </Float>
                  <Plane
                     args={[50, 50]}
                     rotation={[-Math.PI / 2, 0, 0]}
                     position={[0, -1, -4]}
                     receiveShadow
                  >
                     <shadowMaterial attach="material" opacity={0.5} />
                  </Plane>
                  <ambientLight />
                  <pointLight
                     position={[-3, 10, 10]}
                     castShadow
                     shadow-mapSize-width={1024}
                     shadow-mapSize-height={1024}
                     shadow-camera-far={50}
                     shadow-camera-left={-10}
                     shadow-camera-right={10}
                     shadow-camera-top={10}
                     shadow-camera-bottom={-10}
                  />
                  <directionalLight position={[0, 0, 1]} />
               </Canvas>
            )}
         </Suspense> */}
      </section>
   );
};

export default Scene3d;
