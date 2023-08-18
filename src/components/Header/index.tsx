import styles from "./header.module.scss";
import Logo from "./Logo";
import Navlink from "./NavLink";
import { pages as data } from "@/data/pages";

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.name}>
            <h1>Adrien Thevon</h1>
            <h2>Web Developer</h2>
         </div>
         <Logo />
         <nav>
            <ul>
               {data.map((link, index) => (
                  <Navlink key={index} link={link} />
               ))}
            </ul>
         </nav>
      </header>
   );
};

export default Header;
