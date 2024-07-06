import Image from "next/image";
import { Inter } from "next/font/google";
import { WhyChooseUs } from "@/components/whychooseus/WhyChooseUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-red-400 flex justify-center items-center text-6xl">Section 1</section>
      <section className="h-screen bg-yellow-400 flex justify-center items-center text-6xl">Section 2</section>
      <WhyChooseUs />

      <section className="h-screen bg-teal-400 flex justify-center items-center text-6xl">Section 6</section>
      <section className="h-screen bg-pink-400 flex justify-center items-center text-6xl">Section 7</section>
    </div>
  );
}
