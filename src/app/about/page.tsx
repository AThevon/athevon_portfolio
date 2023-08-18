import styles from "./about.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import HorizontalScroll from "@/components/page_About/HorizontalScroll";

const About = () => {
   return (
      <PageWrapper>
         <section className={styles.about}></section>

         <HorizontalScroll />
      </PageWrapper>
   );
};

export default About;
