"use client";

import styles from "./presentation.module.scss";

import { motion } from "framer-motion";

const Presentation = () => {
   return (
      <motion.div
         className={styles.presentation}
         initial={{ opacity: 0, y: 100 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{
            once: true,
         }}
         transition={{ delay: 0.6, duration: 0.5 }}
      >
         <h2>Hi! I'm Adrien</h2>
         <p>
            Indeed, I have always been captivated by computer science as a whole
            since my youngest age.
         </p>
         <p>
            After a transition to the world of web development and programming,
            my new job is now the perfect fusion of two of my passions: IT and
            puzzle solving.
         </p>
         <p>
            From front-end interface development to database management and
            back-end interactions, through a multitude of tasks as diverse as
            they come, I appreciate the knowledge that the Internet domain
            brings to me and I am ready to take up all the challenges that will
            come my way.
         </p>
      </motion.div>
   );
};

export default Presentation;
