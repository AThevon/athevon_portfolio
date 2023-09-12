import { motion } from "framer-motion";

const Underline = () => {
   return (
      <motion.svg
         xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 800 300"
      >
         <motion.path
            d="M63.08246994018555,227.95700073242188C138.08247703552246,224.8924853515625,353.1362618255615,209.64159301757812,479.7491760253906,210.93191528320312C606.3620902252197,212.22223754882813,714.8746417236329,230.7706201171875,766.487548828125,235.12545776367188"
            fill="none"
            strokeWidth="8"
            stroke='url("#SvgjsLinearGradient1000")'
            strokeLinecap="round"
            strokeDasharray="69 0"
            strokeOpacity="1"
            transform="matrix(1,0,0,1,25.537555694580078,-1.9752349853515625)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
               pathLength: 1,
               opacity: 1,
               transition: {
                  pathLength: { duration: 1 },
                  opacity: { duration: 0 },
                  delay: 1.5,
                  ease: [0.62, 0, 0.78, 1],
               },
            }}
         ></motion.path>
         <defs>
            <linearGradient id="SvgjsLinearGradient1000">
               <stop stopColor="hsla(52, 80%, 63%, 1)" offset="0"></stop>
               <stop stopColor="hsla(38, 100%, 67%, 1)" offset="1"></stop>
            </linearGradient>
         </defs>
      </motion.svg>
   );
};

export default Underline;
