import "./styles/reset.scss";
import "./styles/globals.scss";
import "./styles/variables.scss";

import type { Metadata } from "next";

import { Changa, Permanent_Marker, Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

const mainFont = Poppins({
   weight: ["300", "400", "500", "600", "700"],
   style: ["normal", "italic"],
   variable: "--main-font",
   subsets: ["latin"],
   display: "swap",
});

const secondFont = Changa({
   weight: ["300", "400", "500", "600", "700"],
   style: "normal",
   variable: "--second-font",
   subsets: ["latin"],
   display: "swap",
});

const thirdFont = Permanent_Marker({
   weight: ["400"],
   style: ["normal"],
   variable: "--third-font",
   subsets: ["latin"],
   display: "swap",
});

const fontVariables = `${mainFont.variable} ${secondFont.variable} ${thirdFont.variable}`;

export const metadata: Metadata = {
   title: "Adrien Thevon - Web Developer",
   description: "Portfolio of Adrien Thevon, Web Developer",
   openGraph: {
      type: "website",
      url: "https://athevon.fr",
      title: "Adrien Thevon - Web Developer",
      description: "Portfolio of Adrien Thevon, React Web Developer",
      images: [
         {
            url: "https://postimg.cc/hfXzqmPS",
            width: 3000,
            height: 1800,
            alt: "Adrien Thevon - Web Developer",
         },
      ],
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={fontVariables}>
            {children}
            <ToastContainer />
         </body>
      </html>
   );
}
