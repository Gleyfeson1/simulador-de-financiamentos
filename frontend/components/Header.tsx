import Image from "next/image";
import logo_white from "../public/images/brands/logo_white.png";

const Header = () => {
  return (
    <div className="bg-violet-700 flex items-center justify-center h-[64px] fixed w-full  z-50">
      <Image src={logo_white} height={45} width={155} alt="Logo listra" />
    </div>
  );
};

export default Header;
