/* eslint-disable @next/next/no-img-element */
"use client";

import axios from "axios";

import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";

export function InputImage() {
  const [selectedFile, setSelectedFile] = useState<File | undefined | null>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    setIsLoading(true);
    setUploadStatus(null);
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
          setSuccess(false);
          setTimeout(() => setSuccess(true), 2000);
          setUploadStatus("Arquivo enviado com sucesso!");
        });
    } catch (error: any) {
      console.log(`Ocorreu um erro: ${error.message}`);
      setUploadStatus("Ocorreu um erro");
      alert("Ocorreu um erro no envio, atualize a página e tente novamente.");
    }
    setIsLoading(false);
  };

  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
  };

  return (
    <div className="flex flex-col items-center justify-center m-2 p-2 md:px-24">
      {imagePreview ? (
        <>
          <div className="w-full h-2/3 p-2 bg-gray-100 border-dashed border-purple-500 border-2 rounded-lg items-center mx-4 text-center cursor-pointer">
            <div className="mb-4">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-full h-96 rounded-lg shadow-lg object-cover border-purple-400 border-double border-4"
              />
            </div>
            <>
              <Button
                onClick={removeImage}
                remove={true}
                size={"lg"}
                className="mb-4"
              >
                Remover Imagem
              </Button>
              {isLoading ? (
                <Button loading={true} size={"lg"}>
                  <p>Processando Imagem... </p>
                </Button>
              ) : success ? (
                <Link href="/catalogo">
                  <Button success={true}>Ver resultado</Button>
                </Link>
              ) : uploadStatus ? (
                <Button error={true} size={"lg"}>
                  {uploadStatus}
                </Button>
              ) : (
                <Button onClick={handleUpload} upload={true} size={"lg"}>
                  Enviar Imagem
                </Button>
              )}
            </>
          </div>
        </>
      ) : (
        <>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full h-96 m-8 border-dashed border-2  border-purple-500 bg-white p-12 rounded-lg focus:mr-2 focus:ring-purple-300 file:px-4 file:py-2 file:rounded-full file:border-0 file:text-lg file:font-semibold file:bg-purple-100 file:text-purple-500 hover:file:bg-purple-100 "
          />
          {isLoading ? (
            <Button loading={true} size={"lg"}>
              <p>Processando Imagem... </p>
            </Button>
          ) : success ? (
            <Link href="/catalogo">
              <Button success={true} >
                Ver resultado
              </Button>
            </Link>

          ) : uploadStatus ? (
            <Button error={true} size={"lg"}>
              {uploadStatus}
            </Button>
          ) : (
            <Button onClick={handleUpload} upload={true} size={"lg"} disabled>
              Enviar Imagem
            </Button>
          )}
        </>
      )}
    </div>
  );
}
