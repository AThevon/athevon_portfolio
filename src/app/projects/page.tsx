import styles from "./projects.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import { projectsData as data } from "@/data/projects";
import ProjectTile from "@/components/page_Projects/ProjectTile";

const Projects = () => {
   return (
      <PageWrapper yAxis>
         <section className={styles.projects}>
            <div className={styles.projects_hero}>
               <div></div>
            </div>
            <div className={styles.projects_content}>
               <ul>
                  {data.map((project, index) => (
                     <ProjectTile
                        key={project.id}
                        project={project}
                        index={index}
                     />
                  ))}
               </ul>
            </div>
         </section>
      </PageWrapper>
   );
};

export default Projects;
