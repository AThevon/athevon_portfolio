import Image from "next/image";

const Logo = () => {
   return (
      <Image
         src="/logo-athevon-rounded.png"
         alt="Adrien Thevon"
         width={100}
         height={100}
      />
   );
};

export default Logo;
