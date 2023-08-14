"use client";

import styles from "./hero.module.scss";
import Image from "next/image";
import SVG from "./SVG";
import Button from "@/components/misc/Button";
import TiltContainer from "@/components/misc/TiltContainer";

const Hero = () => {
   return (
      <section className={styles.hero}>
         <div className={styles.text}>
            <h3>Fullstack</h3>
            <h2>
               Web <span>Developer</span>
            </h2>
            <Button isLink href="/contact">
               Contact me
            </Button>
         </div>
         <div className={styles.images}>
            <div className={styles.image}>
               <SVG />
               <Image
                  src="/yung-dvlpr-nobg.png"
                  alt="hero"
                  width={400}
                  height={400}
               />
            </div>
         </div>
      </section>
   );
};

export default Hero;
