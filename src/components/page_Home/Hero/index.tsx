"use client";

import styles from "./hero.module.scss";
import Image from "next/image";
import HeroSVG from "./SVGs/HeroSVG";
import Button from "@/components/misc/Button";
import { motion } from "framer-motion";
import Reveal from "@/components/misc/Reveal";

const Hero = () => {
   return (
      <section className={styles.hero}>
         <div className={styles.text}>
            <h2>Transforming</h2>
            <h3>
               <span>Ideas </span>into
               <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 800 300"
               >
                  <motion.path
                     d="M62.1864128112793,210.03585815429688C72.60457382837932,206.45461372375487,95.93044369379679,188.04361409505208,119.53408813476562,190.3225860595703C143.13773257573445,192.60155802408855,168.5110843149821,221.60395568847656,192.11473083496094,222.58065795898438C215.71837735493978,223.5573602294922,232.8584706878662,196.67563110351563,249.46241760253906,195.6989288330078C266.0663645172119,194.7222265625,264.9552578481038,218.9949360148112,283.5126037597656,217.20431518554688C302.0699496714274,215.41369435628255,330.7766249084473,185.35394927978516,351.6129455566406,185.84230041503906C372.449266204834,186.33065155029297,377.3716205851237,220.70640513102214,398.20794677734375,219.89248657226562C419.0442729695638,219.0785680135091,446.77426813761394,181.52479848225911,466.3083190917969,181.3620147705078C485.8423700459798,181.1992310587565,490.4331583150228,214.11291531880696,505.7348327636719,218.99642944335938C521.036507212321,223.8799435679118,534.5849104309082,208.73209503173828,550.5377197265625,208.24374389648438C566.4905290222168,207.75539276123047,568.8053266398113,219.88950248718263,593.5484619140625,216.30825805664062C618.2915971883137,212.72701362609862,669.8089472452799,193.57676963806153,686.7384643554688,188.5304718017578"
                     fill="none"
                     stroke-width="8"
                     stroke='url("#SvgjsLinearGradient1000")'
                     stroke-linecap="round"
                     stroke-dasharray="69 0"
                     stroke-opacity="1"
                     transform="matrix(1,0,0,1,25.537555694580078,-1.9752349853515625)"
                     initial={{ pathLength: 0, opacity: 0 }}
                     animate={{
                        pathLength: 1,
                        opacity: 1,
                        transition: {
                           pathLength: { duration: 2.4 },
                           opacity: { duration: 0 },
                           delay: 1,
                           ease: [0.62, 0, 0.78, 1],
                        },
                     }}
                  ></motion.path>
                  <defs>
                     <linearGradient id="SvgjsLinearGradient1000">
                        <stop
                           stopColor="hsla(52, 80%, 63%, 1)"
                           offset="0"
                        ></stop>
                        <stop
                           stopColor="hsla(38, 100%, 67%, 1)"
                           offset="1"
                        ></stop>
                     </linearGradient>
                  </defs>
               </motion.svg>
            </h3>
            <Reveal>
               <Image src="/STUNNING.png" alt="hero" width={500} height={100} />
            </Reveal>
            <h4>Visual Realities</h4>
            <Button isLink href="/contact" classCTA>
               Contact me
            </Button>
         </div>
         <div className={styles.images}>
            <div className={styles.image}>
               <HeroSVG />
               <Image
                  src="/yung-dvlpr-nobg.png"
                  alt="hero"
                  width={400}
                  height={400}
               />
            </div>
         </div>
      </section>
   );
};

export default Hero;
