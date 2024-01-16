import { WorksDTO } from "@/types/worksDTO";

export const worksData: WorksDTO[] = [
   {
      id: 1,
      available: false,
      title: "French Wood Factory",
      description:
         "Configurator for trophies and medals made of wood, for all your events",
      image: "/background_coque_en_bois.jpg",
      logo: "/logo_coque_en_bois.svg",
      link: "https://trophee-en-bois-prod-ed7b8b4ff8c3.herokuapp.com/",
      color: "#86BA90",
      capture: "/capture-coqueenbois.png",
      techs: [
         {
            id: 1,
            name: "React",
            logo: "/skillsLogos/logo-react.svg",
         },
         {
            id: 2,
            name: "TypeScript",
            logo: "/skillsLogos/logo-typescript.svg",
         },
         {
            id: 3,
            name: "CSS3",
            logo: "/skillsLogos/logo-css.svg",
         },
         {
            id: 4,
            name: "Nest.js",
            logo: "/skillsLogos/logo-nest-red.svg",
         },
         {
            id: 5,
            name: "PostgreSQL",
            logo: "/skillsLogos/logo-postgres.svg",
         },
         {
            id: 6,
            name: "TypeORM",
            logo: "/skillsLogos/logo-typeorm.svg",
         },
         {
            id: 7,
            name: "AWS S3",
            logo: "/skillsLogos/logo-aws-s3.svg",
         },
         {
            id: 8,
            name: "Docker",
            logo: "/skillsLogos/logo-docker.svg",
         },
      ],
   },
   {
      id: 2,
      available: true,
      title: "Visual Xperience",
      description: "Use of Three.js for create interactive 3D environment",
      image: "/background-three.png",
      logo: "/skillsLogos/logo-three.svg",
      link: "https://visual-xperience.vercel.app/",
      color: "#D05353",
      capture: "/capture-visualxperience.png",
      techs: [
         {
            id: 1,
            name: "Next.js",
            logo: "/skillsLogos/logo-next.svg",
         },
         {
            id: 2,
            name: "TypeScript",
            logo: "/skillsLogos/logo-typescript.svg",
         },
         {
            id: 3,
            name: "React Three Fiber",
            logo: "/skillsLogos/logo-three.svg",
         },
      ],
   },
   {
      id: 3,
      available: false,
      title: "Portfolio Digital Marketing",
      description: "Portfolio of Théo Perrin, digital marketing specialist",
      image: "/background-portfolio.png",
      logo: "/skillsLogos/logo-next.svg",
      link: "",
      color: "#DFA06E",
      capture: "/capture-tperrin-portfolio.png",
      techs: [
         {
            id: 1,
            name: "Next.js",
            logo: "/skillsLogos/logo-next.svg",
         },
         {
            id: 2,
            name: "TypeScript",
            logo: "/skillsLogos/logo-typescript.svg",
         },
         {
            id: 3,
            name: "SCSS",
            logo: "/skillsLogos/logo-scss.svg",
         },
         {
            id: 4,
            name: "Framer Motion",
            logo: "/skillsLogos/logo-framer-motion.png",
         },
      ],
   },
   {
      id: 4,
      available: false,
      title: "Devjobs",
      description: "A Jobfinder App with React",
      image: "/background_jobfinder.png",
      logo: "/logo-devjobs.png",
      link: "",
      color: "#5864e0",
      capture: "/capture-devjobs.png",
      techs: [
         {
            id: 1,
            name: "React",
            logo: "/skillsLogos/logo-react.svg",
         },
         {
            id: 2,
            name: "JavaScript",
            logo: "/skillsLogos/logo-javascript.svg",
         },
         {
            id: 3,
            name: "CSS3",
            logo: "/skillsLogos/logo-css.svg",
         },
         {
            id: 4,
            name: "Node.js",
            logo: "/skillsLogos/logo-node.svg",
         },
         {
            id: 5,
            name: "MongoDB",
            logo: "/skillsLogos/logo-mongodb.svg",
         },
      ],
   },
];
