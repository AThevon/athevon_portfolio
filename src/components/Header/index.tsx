import styles from "./header.module.scss";
import Logo from "./Logo";
import Navlink from "./NavLink";
import { pages as data } from "@/data/pages";
import { useDeviceContext } from "@/contexts/DeviceContext";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
   const { isMobile, isTablet } = useDeviceContext();

   return (
      <header className={styles.header}>
         {!isMobile && (
            <div className={styles.name}>
               <h1>Adrien Thevon</h1>
               <h2>Web Developer</h2>
            </div>
         )}
         <Logo />
         {!isMobile && !isTablet ? (
            <nav>
               <ul className={styles.desktop_nav}>
                  {data.map((link, index) => (
                     <Navlink key={index} link={link} />
                  ))}
               </ul>
            </nav>
         ) : (
            <BurgerMenu />
         )}
      </header>
   );
};

export default Header;
