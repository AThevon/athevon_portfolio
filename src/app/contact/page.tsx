"use client";

import styles from "./contact.module.scss";
import { PageWrapper } from "@/components/misc/PageWrapper";
import SpinningLogo from "@/components/misc/SpinningLogo";
import ContactForm from "@/components/page_Contact/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
   return (
      <PageWrapper>
         <section className={styles.contact}>
            <motion.div
               className={styles.networks}
               initial={{ scale: 0.2, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{
                  type: "spring",
                  mass: 1,
                  damping: 18,
                  stiffness: 100,
                  delay: 2,
               }}
            >
               <SpinningLogo
                  image="/octocat.png"
                  bgColor="#4751b0"
                  href="https://github.com/AThevon"
                  alt="Github logo"
                  isLink
                  text="Github • Github • Github • Github • "
                  letterSpacing="4.2px"
               />
               <SpinningLogo
                  image="/linkedin_logo.png"
                  bgColor="#4CB1FF"
                  href="https://www.linkedin.com/in/adrien-thevon-74b134100/"
                  alt="Linkedin logo"
                  isLink
                  text="Linkedin • Linkedin • Linkedin • "
                  letterSpacing="5.8px"
               />
               <SpinningLogo
                  image="/briefcase_logo.png"
                  bgColor="#ffb429"
                  href="/cv_final.pdf"
                  alt="Resume logo"
                  isPDF
                  text="Resume • Resume • Resume • Resume • "
                  letterSpacing="3.4px"
               />
            </motion.div>
            <ContactForm />
         </section>
      </PageWrapper>
   );
};

export default Contact;
