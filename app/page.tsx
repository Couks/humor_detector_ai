import Header from "./components/header";
import { InputImage } from "./components/inputimage";

export default function Home() {
  return (
    <>
      <main className="bg-purple-100 w-screen h-screen">
        <Header title="Home" />
        <div className="flex flex-col items-center h-auto">
          <InputImage />
        </div>
      </main>
    </>
  );
}
