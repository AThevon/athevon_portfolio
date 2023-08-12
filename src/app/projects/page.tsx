"use client";

import styles from "./projects.module.scss";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PageWrapper } from "@/components/PageWrapper";
import { useRouter } from "next/navigation";
import { projectsData as data } from "@/data/projects";

const Projects = () => {
   const [hoveredIndex, setHoveredIndex] = useState<number>();

   const router = useRouter();


   const logoVariants = {
      default: {
         left: "50%",
         top: "50%",
         x: "-50%",
         y: "-50%",
         scale: 1,
      },
      hovered: {
         left: "25%",
         top: "25%",
         x: "-50%",
         y: "-50%",
         scale: 0.7,
      },
   };

   const textVariants = {
         default: {
            bottom: "6%",
            opacity: 0,
         },
         hoveredH2: {
            bottom: "20%",
            opacity: 1,
         },
         hoveredP: {
            bottom: "10%",
            opacity: 1,
         },
      }

   const handleClick = (id: number) => {
      router.push(`/projects/${id}`);
   };


   return (
      <PageWrapper yAxis>
         <section className={styles.projects}>
            <div className={styles.projects_content}>
               <ul>
                  {data.map((project, index) => (
                     <li
                        key={index}
                        className={styles.projectItem}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(undefined)}
                        onClick={() => handleClick(project.id)}
                     >
                        <Image
                           className={styles.background}
                           src={project.image}
                           alt={project.title}
                           width={600}
                           height={400}
                        />
                        <motion.div
                           className={styles.logo_container}
                           variants={logoVariants}
                           initial="default"
                           animate={
                              hoveredIndex === index ? "hovered" : "default"
                           }
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
                     </li>
                  ))}
                  <li>
                     <h3>Coming Soon</h3>
                  </li>
               </ul>
            </div>
         </section>
      </PageWrapper>
   );
};

export default Projects;
