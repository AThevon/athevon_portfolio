"use client";

import styles from "./hero.module.scss";
import Image from "next/image";
import HeroSVG from "./SVGs/HeroSVG";
import Button from "@/components/misc/Button";
import { motion } from "framer-motion";
import Ideas from "./SVGs/IdeasSVG";

const Hero = () => {
   return (
      <section className={`${styles.hero_container} container`}>
      <div className={styles.hero}>
         <div className={styles.text}>
            <motion.h2
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0 }}
            >
               Transforming
            </motion.h2>
            <div className={styles.draw_wrapper}>
               <Ideas />
               <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
               >
                  into
               </motion.span>
            </div>
            <div className={styles.image_wrapper}>
               <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: .8, delay: 2.2 }}
               >
                  <Image
                     src="/STUNNING.png"
                     alt="hero"
                     width={500}
                     height={100}
                  />
               </motion.div>
            </div>
            <motion.h3
               initial={{ x: -100, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 3 }}
            >
               Visual Realities
            </motion.h3>
            <motion.div
               initial={{ scale: 0}}
               animate={{ scale: 1}}
               transition={{ duration: 0.5, delay: 3.5 }}
            >
               <Button isLink href="/contact" classCTA>
                  Contact me
               </Button>
            </motion.div>
         </div>
         <div className={styles.images}>
            <div className={styles.image}>
               <HeroSVG />
               <Image
                  src="/yung-dvlpr-nobg.png"
                  alt="hero"
                  width={400}
                  height={400}
               />
            </div>
         </div>
      </div>
      </section>
   );
};

export default Hero;
