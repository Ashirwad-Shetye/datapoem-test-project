import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${inter.className} text-5xl`}>Hello</h1>
    </main>
  );
}
