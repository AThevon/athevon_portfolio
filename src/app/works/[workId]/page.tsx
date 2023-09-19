"use client";

import styles from "./work.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import { worksData as data } from "@/data/works";
import { WorksDTO } from "@/types/worksDTO";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleCheck,
   faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Work = () => {
   const params = useParams();

   const work = data.find(
      (work: WorksDTO) => work.id.toString() === params.workId
   );

   return (
      <PageWrapper yAxis>
         <div className={styles.work}>
            {work && (
               <>
                  <div className={styles.work_header}>
                     <Image
                        src={work.logo}
                        alt={work.title}
                        width={200}
                        height={200}
                     />
                     <span style={{ backgroundColor: work.color }}></span>
                     <div className={styles.work_header_text}>
                        <h1>{work.title}</h1>
                        <p>{work.description}</p>
                     </div>
                     <div className={styles.work_header_links}>
                        {work.available ? (
                           <FontAwesomeIcon
                              icon={faCircleCheck}
                              style={{ color: "#80BB70" }}
                           />
                        ) : (
                           <FontAwesomeIcon
                              icon={faTriangleExclamation}
                              style={{ color: "#F9E784" }}
                           />
                        )}
                        <Link
                           href={work.link}
                           target="_blank"
                           style={{
                              backgroundColor: work.available
                                 ? work.color
                                 : "#474747",
                           }}
                           className={
                              !work.available ? styles.disabled : styles.enabled
                           }
                           onClick={(e) =>
                              !work.available ? e.preventDefault() : null
                           }
                        >
                           <span>Visit</span>
                        </Link>
                     </div>
                  </div>
                  <div className={styles.work_content}>
                     <div className={styles.work_content_overview}>
                        <Image
                           src={work.capture}
                           alt={work.title}
                           width={1200}
                           height={600}
                        />
                     </div>
                     <div className={styles.work_content_details}>
                        <h2>Techs used</h2>
                        <ul>
                           {work.techs.map((tech, index) => (
                              <li key={index}>
                                 <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    width={80}
                                    height={80}
                                 />
                                 <span>{tech.name}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </>
            )}
         </div>
      </PageWrapper>
   );
};

export default Work;
