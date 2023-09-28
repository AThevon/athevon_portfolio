import styles from "./about.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import HorizontalScroll from "@/components/page_About/HorizontalScroll";
import ModalAbout from "@/components/page_About/ModalAbout";

const About = () => {
   return (
      <PageWrapper>
         <section className={styles.about}>
            <HorizontalScroll />
            <div className={styles.about_content}>
               <ModalAbout />
            </div>
         </section>
      </PageWrapper>
   );
};

export default About;
