import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between pt-6">
      <Image src="/logo.png" alt="Logotipo: FSW Food" height={30} width={100} />

      <Button
        variant="outline"
        size="icon"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
