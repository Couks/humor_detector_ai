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
    <div className="flex flex-col justify-center items-center mb-2  h-50 sm:grid sm:grid-cols-5 gap-2 bg-white rounded-lg shadow-lg mx-1 p-4 hover:bg-zinc-50 hover:shadow-xl hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-104 border-purple-400 border-double border-4">
      <div className="w-full sm:col-span-3 h-auto">
        <img
          src={image}
          alt={image}
          className="w-full h-60 rounded-lg shadow-lg object-cover border-purple-400 border-double border-4"
        />
      </div>

      <div className="w-full sm:col-span-2 h-fit text-purple-700 rounded-lg">
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
      <div className="hidden">
        <div>
          <p className="font-bold text-lg">Felicidade</p>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            {joy && <div className="h-2 bg-green-500 rounded-full"></div>}
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">Raiva</p>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            {anger && <div className="h-2 bg-red-500 rounded-full"></div>}
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">Surpresa</p>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            {surprise && <div className="h-2 bg-yellow-500 rounded-full"></div>}
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">Tristeza</p>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            {sorrow && <div className="h-2 bg-blue-500 rounded-full"></div>}
          </div>
        </div>

        <div>
          <p className="font-bold text-lg">Usa chapéu</p>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            {headwear && <div className="h-2 bg-purple-500 rounded-full"></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
