import Button from "@/components/misc/Button";
import styles from "./modalAbout.module.scss";
import Image from "next/image";
import Link from "next/link";

const ModalAbout = () => {
   return (
      <section className={styles.modal_about}>
         <h3>Biography</h3>
         <div className={styles.main_container}>
            <div className={styles.left_container}>
               <Image
                  src="/profilepicture.jpg"
                  alt="Athevon logo"
                  width={300}
                  height={300}
               />
               <div className={styles.presentation_content}>
                  <h4>Name</h4>
                  <p>Adrien Thevon</p>
               </div>
               <div className={styles.presentation_content}>
                  <h4>Age</h4>
                  <p>27</p>
               </div>
               <div className={styles.presentation_content}>
                  <h4>Location</h4>
                  <p>
                     Tours, France
                     <span>
                        <Image
                           src="/Flag_of_France.svg"
                           alt=""
                           width={30}
                           height={30}
                        />
                     </span>
                  </p>
               </div>
               <div className={styles.presentation_content}>
                  <Button isLink href={"/contact"} classCTA>
                     Contact me
                  </Button>
                  <Button classCTA>
                     <Link href="/cv_final.pdf" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                           Get my resume
                        </a>
                     </Link>
                  </Button>
               </div>
            </div>
            <div className={styles.right_container}>
               <div className={styles.hobbies_container}>
                  <h4>Hobbies</h4>
                  <ul>
                     <li>
                        <Image
                           src="/logo-athevon.png"
                           alt="Athevon logo"
                           width={50}
                           height={50}
                        />
                     </li>
                     <li>
                        <Image
                           src="/logo-athevon.png"
                           alt="Athevon logo"
                           width={50}
                           height={50}
                        />
                     </li>
                     <li>
                        <Image
                           src="/logo-athevon.png"
                           alt="Athevon logo"
                           width={50}
                           height={50}
                        />
                     </li>
                     <li>
                        <Image
                           src="/logo-athevon.png"
                           alt="Athevon logo"
                           width={50}
                           height={50}
                        />
                     </li>
                     <li>
                        <Image
                           src="/icon-boxe.png"
                           alt="Boxe logo"
                           width={50}
                           height={50}
                        />
                     </li>
                  </ul>
               </div>
               <div className={styles.exp_container}>
                  <h4>Experiences</h4>
                  <ul>
                     <li>
                        <h4>2010</h4>
                        <p>
                           I started high school in Lycée Léonard de Vinci in
                           Amboise (France) in a technical science section.
                        </p>
                     </li>
                     <li>
                        <h4>2014</h4>
                        <p>
                           I graduated with a Baccalauréat (French high school
                           diploma).
                        </p>
                     </li>
                     <li>
                        <h4>2015</h4>
                        <p>
                           I left the university of Tours (France) where I was
                           studying English and Spanish (LEA) to enter the
                           workforce.
                        </p>
                     </li>
                     <li>
                        <h4>2016</h4>
                        <p>
                           In 2016, I joined La Poste Group and remained there
                           for three and a half years.
                        </p>
                     </li>
                     <li>
                        <h4>2019</h4>
                        <p>
                           I left La Poste to enter the field of sales as a
                           commercial representative (VRP) with a focus on
                           selling windows and doors for KparK.
                        </p>
                     </li>
                     <li>
                        <h4>2022</h4>
                        <p>
                           I seriously embarked on a career in computer
                           development by enrolling at the CEFIM training center
                           in Tours.
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ModalAbout;
