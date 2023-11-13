"use client";

interface CardProps {
  photoURL: string;
  joy: boolean;
  anger: boolean;
  surprise: boolean;
  sorrow: boolean;
  headwear: boolean;
}

export function Card({
  photoURL,
  joy,
  anger,
  surprise,
  sorrow,
  headwear,
}: CardProps) {
  return (
    <div className="flex flex-col justify-center h-50 bg-white rounded-lg shadow-lg m-4 p-2 hover:bg-zinc-100 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
  <div className="w-full h-auto p-4">
    <img
      src={photoURL}
      alt={photoURL}
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>

  <div className="w-full h-auto text-purple-700 p-4 bg-white shadow-lg rounded-lg">
    {[
      { label: "Felicidade", value: joy, color: "green" },
      { label: "Raiva", value: anger, color: "red" },
      { label: "Surpresa", value: surprise, color: "yellow" },
      { label: "Tristeza", value: sorrow, color: "blue" },
      { label: "Usa chapéu", value: headwear, color: "purple" },
    ].map(({ label, value, color }, index) => (
      <div key={index} className="flex flex-col justify-around mx-2 my-2">
        <p className="font-bold text-lg mb-2">{label}</p>
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
