import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-humor.png";

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-around mx:p-8 bg-white shadow-xl rounded-xl">
      <Link href="/">
        <Image
          src={logo}
          alt="Project Logo Human Detector AI"
          className="md:md-40 w-28 "
        />
      </Link>
      <Link href="/catalogo">
        <Button className="text-base text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 rounded-lg md:text-md px-5 py-2.5 focus:outline-none">
          <p className="hidden">Catálogo de Imagens</p>
          <SortRoundedIcon />
        </Button>
      </Link>
    </header>
  );
}
