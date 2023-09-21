"use client";

import styles from "./burgerMenu.module.scss";
import { useState } from "react";
import { pages as data } from "@/data/pages";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const BurgerMenu = () => {
   const [isOpen, setIsOpen] = useState(false);

   const containerVariants = {
      initial: {
         x: "100%",
      },
      enter: {
         x: 0,
         transition: {
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
         },
      },
      exit: {
         x: "100%",
         transition: {
            duration: 0.6,
            ease: [0.76, 0, 0.24, 1],
         },
      },
   };

   const textVariants = {
      initial: {
         x: "50%",
      },
      enter: {
         x: 0,
         transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
         },
      },
      exit: {
         x: "50%",
         transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
         },
      },
   };

   return (
      <div className={styles.burger}>
         <button
            className={isOpen ? styles.open : ""}
            onClick={() => setIsOpen(!isOpen)}
         ></button>

         <AnimatePresence mode="wait">
            {isOpen && (
               <motion.div
                  className={`${styles.nav_container} ${
                     isOpen ? styles.open : ""
                  }`}
                  variants={containerVariants}
                  initial="initial"
                  animate="enter"
                  exit="exit"
               >
                  <motion.ul
                     className={styles.nav}
                     variants={textVariants}
                     initial="initial"
                     animate="enter"
                     exit="exit"
                  >
                     {data.map((link, index) => (
                        <li key={index}>
                           <Link href={link.path}>{link.name}</Link>
                        </li>
                     ))}
                  </motion.ul>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default BurgerMenu;
