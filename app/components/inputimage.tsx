/* eslint-disable @next/next/no-img-element */
"use client";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export function InputImage() {
  const [selectedFile, setSelectedFile] = useState<File | undefined | null>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | undefined>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      

      const response = await axios
        .post("https://facehumor.onrender.com/faces/img", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Allow: "*",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          console.log(response);
          setUploadStatus("Arquivo Enviado com Sucesso.");
        });
    } catch (error) {
      console.log("A network problem occurred", error);
      setUploadStatus("Ocorreu um erro no envio do arquivo.");
    }
  };

  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
  };

  return (
    <div className="flex flex-col w-auto items-center mx-2 md:w-1/2 mt-2">
      {uploadStatus && (<p className="bg-red-500 px-2 text-white rounded-lg m-2">{uploadStatus}</p>)}
      {imagePreview ? (
        <div className="w-full h-auto p-2 bg-gray-100 border-dashed border-purple-500 border-2 rounded-lg items-center mx-4 text-center cursor-pointer">
          <img
            src={imagePreview}
            alt="Image Preview"
            className="w-full h-full md:h-96 rounded-lg shadow-lg object-cover border-purple-400 border-double border-4"
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
            <span className="text-center ml-2">Enviar Imagem</span>
          </Button>
        </div>
      ) : (
        <>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full h-96 m-8 border-dashed border-2  border-purple-500 bg-white p-12 rounded-lg focus:mr-2 focus:ring-purple-300 file:px-4 file:py-2 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 "
          />
          <Button
            onClick={handleUpload}
            className="w-full text-white font-mono font-bold bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none rounded-lg p-6"
          >
            <CloudUploadIcon fontSize="small" />
            <span className="text-center ml-2 ">Enviar Imagem</span>
          </Button>
        </>
      )}
    </div>
  );
}
