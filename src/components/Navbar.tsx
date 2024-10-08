import Image from "next/image";
import Logo from "../../public/logo.png";
import { HomeClientComponent } from "./homeClientComponent";
import Link from "next/link";
import Shopee from "../../public/shopee.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Facebook } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-14 border-b px-4 md:px-8 flex flex-row justify-between items-center">
      <div className="flex gap-8">
        <Link href={`/`}>
          <Image src={Logo} alt={"Logo"} className="h-14 w-28 object-contain" />
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Image src={Shopee} alt="shopee" className="w-8 h-8" />
            </TooltipTrigger>
            <TooltipContent>
              <Image src={Shopee} alt="shopee" className="w-32 h-32" />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex justify-center items-center">
          <Link
            href={`https://www.facebook.com/profile.php?id=61566845345256&mibextid=LQQJ4d`}
          >
            <Facebook className="w-8 h-8 text-[#eeb415]" />
          </Link>
        </div>
      </div>
      <HomeClientComponent />
    </nav>
  );
};

export default Navbar;
