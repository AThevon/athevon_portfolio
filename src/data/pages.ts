import {
   faHouseChimney,
   faFlaskVial,
   faCode,
   faBoltLightning,
   faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { PageDTO } from "@/types/pageDTO";

export const pages: PageDTO[] = [
   {
      name: "Home",
      path: "/",
      icon: faHouseChimney,
      background: "",
   },
   {
      name: "Works",
      path: "/works",
      icon: faFlaskVial,
      background: "/works-bg.png",
   },
   {
      name: "Skills",
      path: "/skills",
      icon: faCode,
      background: "/skills-bg.png",
   },
   {
      name: "About",
      path: "/about",
      icon: faBoltLightning,
      background: "/about-bg.png",
   },
   {
      name: "Contact",
      path: "/contact",
      icon: faAddressCard,
      background: "/contact-bg.png",
   },
];
