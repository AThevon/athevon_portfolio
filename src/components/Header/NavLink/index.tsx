"use client";

import styles from "./navLink.module.scss";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavLinkProps = {
   index: number;
   link: {
      name: string;
      path: string;
      icon?: IconProp;
   };
};

const Navlink = ({ index, link }: NavLinkProps) => {
   const [hoveredIndex, setHoveredIndex] = useState<number>();
   const path = usePathname();

   const iconVariants = {
      initial: {
         backgroundColor: "transparent",
      },
      hovered: {
         backgroundColor: "#555",
         transition: {
            duration: 0.1,
         },
      },
   };

   return (
      <motion.li
         key={link.path}
         className={styles.nav_link}
         whileTap={{ scale: 0.9 }}
         onHoverStart={() => setHoveredIndex(index)}
         onHoverEnd={() => setHoveredIndex(undefined)}
      >
         <Link
            href={link.path}
            className={path === link.path ? styles.active : ""}
         >
            <motion.div
               className={styles.icon}
               variants={iconVariants}
               initial="initial"
               animate={
                  hoveredIndex === index && path != link.path
                     ? "hovered"
                     : "initial"
               }
            >
               <FontAwesomeIcon icon={link.icon as IconProp} />
            </motion.div>

            {path === link.path && (
               <>
                  <motion.span
                     className={styles.overline}
                     layoutId="overline"
                     transition={{ duration: 0.2 }}
                  />
                  <motion.span
                     className={styles.underline}
                     layoutId="underline"
                     transition={{ duration: 0.4 }}
                  >
                     <AnimatePresence>
                        <h3>{link.name}</h3>
                     </AnimatePresence>
                  </motion.span>
               </>
            )}
         </Link>
      </motion.li>
   );
};

export default Navlink;
