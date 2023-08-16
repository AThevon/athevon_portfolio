import { PageWrapper } from "@/components/misc/PageWrapper";
import styles from "./home.module.scss";
import Hero from "@/components/page_Home/Hero";
import HorizontalScroll from "@/components/page_Home/HorizontalScroll";

export default function Home() {
   return (
      <PageWrapper>
         <section className={`${styles.hero} container`}>
            <Hero />
         </section>
         <section className={`${styles.horizontal_scroll}`}>
            <HorizontalScroll/>
         </section>
      </PageWrapper>
   );
}
