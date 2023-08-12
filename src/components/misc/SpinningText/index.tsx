import styles from "./spinningText.module.scss";
import { motion, useTime, useTransform } from "framer-motion";
import ReactCurvedText from "react-curved-text";

const SpinningText: React.FC = () => {
   const time = useTime();
   const rotate = useTransform(time, [0, 25000], [0, 360], { clamp: false });
   return (
      <motion.div style={{ rotate }}>
         <ReactCurvedText
            width={200}
            height={200}
            cx={100}
            cy={100}
            rx={85}
            ry={85}
            reversed={false}
            text="Adrien Thevon • Web Developer • "
            textProps={{
               style: {
                  fontSize: "24px",
                  letterSpacing: "4.2px",
                  userSelect: "none",
               },
            }}
         />
      </motion.div>
   );
};

export default SpinningText;
