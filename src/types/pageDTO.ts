import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type PageDTO = {
   name: "Home" | "Works" | "Skills" | "About" | "Contact";
   path: "/" | "/works" | "/skills" | "/about" | "/contact";
   icon: IconDefinition;
   background: string;
}