import { Suspense } from "react";
import Header from "../components/header";

export interface humorData {
  id: number;
  photoURL: string;
  joy: boolean;
  anger: boolean;
  surprise: boolean;
  sorrow: boolean;
  headwear: boolean;
}

export default async function Catalogo() {
  const response = await fetch("https://facehumor.onrender.com/faces", {
    cache: "force-cache",
  });

  const catalogo = await response.json();

  return (
    <main className="flex flex-col w-screen h-screen items-center bg-zinc-100">
      <Header />
      <h1>Catálogo de Imagens</h1>
      <div className="container">
        <Suspense fallback={<p>Carregando Imagens</p>}>
        <pre>{JSON.stringify(catalogo, null, 2)}</pre>
        </Suspense>
      </div>
    </main>
  );
}
