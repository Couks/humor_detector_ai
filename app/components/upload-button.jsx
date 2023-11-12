export async function UploadButton() {
    
  const formData = new FormData();
  formData.append("image", fileInput.files[0]);

  const response = await fetch("https://facehumor.onrender.com/faces", {
    method: "POST",
    body: formData,
  });

  const upload = await response.json();
  console.log(upload);
}
