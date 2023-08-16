"use client";

import styles from "./logo.module.scss";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Logo = () => {
   const [isClicked, setIsClicked] = useState(false);

   const router = useRouter();
   const pathname = usePathname();

   const handleTap = () => {
      setTimeout(() => {
         router.push("/");
      }, 300);
   };

   return (
      <motion.div
         className={styles.logo}
         initial={{ rotate: 0, x: "-50%", y: "-50%" }}
         whileHover={{ rotate: isClicked ? 0 : 45 }}
         whileTap={{ rotate: -45 }}
         onTapStart={() => setIsClicked(pathname === "/" ? false : true)}
         onTapCancel={() => setIsClicked(false)}
         onTap={handleTap}
         layout
      >
         <motion.div
            animate={{ rotate: isClicked ? 0 : [0, 45, 0] }}
            transition={{ duration: 0.4 }}
         >
            <Image
               src="/logo-athevon-transparent.png"
               alt="Adrien Thevon"
               width={100}
               height={100}
               draggable={false}
            />
         </motion.div>
      </motion.div>
   );
};

export default Logo;
