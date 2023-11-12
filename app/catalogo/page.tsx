import { Card } from "../components/card";
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
    <main className="flex flex-col w-screen h-full items-center bg-zinc-100">
      <Header MetadataProps={{ title: 'Catálogo de Imagens' }}/>
      <div className="container flex p-12">
        {catalogo.map((item: humorData) => (
            <Card
              key={item.id}
              photoURL={item.photoURL}
              joy={item.joy}
              anger={item.anger}
              surprise={item.surprise}
              sorrow={item.sorrow}
              headwear={item.headwear}
            />
        ))}
      </div>
    </main>
  );
}
