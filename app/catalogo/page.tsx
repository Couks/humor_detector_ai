'use client';

import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../components/button";
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

export default function Catalogo() {
  const [catalogo, setCatalogo] = useState<humorData[]>([]);
  const [loading, setLoading] = useState<number | null>(null);
  const [success, setSuccess] = useState<number | null>(null);

  const fetchCatalogo = async () => {
    try {
      const response = await axios.get("https://facehumor.onrender.com/faces");
      setCatalogo(response.data);
    } catch (error) {
      console.error("Erro ao buscar o catálogo", error);
    }
  };

  useEffect(() => {
    fetchCatalogo();

    const intervalId = setInterval(() => {
      fetchCatalogo();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []); 

  const handleDelete = async (id: number) => {
    setLoading(id);
    try {
      await axios.delete(`https://facehumor.onrender.com/faces/${id}`);
      fetchCatalogo();
      setSuccess(id);
      setTimeout(() => setSuccess(null), 2000);
    } catch (error) {
      console.error("Erro ao deletar a imagem", error);
    }
    
    setLoading(null);
  };
  
  return (
    <>
    <main className="bg-purple-100 w-screen h-auto ">
      <Header title="Catálogo de Imagens" />
      <div className="flex flex-col gap-8 m-6 pb-8 items-center/ sm:grid sm:grid-cols-2 2xl:grid 2xl:grid-cols-3">
        {catalogo.reverse().map((item: humorData) => (
          <div key={item.id} className="items-center">
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
          
          {loading === item.id ? (
            <Button size={"lg"} loading={true}>
            </Button>
          ) : success === item.id ? (
            <Button success={true} />
          ) : (
            <Button onClick={() => handleDelete(item.id)} remove={true}>
              Apagar imagem
            </Button>
          )}
          </div>
        ))}
      </div>
    </main>
  </>
  );
}
