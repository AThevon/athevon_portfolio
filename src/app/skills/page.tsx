import styles from "./skills.module.scss";
import { Fragment } from "react";
import { PageWrapper } from "@/components/misc/PageWrapper";
import { skillsData as data } from "@/data/skills";
import SkillCard from "@/components/page_Skills/SkillCard";

const Skills = () => {
   return (
      <PageWrapper>
         <section className={styles.skills}>
            <div className={styles.skillsContainer}>
               {data.map((skill, index) => (
                  <Fragment key={index}>
                     <SkillCard
                        type={skill.type}
                        logo={skill.logo}
                        name={skill.name}
                        description={skill.description}
                        affinity={skill.affinity}
                     />
                  </Fragment>
               ))}
            </div>
         </section>
      </PageWrapper>
   );
};

export default Skills;
