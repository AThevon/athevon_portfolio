import UnderlineSVG from "./UnderlineSVG";
import Underline from "./UnderlineSVG";
import styles from "./ideas.module.scss";
import { motion } from "framer-motion";

type Letter = {
   name: string;
   path: string;
};

const Ideas = () => {
   const letters: Letter[] = [
      {
         name: "i",
         path: "M280.8244323730469,115.94982147216797C307.6374580891927,115.52867462158203,439.05623016357424,113.12126780192057,451.9714050292969,113.26165008544922C464.8865798950195,113.40203236897787,376.73842274983724,95.507765528361,363.26171875,116.84587860107422C349.78501475016276,138.18399167378743,379.84774098714195,228.5454056040446,365.94989013671875,249.46237182617188C352.05203928629555,270.37933804829913,259.53112335205077,250.35842895507812,274.5520324707031,250.35842895507812C289.5729415893555,250.35842895507812,432.4881266276042,249.60275410970053,461.8280334472656,249.46237182617188",
      },
      {
         name: "d",
         path: "M287.0968322753906,89.96415710449219C285.0060323079427,155.07766723632812,280.8244323730469,284.7073160807292,280.8244323730469,285.3046875C280.8244323730469,285.9020589192708,246.77425130208334,124.31302897135416,287.0968322753906,91.75627136230469C327.41941324869794,59.19951375325521,403.8829752604167,122.2222188313802,401.79217529296875,187.63441467285156C399.7013753255208,253.04661051432294,321.1470133463542,254.54004414876303,280.8244323730469,287.99285888671875",
      },
      {
         name: "e",
         path: "M429.5699462890625,89.96415710449219C408.6619415283203,89.06809997558594,326.5233510335286,53.82317352294922,304.1219177246094,84.58781433105469C281.7204844156901,115.35245513916016,277.0908559163411,242.44327545166016,295.1613464355469,274.552001953125C313.2318369547526,306.66072845458984,413.14223225911456,276.7921447753906,412.54486083984375,277.24017333984375C411.94748942057294,277.6882019042969,310.5436655680339,291.8757807413737,291.5771179199219,277.24017333984375C272.6105702718099,262.6045659383138,282.6165415445964,204.36082204182944,298.7455749511719,189.42652893066406C314.8746083577474,174.4922358194987,388.65000406901044,187.63441467285156,388.351318359375,187.63441467285156C388.05263264973956,187.63441467285156,312.1864369710286,189.12784322102866,296.9534606933594,189.42652893066406",
      },
      {
         name: "a",
         path: "M264.6954040527344,267.3835144042969C264.0980275472005,254.98805491129556,249.61174519856772,218.69773483276367,261.11114501953125,193.01075744628906C272.6105448404948,167.32378005981445,307.85547892252606,113.56033579508464,333.6918029785156,113.26165008544922C359.5281270345052,112.9629643758138,402.9869130452474,164.9342943827311,416.12908935546875,191.21864318847656C429.2712656656901,217.50299199422201,412.69420369466144,270.37037150065106,412.54486083984375,270.9677429199219C412.39551798502606,271.5651143391927,440.1732940673828,207.34767405192056,415.2330322265625,194.80287170410156C390.2927703857422,182.25806935628256,288.2915802001953,195.5495859781901,262.9032897949219,195.6989288330078",
      },
      {
         name: "s",
         path: "M420.609375,132.078857421875C409.22048416137693,125.4121900177002,368.3826594543457,89.2069888305664,347.1326599121094,89.06809997558594C325.88266036987307,88.92921112060547,272.8181571960449,103.54391105651855,283.5126037597656,131.18280029296875C294.2070503234863,158.82168952941896,406.5457583618164,241.4112890625,416.12908935546875,267.3835144042969C425.7124203491211,293.3557397460938,368.6738780212402,297.91221130371093,345.3405456542969,298.74554443359375C322.0072132873535,299.57887756347657,277.9525692749023,276.7876387023926,265.5914611816406,272.7598571777344",
      },
   ];

   return (
      <div className={styles.ideas_wrapper}>
         {letters.map((letter: Letter, i: number) => (
            <motion.svg
               key={i}
               xmlns="http://www.w3.org/2000/svg"
               version="1.1"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               viewBox="0 0 700 350"
            >
               <motion.path
                  d={letter.path}
                  fill="none"
                  strokeWidth="35"
                  strokeLinecap="round"
                  strokeDasharray="0 0"
                  stroke="#F9F9F9"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                     pathLength: 1,
                     opacity: 1,
                     transition: {
                        pathLength: { duration: 1 },
                        opacity: { duration: 0 },
                        delay: 0.5 + i * 0.15,
                        ease: [0.62, 0, 0.78, 1],
                     },
                  }}
                  style={{ scale: 2 }}
               ></motion.path>
            </motion.svg>
         ))}
         <div className={styles.ideas_underline}>
            <UnderlineSVG />
         </div>
      </div>
   );
};

export default Ideas;