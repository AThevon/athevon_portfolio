import styles from "./works.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import { worksData as data } from "@/data/works";
import WorksTile from "@/components/page_Works/WorksTile";
import HeroSentence from "@/components/page_Works/HeroSentence";

const Works = () => {
   return (
      <PageWrapper yAxis>
         <section className={styles.works}>
            <div className={styles.works_hero}>
               <HeroSentence />
            </div>
            <div className={styles.works_content}>
               <ul>
                  {data.map((work, index) => (
                     <WorksTile key={work.id} work={work} index={index} />
                  ))}
               </ul>
            </div>
            <div className={styles.works_footer}>
               <p>More coming soon...</p>
            </div>
         </section>
      </PageWrapper>
   );
};

export default Works;
