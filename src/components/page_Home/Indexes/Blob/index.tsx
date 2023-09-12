import styles from "./blob.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import BlobSVG from "./BlobSVG";

type BlobProps = {
   delay: number;
   indexBlob: number;
   image: string;
   alt: string;
};

const Blob = ({ delay, indexBlob, image, alt }: BlobProps) => {
   return (
      <motion.div
         className={styles.blob}
         initial={{ scale: 0, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         transition={{
            scale: {
               delay: delay,
               duration: 0.5,
               type: "spring",
               mass: 2,
               stiffness: 200,
               damping: 20,
            },
            opacity: { delay: 0.2, duration: 0.2 },
         }}
      >
         <BlobSVG indexBlob={indexBlob} />
         <motion.div className={styles.mask}>
            <Image src={image} alt={alt} width={400} height={300} />
         </motion.div>
      </motion.div>
   );
};

export default Blob;
