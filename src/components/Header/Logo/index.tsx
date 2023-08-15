import Image from "next/image";
import { motion } from "framer-motion";

const Logo = () => {
   return (
      <motion.div animate={{ rotate: [0, 45, 0]}} transition={{ duration: 0.4 }}>
         <Image
            src="/logo-athevon-transparent.png"
            alt="Adrien Thevon"
            width={100}
            height={100}
         />
      </motion.div>
   );
};

export default Logo;
