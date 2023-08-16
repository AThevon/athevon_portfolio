"use client";

import styles from "./horizontalScroll.module.scss";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import TiltContainer from "@/components/misc/TiltContainer";

const HorizontalScroll = () => {
   const ref = useRef<HTMLDivElement>(null);
   const { scrollYProgress } = useScroll({
      target: ref,
   });

   const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

   return (
      <section className={styles.horizontal_scroll} ref={ref}>
         <div className={styles.horizontal_scroll_container}>
            <motion.div style={{ x }}>
               <div className={styles.content_wrapper}>
                  {Array(10)
                     .fill(0)
                     .map((_, i) => (
                        <TiltContainer key={i}>
                           <div></div>
                        </TiltContainer>
                     ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default HorizontalScroll;
