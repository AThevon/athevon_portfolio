"use client";

import styles from "./skills.module.scss";
import { Fragment } from "react";
import { PageWrapper } from "@/components/misc/PageWrapper";
import { skillsData as data } from "@/data/skills";
import SkillCard from "@/components/page_Skills/SkillCard";
import { SkillType } from "@/types/skillsDTO";

const Skills = () => {

  const sortingType = [SkillType.FRONT, SkillType.BACK, SkillType.DB, SkillType.CMS, SkillType.TOOLS, SkillType.WILL_LEARN]

  data.sort((a, b) => sortingType.indexOf(a.type) - sortingType.indexOf(b.type))

  return (
    <PageWrapper yAxis>
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
                gradient={skill.gradient}
              />
            </Fragment>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
