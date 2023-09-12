"use client";

import styles from "./heroSentence.module.scss";
import { motion } from "framer-motion";

const HeroSentence = () => {
   const heroText = [
      "Crafting ",
      "web ",
      "experiences ",
      "that ",
      "stand ",
      "out.",
   ];

   const textVariants = {
      hidden: {
         opacity: 0.5,
         y: 0,
         skewY: 0,
      },
      visible: {
         opacity: 1,
         y: -5,
         skewY: 0,
      },
      perspective: {
         opacity: 1,
         y: -5,
         skewY: -7,
      },
   };

   return (
      <div className={styles.sentence_works}>
         <h2>
            {heroText.map((word, index) => (
               <motion.div
                  key={index}
                  className={styles.word}
                  variants={textVariants}
                  initial="hidden"
                  whileHover={index === 2 ? "perspective" : "visible"}
               >
                  <span>{word}</span>
               </motion.div>
            ))}
         </h2>
      </div>
   );
};

export default HeroSentence;
