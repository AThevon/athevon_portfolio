"use client";

import { motion } from "framer-motion";
import Header from "../Header";
import GoTop from "../misc/GoTop";

const xAxisVariants = {
   initial: {
      opacity: 0,
      x: 20,
   },
   animate: {
      opacity: 1,
      x: 0,
   },
   exit: {
      opacity: 0,
      x: 20,
   },
};

const yAxisVariants = {
   initial: {
      opacity: 0,
      y: 20,
   },
   animate: {
      opacity: 1,
      y: 0,
   },
   exit: {
      opacity: 0,
      y: 20,
   },
};

export const PageWrapper = ({
   children,
   yAxis,
}: {
   children: React.ReactNode;
   className?: string;
   yAxis?: boolean;
}) => (
   <>
      <Header />
      <motion.main
         variants={yAxis ? yAxisVariants : xAxisVariants}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={{ duration: 0.6 }}
      >
         {children}
      </motion.main>
      <GoTop />
   </>
);
