"use client";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
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
    <div className="flex flex-col w-sceen h-full justify-around align-center p-4">
      {imagePreview && (
        <div className="p-6 mb-4 bg-gray-100 border-dashed border-purple-500 border-2 rounded-lg items-center mx-20 text-center cursor-pointer">
          <img
            src={imagePreview}
            alt="Image preview"
            className="h-auto rounded-full mx-auto "
          />
          
          <Button
            onClick={removeImage}
            className="w-full mb-2 text-white font-mono font-bold bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none rounded-lg p-4 mt-4"
          >
            <DeleteForeverIcon fontSize="small" />
            <span className="text-center ml-2">Remover Imagem</span>
          </Button>

          <Button className="w-full text-white font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-4">
            <CloudUploadIcon fontSize="small" />
            <span className="text-center ml-2">Enviar Imagem </span>
          </Button>
        </div>
      )}

      {!imagePreview && (
        <>
          <input
            type="file"
            onChange={handleImageUpload}
            className="border-dashed border-2 border-purple-500 w-auto h-60 bg-white p-12 rounded-lg focus:mr-2 focus:ring-purple-300 file:mt-1/2 file:py-2 file: px-4 file:rounded-full file:border-0 file:text-md file: font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
          />

          <Button className="text-white  font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-4">
            <CloudUploadIcon fontSize="small" />
            <span className="text-center ml-2">Enviar Imagem </span>
          </Button>
        </>
      )}
    </div>
  );
}
