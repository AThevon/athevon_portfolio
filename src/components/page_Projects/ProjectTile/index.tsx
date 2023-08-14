"use client";

import styles from "./projectTile.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectDTO } from "@/types/projectDTO";

type ProjectTileProps = {
   project: ProjectDTO;
   index: number;
};

const ProjectTile = ({ project, index }: ProjectTileProps) => {
   const [hoveredIndex, setHoveredIndex] = useState<number>();

   const router = useRouter();
   const handleClick = (id: number) => {
      router.push(`/projects/${id}`);
   };

   const tileVariants = {
      hidden: {
         opacity: 0,
         y: 100,
      },
      visible: (index: number) => ({
         opacity: 1,
         y: 0,
         transition: {
            delay: 0 + index * 0.1,
            duration: 0.4,
         },
      }),
   };

   const backgroundVariants = {
      default: {
         scale: 1,
         rotate: 0,
      },
      hovered: {
         scale: 1.06,
         rotate: 1,
      },
   };

   const logoVariants = {
      default: {
         left: "50%",
         top: "50%",
         x: "-50%",
         y: "-50%",
         scale: 1,
      },
      hovered: {
         left: "20%",
         top: "20%",
         x: "-50%",
         y: "-50%",
         scale: 0.8,
      },
   };

   const textVariants = {
      default: {
         bottom: "6%",
         opacity: 0,
      },
      hoveredH2: {
         bottom: "18%",
         opacity: 1,
      },
      hoveredP: {
         bottom: "10%",
         opacity: 1,
      },
   };
   return (
      <motion.li
         variants={tileVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{
            once: true,
         }}
         custom={index}
         onHoverStart={() => setHoveredIndex(index)}
         onHoverEnd={() => setHoveredIndex(undefined)}
         onClick={() => handleClick(project.id)}
      >
         <motion.div className={styles.project_tile}>
            <motion.div
               className={styles.background_container}
               variants={backgroundVariants}
               initial="default"
               animate={hoveredIndex === index ? "hovered" : "default"}
               transition={{ duration: 0.2 }}
            >
               <Image
                  className={styles.background}
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
               />
            </motion.div>
            <motion.div
               className={styles.logo_container}
               variants={logoVariants}
               initial="default"
               animate={hoveredIndex === index ? "hovered" : "default"}
               transition={{ duration: 0.4 }}
            >
               <Image
                  className={styles.logo}
                  src={project.logo}
                  alt={project.title}
                  width={300}
                  height={300}
               />
            </motion.div>
            <AnimatePresence>
               {hoveredIndex === index && (
                  <motion.div>
                     <motion.h2
                        variants={textVariants}
                        initial="default"
                        animate="hoveredH2"
                        exit="default"
                        transition={{ duration: 0.3 }}
                     >
                        {project.title}
                     </motion.h2>
                     <motion.p
                        variants={textVariants}
                        initial="default"
                        animate="hoveredP"
                        exit="default"
                        transition={{ duration: 0.6 }}
                     >
                        {project.description}
                     </motion.p>
                  </motion.div>
               )}
            </AnimatePresence>
         </motion.div>
      </motion.li>
   );
};

export default ProjectTile;
