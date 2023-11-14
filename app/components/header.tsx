import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-humor.png";

interface MetadataProps {
  title?: string;
}

export default function Header({ title }: MetadataProps) {
  return (
    <header className="flex h-20 w-screen items-center justify-between px-10 bg-white shadow-xl rounded-xl">
      <Link href="/">
        <Image
          src={logo}
          alt="Project Logo Human Detector AI"
          className="sm:w-48 w-3/4"
        />
      </Link>
      <h1 className="hidden sm:block text-xl font-bold text-purple-500 font-mono">{title}</h1>
      <Link href="/catalogo">
        <Button className="text-base font-mono text-white bg-purple-700 hover:bg-purple-800 hover:shadow-purple-900 focus:ring-4 focus:ring-purple-300 rounded-lg sm:text-sm px-5 py-2.5 focus:outline-none">
          <p className="hidden sm:block pr-4 font-bold">Catálogo de Imagens</p>
          <SortRoundedIcon />
        </Button>
      </Link>
    </header>
  );
}
