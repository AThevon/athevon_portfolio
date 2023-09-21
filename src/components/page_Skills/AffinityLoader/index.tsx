import styles from "./affinityLoader.module.scss";

interface AffinityLoaderProps {
   affinity: string;
   gradient: string | undefined;
}

const AffinityLoader = ({ affinity, gradient }: AffinityLoaderProps) => {
   // remove the % sign from the affinity string
   const nbAffinity = affinity.slice(0, -1);
   // set the pourcent nb to a float value from 1 to 10 (10 being the max)
   let affinityValue = (Number(nbAffinity) / 10).toFixed(1);

   // if value end by .0 (ex: 5.0), remove the .0
   if (affinityValue.slice(-2) === ".0") {
      console.log("remove .0");
      affinityValue = affinityValue.slice(0, -2);
   }

   return (
      <div className={styles.affinityLoader_container}>
         <div className={styles.affinityLoader}>
            <div
               className={styles.affinityLoader_progress}
               style={{ height: affinity, backgroundImage: gradient }}
            ></div>
         </div>
         <div
            className={styles.affinityLoader_value}
         >{`${affinityValue}/10`}</div>
      </div>
   );
};

export default AffinityLoader;
