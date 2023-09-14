import Image from "next/image";
import styles from "./skillCard.module.scss";
import TiltContainer from "@/components/misc/TiltContainer";

interface SkillCardProps {
   type: string;
   logo: string;
   name: string;
   description: string;
   affinity?: string;
}

const skillCard = ({
   type,
   logo,
   name,
   description,
   affinity,
}: SkillCardProps) => {
   return (
      <TiltContainer>
         <div className={styles.skillCard}>
            <Image src={logo} alt={name} width={100} height={100} />
            <h3>{name}</h3>
            <h4>{type}</h4>
            <p>{description}</p>
            <p>{affinity ? affinity : ""}</p>
         </div>
      </TiltContainer>
   );
};

export default skillCard;
