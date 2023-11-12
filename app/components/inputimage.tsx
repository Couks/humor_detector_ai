'use client';

import { useState } from "react";


export async function InputImage() {
  const [selectedFile, setSelectedFile] = useState();
  const [imagePreview, setImagePreview] = useState();

//   const handleImageUpload = (event) => {
//     setSelectedFile(event.target.files[0]);

//     let reader = new FileReader();
//     reader.readAsDataURL(event.target.files[0]);
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//   };

//   const removeImage = () => {
//     setSelectedFile(null);
//     setImagePreview(null);
//   };
  
  return (
    <>
    <h1>Input Image</h1>
      {/* {imagePreview && (
            <div className="relative w-auto h-1/2 mb-4">
              <Image
                src={imagePreview}
                alt="Image preview"
                fill
                objectFit="contain"
              />
            </div>
          )}

          {!imagePreview && (
            <input
              type="file"
              onChange={handleImageUpload}
              className="border-dashed border-2 border-purple-500 w-auto bg-white p-12 rounded-md mb-4"
            />
          )}

          <Button
            onClick={removeImage}
            className="text-white font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-4"
          >
            Enviar Imagem
          </Button>
          {imagePreview && (
            <Button
              onClick={removeImage}
              className="text-white font-mono font-bold bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none rounded-lg p-4 mt-4"
            >
              <DeleteForeverRoundedIcon fontSize="large" />
              Remover Imagem
            </Button>
          )} */}
    </>
  );
}
