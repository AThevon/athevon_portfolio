"use client";

import Image from "next/image";
import styles from "./skillCard.module.scss";
import TiltContainer from "@/components/misc/TiltContainer";
import { motion } from "framer-motion";
import { SkillType } from "@/types/skillsDTO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBarChart,
   faCode,
   faDatabase,
   faGraduationCap,
   faRoad,
   faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

interface SkillCardProps {
   type: SkillType;
   logo: string;
   name: string;
   description: string;
   affinity?: string;
   gradient?: string;
}

const skillCard = ({
   type,
   logo,
   name,
   description,
   affinity,
   gradient,
}: SkillCardProps) => {
   const findImgType = (type: SkillType) => {
      switch (type) {
         case SkillType.FRONT:
            return faCode;
         case SkillType.BACK:
            return faRoad;
         case SkillType.DB:
            return faDatabase;
         case SkillType.CMS:
            return faBarChart;
         case SkillType.TOOLS:
            return faScrewdriverWrench;
         case SkillType.WILL_LEARN:
            return faGraduationCap;
         default:
            return;
      }
   };

   return (
      <TiltContainer mass={4} tension={300} friction={20} scale={1.02}>
         <div className={styles.skillCard} style={{backgroundImage: gradient}}>
            <Image src={logo} alt={name} width={100} height={100} />
            <h3>{name}</h3>
            {/* <p>{description}</p> */}
            <p>{affinity ? affinity : ""}</p>
            <FontAwesomeIcon
               className={styles.skillType}
               icon={findImgType(type) || faCode}
            />
         </div>
      </TiltContainer>
   );
};

export default skillCard;
