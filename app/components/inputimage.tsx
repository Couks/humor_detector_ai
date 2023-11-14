/* eslint-disable @next/next/no-img-element */
"use client";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
// import { useRouter } from "next/router";
import { useState } from "react";

export function InputImage() {
  const [selectedFile, setSelectedFile] = useState();
  const [imagePreview, setImagePreview] = useState();
  // const router = useRouter();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  async function handleUpload() {
    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
  
      const response = await fetch("https://facehumor.onrender.com/faces/img", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        // router.push("/catalogo");
      }
    } catch (error) {
      console.error("A network problem occurred", error);
    }
  }

  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
  };

  return (
    <>
      <>
        <div>
          <input type="file" onChange={handleImageUpload} />
          {imagePreview && (
            <div>
              <img src={imagePreview} alt="Preview" />
              <Button onClick={() => setSelectedFile(null)}>
                <DeleteForeverIcon />
                Remover Imagem
              </Button>
            </div>
          )}
          <Button onClick={handleUpload}>
            <CloudUploadIcon />
            Enviar Imagem
          </Button>
        </div>
      </>
      <>
        <div className="flex flex-col w-full h-full  items-center p-4 sm:px-96">
          {imagePreview && (
            <div className="w-full p-6 mb-4 bg-gray-100 border-dashed border-purple-500 border-2 rounded-lg items-center mx-20 text-center cursor-pointer">
              <img
                src={imagePreview}
                alt="Image preview"
                className="h-fit w-fit rounded-lg mx-auto "
              />
              <Button
                onClick={removeImage}
                className="w-full mb-2 text-white font-mono font-bold bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none rounded-lg p-4 mt-4"
              >
                <DeleteForeverIcon fontSize="small" />
                <span className="text-center ml-2">Remover Imagem</span>
              </Button>
              <Button
                onClick={handleUpload}
                className="w-full text-white font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-4"
              >
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
                className="w-full border-dashed border-2 mb-8 border-purple-500 h-60 bg-white p-12 rounded-lg focus:mr-2 focus:ring-purple-300 file:px-4 file:py-2 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 "
              />
              <Button
                onClick={handleUpload}
                className="w-full text-white font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-4"
              >
                <CloudUploadIcon fontSize="small" />
                <span className="text-center ml-2">Enviar Imagem </span>
              </Button>
            </>
          )}
        </div>
      </>
    </>
  );
}
