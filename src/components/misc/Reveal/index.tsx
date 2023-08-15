import { useEffect, useRef } from "react";
import { useInView, motion, useAnimation } from "framer-motion";

type RevealProps = {
   children?: React.ReactNode;
   width?: "fit-content" | "100%";
};

const Reveal = ({ children, width }: RevealProps) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   const mainControls = useAnimation();
   const slideControls = useAnimation();

   useEffect(() => {
      if (isInView) {
         mainControls.start("visible");
         slideControls.start("visible");
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isInView]);

   return (
      <div style={{ position: "relative", width, overflow: "hidden" }}>
         <motion.div
            variants={{
               hidden: {
                  opacity: 0,
                  y: 75,
               },
               visible: {
                  opacity: 1,
                  y: 0,
               },
            }}
            initial="hidden"
            animate="visible"
            transition={{
               duration: 0.5,
               delay: 0.25,
            }}
         >
            {children}
         </motion.div>
         <motion.div
            variants={{
               hidden: {
                  left: 0,
               },
               visible: {
                  left: "100%",
               },
            }}
            initial="hidden"
            animate="visible"
            transition={{
               duration: 0.5,
               ease: "easeIn",
            }}
            style={{
               position: "absolute",
               top: 4,
               bottom: 4,
               left: 0,
               right: 0,
               background: "#f9f9f9",
               // borderRadius: "15px",
               zIndex: 10,
            }}
         />
      </div>
   );
};

export default Reveal;
