"use client";
import { PageWrapper } from "@/components/PageWrapper";
import styles from "./home.module.scss";
import Hero from "@/components/Hero";

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
