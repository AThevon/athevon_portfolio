"use client";

import styles from "./heroSentence.module.scss";
import { motion } from "framer-motion";

const HeroSentence = () => {
   const heroText = [
      "Crafting ",
      "digital ",
      "experiences ",
      "that ",
      "blend ",
      "innovation, ",
      "functionality, ",
      "and ",
      "elegance ",
      "into ",
      "every ",
      "line ",
      "of ",
      "code.",
   ];

   return (
      <div className={styles.sentence_works}>
         <h2>
            {heroText.map((word, index) => (
               <motion.div
                  key={index}
                  className={styles.word}
                  initial={{ opacity: 0.5, y: 0 }}
                  whileHover={{ opacity: 1, y: -5 }}
               >
                  <span>{word}</span>
               </motion.div>
            ))}
         </h2>
      </div>
   );
};

export default HeroSentence;
