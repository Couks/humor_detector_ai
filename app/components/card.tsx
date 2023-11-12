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
    <div className="flex items-center w-1/2 h-auto bg-white rounded-lg shadow-lg m-4 p-4">
      <div className="w-2/3 h-auto p-4">
        <img src={photoURL} alt={photoURL} className="w-full h-full rounded-lg" />
      </div>

      <div className="flex flex-col h-full justify-around align-center text-purple-700 mt-4 w-1/3">
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
