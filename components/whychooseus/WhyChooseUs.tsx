import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });
  let scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-203%"]);
  return (
    <div ref={sectionRef} className="h-[500vh] bg-purple-400 relative">
      <motion.div className="h-screen w-full bg-neutral-500 sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x: scrollX }} className="w-full flex items-center">
          <div className=" w-screen flex-shrink-0 h-screen bg-pink-400">
            <div className="h-full bg-blue-200 flex justify-center items-center text-6xl">Scroll Section 1</div>
          </div>
          <div className=" w-screen flex-shrink-0 h-screen flex justify-center items-center text-6xl bg-pink-900">
            Scroll Section 2
          </div>
          <div className=" w-screen flex-shrink-0 h-screen flex justify-center items-center text-6xl bg-blue-500">
            Scroll Section 2
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
