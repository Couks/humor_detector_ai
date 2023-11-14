import Header from "./components/header";
import { InputImage } from "./components/inputimage";

export default function Home() {
  return (
    <>
      <Header title="Home" />
      <main className="bg-zinc-100 w-screen h-screen py-8">
        <InputImage />
      </main>
    </>
  );
}
