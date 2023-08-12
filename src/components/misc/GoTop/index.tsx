"use client";

import styles from "./goTop.module.scss";
import { useState } from "react";
import {
   useScroll,
   useMotionValueEvent,
   motion,
   AnimatePresence,
} from "framer-motion";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoTop = () => {
   const [scrollYAtTop, setScrollYAtTop] = useState(true);
   const { scrollY } = useScroll();
   useMotionValueEvent(scrollY, "change", (latest) => {
      latest > 240 ? setScrollYAtTop(false) : setScrollYAtTop(true);
   });

   return (
      <AnimatePresence>
         {!scrollYAtTop && (
            <motion.button
               className={styles.buttonGoTop}
               initial={{ x: 150 }}
               animate={{ x: 0 }}
               exit={{ x: 150 }}
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
               }}
            >
               <FontAwesomeIcon icon={faArrowTurnUp} style={{ fontSize: 20 }} />
            </motion.button>
         )}
      </AnimatePresence>
   );
};

export default GoTop;
