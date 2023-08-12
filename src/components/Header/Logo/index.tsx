import styles from "./logo.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export const Logo: React.FC = () => {
   return (
      <motion.div className={styles.logo}>
         <Image
            src="/logo-athevon-rounded.png"
            alt="Adrien Thevon"
            width={60}
            height={60}
         />
      </motion.div>
   );
};

export default Logo;
