import Header from "./components/header";
import { InputImage } from "./components/inputimage";


export default function Home() {

  return (
    <main className="flex flex-col w-screen h-screen items-center bg-zinc-100">
      <Header MetadataProps={{ title: 'Home' }}/>
      <div className="flex w-auto h-auto m-12">
        <div className="flex flex-col">
          <InputImage/>
        </div>
      </div>
    </main>
  );
}
