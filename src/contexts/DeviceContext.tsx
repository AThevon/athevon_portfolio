"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface DeviceContextType {
   isMobile: boolean;
   isTablet: boolean;
}

interface DeviceContextProviderProps {
   children: React.ReactNode;
}

const DeviceContext = createContext<DeviceContextType>({
   isMobile: false,
   isTablet: false,
});

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
      const viewportWidth = document.documentElement.clientWidth;
      console.log("Viewport width:", viewportWidth);
      setIsMobile(viewportWidth <= 768);
      setIsTablet(viewportWidth > 768 && viewportWidth <= 1024);
      console.log("isMobile:", isMobile);
      console.log("isTablet:", isTablet);
   };

   // Add event listener to handle window resize
   useEffect(() => {
      // Check for client-side rendering
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
