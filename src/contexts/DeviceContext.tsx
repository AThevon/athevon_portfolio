"use client"

import React, { createContext, useContext, useEffect, useState } from "react";

interface DeviceContextType {
   isMobile: boolean;
   isTablet: boolean;
}

interface DeviceContextProviderProps {
   children: React.ReactNode;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDeviceContext = () => {
   const context = useContext(DeviceContext);
   if (!context) {
      throw new Error(
         "useDeviceContext must be used within a DeviceContextProvider"
      );
   }
   return context;
};

export const DeviceContextProvider = ({
   children,
}: DeviceContextProviderProps) => {
   const [isMobile, setIsMobile] = useState(false);
   const [isTablet, setIsTablet] = useState(false);

   const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
   };

   // Add event listener to handle window resize
   useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <DeviceContext.Provider value={{ isMobile, isTablet }}>
         {children}
      </DeviceContext.Provider>
   );
};
