/* eslint-disable @next/next/no-img-element */
"use client";

interface CardProps {
  image: string;
  joy: boolean;
  anger: boolean;
  surprise: boolean;
  sorrow: boolean;
  headwear: boolean;
}

export function Card({
  image,
  joy,
  anger,
  surprise,
  sorrow,
  headwear,
}: CardProps) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 gap-1 justify-center h-50 bg-white rounded-lg shadow-lg mx-1 p-1 hover:bg-zinc-50 hover:shadow-xl hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="w-full sm:col-span-2 h-auto p-4">
        <img
          src={image}
          alt={image}
          className="w-full h-60 rounded-lg shadow-lg object-cover border-purple-400 border-double border-4"
        />
      </div>

      <div className="w-full sm:col-span-1 h-auto text-purple-700 p-2 bg-white rounded-lg">
        {[
          { label: "Felicidade", value: joy, color: "green" },
          { label: "Raiva", value: anger, color: "red" },
          { label: "Surpresa", value: surprise, color: "yellow" },
          { label: "Tristeza", value: sorrow, color: "blue" },
          { label: "Usa chapéu", value: headwear, color: "purple" },
        ].map(({ label, value, color }, index) => (
          <div key={index} className="flex flex-col justify-around mx-2 my-2">
            <label className="font-bold text-lg mb-2">{label}</label>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              {value && (
                <div className={`h-2 bg-${color}-500 rounded-full`}></div>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
