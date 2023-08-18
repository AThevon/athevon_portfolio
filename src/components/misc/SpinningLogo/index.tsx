"use client";

import styles from "./spinningLogo.module.scss";
import Image from "next/image";
import SpinningText from "@/components/misc/SpinningLogo/SpinningText";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

type SpinningLogoProps = {
   image: string;
   bgColor: string;
   href: string;
   alt: string;
   isLink?: boolean;
   onClick?: () => void;
   text: string;
   letterSpacing: string;
};

const SpinningLogo = ({ image, bgColor, href, alt, isLink, onClick, text, letterSpacing }: SpinningLogoProps) => {
   const [isHovered, setIsHovered] = useState(false);

   return (
      <motion.div
         className={styles.spinning_logo}
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         viewport={{
            once: true,
         }}
         transition={{
            delay: 0.2,
            duration: 1,
            type: "spring",
            mass: 2,
            stiffness: 200,
            damping: 20,
         }}
      >
         <SpinningText 
            text={text}
            letterSpacing={letterSpacing}
         />
         <motion.div
            className={styles.image}
            initial={{ scale: 0.75 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.75 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            transition={{
               type: "spring",
               mass: 2,
               stiffness: 460,
               damping: 20,
               duration: 1,
            }}
         >
            {isLink ? (
            <Link href={href} target="_blank">
               <Image src={image} alt={alt} width={200} height={200} />
            </Link>
            ) : (
               <Image src={image} alt={alt} width={200} height={200} onClick={onClick}/>
            )}
         </motion.div>
         <AnimatePresence>
            {isHovered && (
               <motion.div
                  className={styles.hovered}
                  style={{ backgroundColor: bgColor }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
               ></motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
};

export default SpinningLogo;
