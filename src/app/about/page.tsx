import styles from "./about.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import HorizontalScroll from "@/components/page_About/HorizontalScroll";
import ModalAbout from "@/components/page_About/ModalAbout";
import Image from "next/image";

const About = () => {
   return (
      <PageWrapper>
         <section className={styles.about}>
            <HorizontalScroll />
            <div className={styles.about_content}>
               <Image
                  className={styles.bg_reverse}
                  src="/waves-home.svg"
                  alt=""
                  width={400}
                  height={400}
               />
               <ModalAbout />
            </div>
         </section>
      </PageWrapper>
   );
};

export default About;
