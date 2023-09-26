import { SkillType, SkillsDTO } from "@/types/skillsDTO";

export const skillsData: SkillsDTO[] = [
   {
      id: 1,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-html.svg",
      name: "Html5",
      description:
         "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
      affinity: "85%",
      gradient:
         "linear-gradient(-50deg, rgba(255, 226, 78, 0.9) 0%, rgba(255, 144, 79, 0.9) 50%, rgba(150, 0, 0, 0.9) 100%)",
   },
   {
      id: 2,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-css.svg",
      name: "CSS3",
      description:
         "CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1.",
      affinity: "95%",
      gradient:
         "linear-gradient(-50deg, rgba(0, 255, 194, 0.9) 0%, rgba(0, 181, 255, 0.9) 50%, rgba(0, 53, 223, 0.9) 100%)",
   },
   {
      id: 3,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-scss.svg",
      name: "SCSS",
      description:
         "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.",
      affinity: "95%",
      gradient:
         "linear-gradient( -50deg, rgba(254,62,101,0.9) 9.7%, rgba(166,24,146,0.9) 91.3% )",
   },
   {
      id: 4,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-javascript.svg",
      name: "Javascript",
      description: "JavaScript is a programming language.",
      affinity: "90%",
      gradient:
         "linear-gradient(50deg, rgba(255, 237, 130, 0.9) 0%, rgba(255, 201, 0, 0.9) 100%)",
   },
   {
      id: 5,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-typescript.svg",
      name: "Typescript",
      description:
         "TypeScript is a programming language developed and maintained by Microsoft.",
      affinity: "80%",
      gradient:
         "linear-gradient( -50deg, rgba(158,239,225,0.9) 1.6%, rgba(70,42,240,0.9) 97.5% )",
   },
   {
      id: 6,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-react.svg",
      name: "React",
      description:
         "React is a JavaScript library for building user interfaces.",
      affinity: "80%",
      gradient:
         "linear-gradient(-50deg, rgba(84,212,228,0.9) 0%, rgba(68,36,164,0.9) 100%)",
   },
   {
      id: 7,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-next.svg",
      name: "Next.js",
      description:
         "Next.js is a React framework for production and server-side rendering.",
      affinity: "80%",
      gradient:
         "linear-gradient(-50deg, rgba(7,7,9,0.9) 6.5%, rgba(27,24,113,0.9) 93.2% )",
   },
   {
      id: 9,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-tailwind.svg",
      name: "Tailwind CSS",
      description:
         "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
      affinity: "55%",
      gradient:
         "linear-gradient( -50deg,  rgba(30,39,107,0.9) 21.8%, rgba(77,118,221,0.9) 100.2% )",
   },
   {
      id: 10,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-three.svg",
      name: "Three.js",
      description:
         "Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser.",
      affinity: "50%",
      gradient:
         "linear-gradient(-50deg, rgba(7,7,9,0.9) 6.5%, rgba(37,34,34,0.9) 93.2% )",
   },
   {
      id: 12,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-framer-motion.png",
      name: "Framer Motion",
      description:
         "Framer Motion is a production-ready motion library for React.",
      affinity: "80%",
      gradient:
         "linear-gradient(-50deg, rgba(60,180,251,0.9) 0%, rgba(121,18,250,0.9) 50%, rgba(234,42,156,0.9) 100%)",
   },
   {
      id: 13,
      type: SkillType.FRONT,
      logo: "/skillsLogos/logo-react-spring.png",
      name: "React Spring",
      description:
         "React Spring is a spring-physics based animation library that should cover most of your UI related animation needs.",
      affinity: "70%",
      gradient:
         "linear-gradient( -50deg,  rgba(255,134,134,0.9) 21.5%, rgba(249,141,255,0.9) 93.1% )",
   },
   {
      id: 14,
      type: SkillType.BACK,
      logo: "/skillsLogos/logo-node.svg",
      name: "Node.js",
      description:
         "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      affinity: "80%",
      gradient:
         "linear-gradient(-50deg, rgba(255, 141, 109, 0.9) 0%, rgba(139, 185, 136, 0.9) 48%, rgba(37, 61, 75, 0.9) 100%)",
   },
   {
      id: 15,
      type: SkillType.BACK,
      logo: "/skillsLogos/logo-nest.svg",
      name: "Nest.js",
      description:
         "Nest.js is a framework for building efficient, scalable Node.js server-side applications.",
      affinity: "70%",
      gradient:
         "linear-gradient(-50deg, rgba(211,30,90,0.9) 0%, rgba(237,39,66,0.9) 100%)",
   },
   {
      id: 16,
      type: SkillType.BACK,
      logo: "/skillsLogos/logo-php.svg",
      name: "PHP",
      description:
         "PHP is a general-purpose scripting language especially suited to web development.",
      affinity: "40%",
      gradient:
         "linear-gradient(-50deg, rgba(175,179,214,0.9) 0%, rgba(120,124,180,0.9) 100%)",
   },
   {
      id: 17,
      type: SkillType.DB,
      logo: "/skillsLogos/logo-mysql.svg",
      name: "MySQL",
      description:
         "MySQL is an open-source relational database management system.",
      affinity: "70%",
      gradient:
         "linear-gradient(-50deg, rgba(228,142,1,0.9) 20%, rgba(1,96,137,0.9) 100%)",
   },
   {
      id: 18,
      type: SkillType.DB,
      logo: "/skillsLogos/logo-postgres.svg",
      name: "PostgreSQL",
      description:
         "PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.",
      affinity: "70%",
      gradient:
         "linear-gradient(-50deg, rgba(138,169,199,1) 0%, rgba(51,103,144,1) 100%)",
   },
   {
      id: 19,
      type: SkillType.DB,
      logo: "/skillsLogos/logo-mongodb.svg",
      name: "MongoDB",
      description:
         "MongoDB is a source-available cross-platform document-oriented database program.",
      affinity: "70%",
      gradient:
         "linear-gradient(-50deg, rgba(194, 191, 191,0.9) 0%, rgba(108, 172, 72,0.9) 48%, rgba(89, 150, 54,0.9) 100%)",
   },
   {
      id: 20,
      type: SkillType.CMS,
      logo: "/skillsLogos/logo-strapi.svg",
      name: "Strapi",
      description:
         "Strapi is an open-source headless CMS that is open to any type of front-end environment.",
      affinity: "70%",
      gradient: "linear-gradient(-50deg, rgba(145,124,253,0.9) 0%, rgba(78,75,253,0.9) 100%)"
   },
   {
      id: 21,
      type: SkillType.CMS,
      logo: "/skillsLogos/logo-wordpress.svg",
      name: "Wordpress",
      description:
         "WordPress is a free and open-source content management system written in PHP and paired with a MySQL or MariaDB database.",
      affinity: "50%",
      gradient: "linear-gradient(-50deg, rgba(59,115,151,0.9) 0%, rgba(33,155,233,0.9) 100%)"
   },
   {
      id: 22,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-git.svg",
      name: "Git",
      description:
         "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
      affinity: "70%",
      gradient: "linear-gradient(-50deg, rgba(10,10,10,0.9) 0%, rgba(237,76,43,0.9) 50%, rgba(240,80,47,0.9) 100%)"
   },
   {
      id: 23,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-github.svg",
      name: "Github",
      description:
         "GitHub is a provider of Internet hosting for software development and version control using Git.",
      affinity: "70%",
      gradient: "linear-gradient(-50deg, rgba(8,8,8,0.9) 0%, rgba(89,89,89,0.9) 100%)"
   },
   {
      id: 24,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-vscode.svg",
      name: "VS Code",
      description:
         "Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS.",
      affinity: "80%",
      gradient: "linear-gradient(-50deg, rgba(40,40,40,0.9) 0%, rgba(66,156,214,0.9) 100%)"
   },
   {
      id: 25,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-figma.svg",
      name: "Figma",
      description:
         "Figma is a vector graphics editor and prototyping tool which is primarily web-based.",
      affinity: "70%",
      gradient: "linear-gradient(-50deg, rgba(59,59,59,0.9) 0%, rgba(243,83,40,0.9) 51%, rgba(35,209,135,0.9) 100%)"
   },
   {
      id: 26,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-photoshop.svg",
      name: "Photoshop",
      description:
         "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc.",
      affinity: "40%",
      gradient: "linear-gradient(-50deg, rgba(57,171,255,0.9) 0%, rgba(8,37,60,0.9) 100%)"
   },
   {
      id: 27,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-postman.svg",
      name: "Postman",
      description: "Postman is a collaboration platform for API development.",
      affinity: "85%",
   },
   {
      id: 28,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-aws.svg",
      name: "AWS",
      description:
         "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
      affinity: "40%",
   },
   {
      id: 29,
      type: SkillType.TOOLS,
      logo: "/skillsLogos/logo-docker.svg",
      name: "Docker",
      description:
         "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
      affinity: "40%",
   },
   {
      id: 30,
      type: SkillType.WILL_LEARN,
      logo: "/skillsLogos/logo-firebase.svg",
      name: "Firebase",
      description:
         "Firebase is a platform developed by Google for creating mobile and web applications.",
   },
   {
      id: 31,
      type: SkillType.WILL_LEARN,
      logo: "/skillsLogos/logo-graphql.svg",
      name: "GraphQL",
      description:
         "GraphQL is an open-source data query and manipulation language for APIs.",
   },
   {
      id: 32,
      type: SkillType.WILL_LEARN,
      logo: "/skillsLogos/logo-apollo.svg",
      name: "Apollo",
      description:
         "Apollo is a set of tools and community effort to help you use GraphQL in your apps.",
   },
   {
      id: 33,
      type: SkillType.WILL_LEARN,
      logo: "/skillsLogos/logo-angular.svg",
      name: "Angular",
      description:
         "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
   },
   {
      id: 34,
      type: SkillType.WILL_LEARN,
      logo: "/skillsLogos/logo-vue.svg",
      name: "Vue.js",
      description:
         "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
   },
   {
      id: 35,
      type: SkillType.WILL_LEARN,
      logo: "/skillsLogos/logo-nuxtjs.svg",
      name: "Nuxt.js",
      description:
         "Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js.",
   },
];
