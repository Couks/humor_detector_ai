"use client";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";



export function InputImage() {
  
  const [selectedFile, setSelectedFile] = useState(true);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    setSelectedFile(event.target.files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
  };

  return (
    <>
      {imagePreview ? (
        <div className="relative w-auto h-1/2 mb-4">
          <Image
            src={imagePreview}
            alt="Image preview"
            fill
            objectFit="contain"
          />
          <Button
            onClick={removeImage}
            className="text-white font-mono font-bold bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none rounded-lg p-4 mt-4"
          >
            <DeleteForeverIcon fontSize="large" />
            Remover Imagem
          </Button>
        </div>
      ) : (
        <>
          <input
            type="file"
            onChange={handleImageUpload}
            className="border-dashed border-2 border-purple-500 w-auto bg-white p-12 rounded-md mb-4"
          />

          <Button className="text-white font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-4">
            Enviar Imagem
          </Button>
        </>
      )}
    </>
  );
}
