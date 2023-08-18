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
               <div className={styles.spinning_logo_container}>
                  <SpinningLogo
                     image="/octocat.png"
                     bgColor="#4751b0"
                     href="https://github.com/AThevon"
                     alt="Github logo"
                     isLink
                     text="Github • Github • Github • Github • "
                     letterSpacing="4.2px"
                  />
               </div>
            </div>
         </section>
         <Indexes />
      </PageWrapper>
   );
}
