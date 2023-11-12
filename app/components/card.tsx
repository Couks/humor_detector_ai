import Image from "next/image";

interface CardProps {
  photoURL: string;
  joy: boolean;
  anger: boolean;
  surprise: boolean;
  sorrow: boolean;
  headwear: boolean;
}

export async function Card({
  photoURL,
  joy,
  anger,
  surprise,
  sorrow,
  headwear,
}: CardProps) {
  return (
    <div className="flex flex-col align-center justify-center w-60 rounded-lg shadow-md p-0">
      <Image src={photoURL} alt={photoURL} className="rounded-lg w-60 h-50" />
      <div className="bg-zinc-900 text-white">
        {joy && <p>Felicidade</p>}
        {anger && <p>Raiva</p>}
        {surprise && <p>Surpresa</p>}
        {sorrow && <p>Tristeza</p>}
        {headwear && <p>Usa chapéu</p>}
      </div>
    </div>
  );
}
