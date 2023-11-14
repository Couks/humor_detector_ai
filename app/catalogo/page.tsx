import { Card } from "../components/card";

interface humorData {
  id: number;
  photoURL: string;
  faceImg?: {
    name: string;
    type: string;
    face_img_data: string;
  };
  joy: boolean;
  anger: boolean;
  surprise: boolean;
  sorrow: boolean;
  headwear: boolean;
}

export default async function Catalogo() {
  const response = await fetch("https://facehumor.onrender.com/faces", {
    cache: "no-store",
    next: {
      revalidate: 30,
    },
  });

  const catalogo = await response.json();

  console.log(catalogo);

  return (
    <main className="flex bg-purple-100 p-8 justify-center">
      <div className="flex flex-col gap-8 / sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3">
        {catalogo.reverse().map((item: humorData) => (
          <Card
            key={item.id}
            image={
              item.photoURL ||
              (item.faceImg &&
                `data:${item.faceImg.type};base64,${item.faceImg.face_img_data}`)
            }
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
