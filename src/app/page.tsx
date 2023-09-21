import SpinningLogo from "@/components/misc/SpinningLogo";
import styles from "./home.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import Hero from "@/components/page_Home/Hero";
import Presentation from "@/components/page_Home/Presentation";
import Shape from "@/components/page_Home/Shape";
import Indexes from "@/components/page_Home/Indexes";

export default function Home() {
   return (
      <PageWrapper>
         <Hero />
         <section className={styles.home_content}>
            <div className={styles.content_container}>
               <Shape />
               <Presentation />
            </div>
               <div className={styles.content_container}>
                  <Shape isLeft />
               </div>
            
         </section>
         <Indexes />
      </PageWrapper>
   );
}
