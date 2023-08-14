import { PageWrapper } from "@/components/misc/PageWrapper";
import styles from "./home.module.scss";
import Hero from "@/components/page_Home/Hero";

export default function Home() {
   return (
      <PageWrapper>
         <section className={styles.home}>
            <h1>HOME</h1>
            <Hero />
         </section>
      </PageWrapper>
   );
}
