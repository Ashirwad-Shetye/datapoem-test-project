import { Rubik } from "next/font/google";
import Comment from "@/components/comment";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-mainBg">
      <Comment />
    </main>
  );
}
