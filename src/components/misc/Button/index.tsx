"use client";

import styles from "./button.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type ButtonProps = {
   type?: "button" | "submit" | "reset" | undefined;
   children?: React.ReactNode;
   className?: string;
   classButton?: boolean;
   classCTA?: boolean;
   isLink?: boolean;
   href?: Url;
};

const Button = ({
   type,
   children,
   className,
   classButton,
   classCTA,
   isLink,
   href,
}: ButtonProps) => {
   if (isLink && href) {
      return (
         <Link href={href} style={{cursor: "none"}}>
            <motion.button
               type={type}
               className={`${className} ${classButton ? styles.button : ""} ${
                  classCTA ? styles.cta : ""
               }`}
               whileTap={{ scale: 0.94 }}
               whileHover={{ scale: 1.05 }}
            >
               {children}
            </motion.button>
         </Link>
      );
   } else {
      return (
         <motion.button
            type={type}
            className={`${className} ${classButton ? styles.button : ""} ${
               classCTA ? styles.cta : ""
            }`}
            whileTap={{ scale: 0.94 }}
            whileHover={{ scale: 1.04 }}
         >
            {children}
         </motion.button>
      );
   }
};

export default Button;
