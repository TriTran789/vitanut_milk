import Image from "next/image";
import Logo from "../../public/logo.png";
import { HomeClientComponent } from "./homeClientComponent";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-14 border-b px-4 md:px-8 flex flex-row justify-between items-center">
      <Link href={`/`}>
      <Image src={Logo} alt={ "Logo" } className="h-14 w-28 object-contain" />
      </Link>
      <HomeClientComponent />
    </nav>
  );
};

export default Navbar;
