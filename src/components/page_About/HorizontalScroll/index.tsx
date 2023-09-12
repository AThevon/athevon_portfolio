"use client";

import styles from "./horizontalScroll.module.scss";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";

const HorizontalScroll = () => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
   });

   const backgroundX = useTransform(scrollYProgress, [0, 1], ["-2%", "-50%"]);
   const xWrapper = useTransform(scrollYProgress, [0, 1], ["1%", "-300%"]);

   const x1 = useTransform(scrollYProgress, [0.1, 1], ["0%", "200%"]);
   const x2 = useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]);
   const x3 = useTransform(scrollYProgress, [0.3, 1], ["10%", "70%"]);
   const scale1 = useTransform(scrollYProgress, [0, 1], [1, 2]);
   const scale2 = useTransform(scrollYProgress, [0.2, 1], [1, 1.8]);
   const scale3 = useTransform(scrollYProgress, [0.4, 1], [1, 1.6]);
   const scale4 = useTransform(scrollYProgress, [0.6, 1], [1, 1.4]);

   return (
      <section className={styles.horizontal_scroll} ref={ref}>
         <div className={styles.horizontal_scroll_container}>
            <motion.div
               className={styles.content_wrapper}
               style={{ x: xWrapper }}
            >
               <div className={styles.content}>
                  <motion.h2 style={{ scale: scale1 }}>
                     Great passion for
                  </motion.h2>
                  <motion.div className={styles.image} style={{ x: x1 }}>
                     <Image
                        src="/young_boy_hardware.png"
                        alt=""
                        width={800}
                        height={400}
                     />
                  </motion.div>
               </div>
               <div className={styles.content}>
                  <motion.div className={styles.image} style={{ x: x1 }}>
                     <Image
                        src="/teens_playing_videogames.png"
                        alt=""
                        width={800}
                        height={500}
                     />
                  </motion.div>
                  <motion.h2 style={{ scale: scale2 }}>
                     Web development
                  </motion.h2>
               </div>
               <div className={styles.content}>
                  <motion.h2 style={{ scale: scale1 }}>come from</motion.h2>
               </div>
               <div className={styles.content}>
                  <motion.div
                     className={styles.image}
                     style={{ x: x3, y: "10rem" }}
                  >
                     <Image
                        src="/student_about.png"
                        alt=""
                        width={700}
                        height={500}
                     />
                  </motion.div>
                  <motion.h2 style={{ scale: scale3 }}>curiosity and</motion.h2>
               </div>
               <div className={styles.content}>
                  <motion.h2 style={{ scale: scale4 }}>creativity</motion.h2>
                  <motion.div className={styles.image} style={{ x: x2, y: "-10rem" }}>
                     <Image
                        src="/webdev_about.png"
                        alt=""
                        width={800}
                        height={500}
                     />
                  </motion.div>
               </div>
               <motion.div
                  className={styles.background_svg}
                  style={{ x: backgroundX }}
               >
                  <Image
                     src="/waves-home.svg"
                     alt=""
                     width={400}
                     height={400}
                  />
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
};

export default HorizontalScroll;
