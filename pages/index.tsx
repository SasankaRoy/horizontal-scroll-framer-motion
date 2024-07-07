import Image from "next/image";
import { Inter } from "next/font/google";
import { WhyChooseUs } from "@/components/whychooseus/WhyChooseUs";
import { useRef } from "react";
import { useScroll, useTransform,motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef
  });

  let scaleUpWidth = useTransform(scrollYProgress, [0, 1], ['50%', '100%'])
  let scaleUpHeight = useTransform(scrollYProgress, [0,1],['30%','100%'])
  return (
    <div>
      <section
        ref={sectionRef}
        className="h-[300vh] relative bg-red-400  text-6xl"
      >
        <div className="h-screen  sticky top-0 flex flex-col items-center text-6xl bg-blue-500 overflow-hidden">
          <div className="bg-red-400 w-full flex justify-center items-center h-[50%]">
            Section 1 Part A
          </div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: .6, ease: 'circInOut' }}
            viewport={{once:true}}
            style={{
              height: scaleUpHeight,
              width: scaleUpWidth,             
              zIndex:10
            }}
            className="bg-green-500 absolute right-0 bottom-0 z-0 w-[50%] h-[30%]  flex justify-center items-center"
          >
            <Image src='/hero-bg.jpg' alt='test-image' fill className="object-cover w-full h-full" />
          </motion.div>
          
        </div>
      </section>

      <section className="h-screen bg-yellow-400 flex justify-center items-center text-6xl">
        Section 2
      </section>
      <WhyChooseUs />

      <section className="h-screen bg-teal-400 flex justify-center items-center text-6xl">
        Section 6
      </section>
      <section className="h-screen bg-pink-400 flex justify-center items-center text-6xl">
        Section 7
      </section>
    </div>
  );
}
