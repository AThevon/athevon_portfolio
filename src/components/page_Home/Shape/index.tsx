"use client";

import styles from "./shape.module.scss";
import { motion } from "framer-motion";

type RoundShapeProps = {
   isLeft?: boolean;
};

const Shape = ({ isLeft }: RoundShapeProps) => {
   const shapeVariants = {
      initialLeft: {
         left: "-50%",
         right: "unset",
      },

      animateLeft: {
         left: "-30%",
         right: "unset",
         transition: {
            delay: 0.5,
            duration: 0.8,
         },
      },
      initialRight: {
         right: "-100%",
         left: "unset",
      },
      animateRight: {
         right: "-70%",
         left: "unset",
         transition: {
            delay: 0.5,
            duration: 0.5,
         },
      },
   };

   return (
      <motion.div
         className={styles.shape_wrapper}
         variants={shapeVariants}
         initial={"initial" + (isLeft ? "Left" : "Right")}
         whileInView={"animate" + (isLeft ? "Left" : "Right")}
         viewport={{
            once: true,
         }}
      >
         <div
            className={`${styles.shape} ${
               isLeft ? styles.left : styles.right
            }`}
         />
      </motion.div>
   );
};

export default Shape;
