"use client";

import styles from "./header.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faFlaskVial,
   faHouseChimney,
   faCode,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
   const path = usePathname();
   const links = [
      {
         name: "Home",
         path: "/",
      },
      {
         name: "Projects",
         path: "/projects",
      },
      {
         name: "Skills",
         path: "/skills",
      },
      {
         name: "About",
         path: "/about",
      },
      {
         name: "Contact",
         path: "/contact",
      }

   ];

   return (
      <header className={styles.header}>
         <div className={styles.image}>
            <Logo />
         </div>
         <nav>
            <ul>
               {links.map((link) => (
                  <motion.li key={link.path} whileTap={{ scale: 0.9 }}>
                     <Link
                        href={link.path}
                        className={path === link.path ? styles.active : ""}
                     >
                        {path === link.path && (
                           <motion.span
                              className={styles.overline}
                              layoutId="overline"
                              transition={{ duration: 0.3 }}
                           >
                              <AnimatePresence>
                                 {path === "/" ? (
                                    <FontAwesomeIcon icon={faHouseChimney} />
                                 ) : path === "/projects" ? (
                                    <FontAwesomeIcon icon={faFlaskVial} />
                                 ) : path === "/skills" ? (
                                    <FontAwesomeIcon icon={faCode} />
                                 ) : null}
                              </AnimatePresence>
                           </motion.span>
                        )}
                        {link.name}
                     </Link>
                  </motion.li>
               ))}
            </ul>
         </nav>
      </header>
   );
};

export default Header;
