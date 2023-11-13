import { Card } from "../components/card";

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
    cache: "no-cache",
  });

  const catalogo = await response.json();

  return (
    <main className="bg-purple-100">
      <div className="flex flex-col-reverse md:flex md:flex-col-reverse justify-center px-2">
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
