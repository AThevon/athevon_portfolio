"use client";

import { motion, useTime, useTransform } from "framer-motion";
import ReactCurvedText from "react-curved-text";

const SpinningText = () => {
   const time = useTime();
   const rotate = useTransform(time, [0, 25000], [0, 360], { clamp: false });
   return (
      <motion.div style={{ rotate }}>
         <ReactCurvedText
            width={200}
            height={200}
            cx={100}
            cy={100}
            rx={90}
            ry={90}
            reversed={false}
            text="Github • Github • Github • Github • "
            textProps={{
               style: {
                  fontSize: "24px",
                  letterSpacing: "4.2px",
                  userSelect: "none",
                  fontFamily: "var(--third-font)",
               },
            }}
            textPathProps={{"fill": "#f9f9f9"}}
         />
      </motion.div>
   );
};

export default SpinningText;
