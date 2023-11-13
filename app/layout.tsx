import "./assets/globals.css";
import Header from "./components/header";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="w-screen h-screen">
      <Header />
      {children}</body>
    </html>
  );
}
