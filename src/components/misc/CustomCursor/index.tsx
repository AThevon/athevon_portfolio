"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { motion, useTime, useTransform } from "framer-motion";
import React from "react";
import styles from "./customCursor.module.scss";

type CursorType = {
   children: React.ReactNode;
};

type CursorContextType = {
   cursorType: string;
   setCursorType: React.Dispatch<React.SetStateAction<string>>;
};

// Cursor Context
const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<CursorType> = ({ children }) => {
   const [cursorType, setCursorType] = useState<string>("default");

   return (
      <CursorContext.Provider value={{ cursorType, setCursorType }}>
         {children}
      </CursorContext.Provider>
   );
};

export const useCursor = (): CursorContextType => {
   const context = useContext(CursorContext);
   if (!context) {
      throw new Error("useCursor must be used within a CursorProvider");
   }
   return context;
};

// CustomCursor Component
export const CustomCursor: React.FC = () => {
   const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
   });
   const { cursorType } = useCursor();

   useEffect(() => {
      const onMouseMove = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
   }, []);

   const time = useTime();
   const rotate = useTransform(time, [0, 25000], [0, 360], { clamp: false });

   const cursorVariants = {
      default: {
         x: mousePosition.x - 16,
         y: mousePosition.y - 16,
         borderRadius: "50%",
      },
      clicked: {
         x: mousePosition.x - 16,
         y: mousePosition.y - 16,
         borderRadius: 0,
      },
   };

   return (
      <motion.div
         className={styles.cursor}
         // @ts-ignore
         variants={cursorVariants}
         animate={cursorType}
         style={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            rotate: rotate,
         }}
         transition={{ ease: "linear", x: { duration: 0 }, y: { duration: 0 } }}
      />
   );
};

export default CustomCursor;
