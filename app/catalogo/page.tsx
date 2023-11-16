import axios from "axios";
import { Card } from "../components/card";
import Header from "../components/header";

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
  const response = await axios.get("https://facehumor.onrender.com/faces");
  const catalogo = await response.data;

  return (
    <>
      <main className="bg-purple-100 w-screen h-auto">
        <Header title="Catálogo de Imagens" />
        <div className="flex flex-col gap-4 mx-2 my-8 / sm:grid sm:grid-cols-2 2xl:grid 2xl:grid-cols-3">
          {catalogo.reverse().map((item: humorData) => (
            <Card
              key={item.id}
              image={
                item.photoURL ||
                (item.faceImg &&
                  `data:${item.faceImg.type};base64,${item.faceImg.face_img_data}`) ||
                ""
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
    </>
  );
}
