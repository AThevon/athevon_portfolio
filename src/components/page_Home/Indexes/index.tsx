"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./indexes.module.scss";
import { pages } from "@/data/pages";
import Image from "next/image";
import Link from "next/link";

const Indexes = () => {
   const [hovered, setHovered] = useState<number | null>(null);
   const data = pages.slice(1);

   return (
      <section className={styles.indexes}>
         <motion.h3
            className={styles.title}
            initial={{ x: -180, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
               opacity: { delay: 0.5, duration: 0.2 },
               x: { delay: 0.5, duration: 0.5 },
            }}
         >
            Index
         </motion.h3>
         <ul className={styles.indexes_container}>
            <AnimatePresence>
               {data.map((page, index) => (
                  <motion.li
                     key={index}
                     initial={{ scale: 0, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1, y: [0, 20, 0] }}
                     whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 8px 20px 0 rgba(0, 0, 0, 0.5)",
                     }}
                     whileTap={{ scale: 0.9 }}
                     transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                        mass: 2,
                        y: {
                           type: "tween",
                           repeat: Infinity,
                           delay: index * 1,
                           repeatType: "mirror",
                           duration: 6,
                        },
                     }}
                     onHoverStart={() => setHovered(index)}
                     onHoverEnd={() => setHovered(null)}
                  >
                     <Link key={index} href={page.path}>
                        {hovered === index && (
                           <>
                              <motion.div
                                 className={styles.image_container}
                                 initial={{ scale: 0, opacity: 0 }}
                                 animate={{ scale: 1, opacity: 1 }}
                                 exit={{ scale: 0, opacity: 0 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 35,
                                    mass: 1,
                                 }}
                              >
                                 <Image
                                    src={page.background}
                                    alt={page.name}
                                    width={400}
                                    height={400}
                                 />
                              </motion.div>
                              <motion.p
                                 className={styles.name}
                                 initial={{ x: -100, opacity: 0 }}
                                 animate={{ x: 0, opacity: 1 }}
                                 transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 35,
                                    mass: 1,
                                 }}
                              >
                                 {page.name}
                              </motion.p>
                           </>
                        )}
                     </Link>
                  </motion.li>
               ))}
            </AnimatePresence>
         </ul>
      </section>
   );
};

export default Indexes;
