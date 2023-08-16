import styles from "./home.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import Hero from "@/components/page_Home/Hero";
import HorizontalScroll from "@/components/page_Home/HorizontalScroll";

export default function Home() {
   return (
      <PageWrapper>
         <Hero />
         <HorizontalScroll />
      </PageWrapper>
   );
}
