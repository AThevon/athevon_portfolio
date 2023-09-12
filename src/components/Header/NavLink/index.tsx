"use client";

import styles from "./navLink.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavLinkProps = {
   link: {
      name: string;
      path: string;
      icon: IconProp;
   };
};

const Navlink = ({ link }: NavLinkProps) => {
   const path = usePathname();

   return (
      <motion.li
         key={link.path}
         className={styles.nav_link}
         whileTap={{ scale: 0.9 }}
      >
         <Link
            href={link.path}
            className={path === link.path ? styles.active : ""}
         >
            <motion.div className={path != link.path ? styles.icon : ""}>
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
