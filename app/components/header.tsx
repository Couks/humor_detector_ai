import { List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo-humor.png";
import { Button } from "./button";

interface MetadataProps {
  title?: string;
}

export default function Header({ title }: MetadataProps) {
  return (
    <header className="flex h-20 w-screen items-center justify-between px-4 bg-white shadow-purple-500 shadow-lg rounded-b-lg">
      <Link href="/">
        <Image
          src={logo}
          alt="Project Logo Human Detector AI"
          className="sm:w-48 w-3/4"
        />
      </Link>
      <h1 className="hidden sm:block text-2xl font-bold text-purple-500 font-mono">{title}</h1>
      <Link href="/catalogo">
        <Button>
          <p className="hidden sm:block pr-1 font-bold mr-2">Catálogo</p>
          <List size={32} strokeWidth={3} className=""/>
        </Button>
      </Link>  
    </header>
  );
}
