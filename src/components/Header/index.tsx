import styles from "./header.module.scss";
import Logo from "./Logo";
import {
   faHouseChimney,
   faFlaskVial,
   faCode,
   faAddressCard,
   faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import Navlink from "./NavLink";

const Header = () => {
   const links = [
      {
         name: "Home",
         path: "/",
         icon: faHouseChimney,
      },
      {
         name: "Projects",
         path: "/projects",
         icon: faFlaskVial,
      },
      {
         name: "Skills",
         path: "/skills",
         icon: faCode,
      },
      {
         name: "About",
         path: "/about",
         icon: faBoltLightning,
      },
      {
         name: "Contact",
         path: "/contact",
         icon: faAddressCard,
      },
   ];

   return (
      <header className={styles.header}>
         <div className={styles.name}>
            <h1>Adrien Thevon</h1>
            <h2>Web Developer</h2>
         </div>
         <div className={styles.logo}>
            <Logo />
         </div>
         <nav>
            <ul>
               {links.map((link, index) => (
                  <Navlink key={index} link={link} />
               ))}
            </ul>
         </nav>
      </header>
   );
};

export default Header;
