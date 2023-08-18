"use client";

import { motion, useTime, useTransform } from "framer-motion";
import ReactCurvedText from "react-curved-text";

type SpinningTextProps = {
   text: string;
   letterSpacing: string;
};

const SpinningText = ({ text, letterSpacing }: SpinningTextProps) => {
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
            text={text}
            textProps={{
               style: {
                  fontSize: "24px",
                  letterSpacing: letterSpacing,
                  userSelect: "none",
                  fontFamily: "var(--third-font)",
               },
            }}
            textPathProps={{ fill: "#f9f9f9" }}
         />
      </motion.div>
   );
};

export default SpinningText;
