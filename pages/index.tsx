import Image from "next/image";
import { Inter } from "next/font/google";
import { WhyChooseUs } from "@/components/whychooseus/WhyChooseUs";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useAnimate } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [scope, animate] = useAnimate();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dummyBlogData = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleNext = async () => {
    setCurrentIndex((curr) =>
      curr === dummyBlogData.length - 1 ? 0 : curr + 1
    );

    animate(
      "#testDiv",
      {
        width: ["20%", "100%"],
      },
      { duration: .7, ease: "backInOut", delay: 0.1 }
    );
    // animate(
    //   `#preview`,
    //   { width: ["5%", "100%"] },
    //   { duration: 1.2, ease: "backInOut", delay: 0.1 }
    // );
    animate(
      `#imageWrapper`,
      { width: ["40%", "100%"], height: ["20%",'50%',"70%", "100%"], y: ["50%", "0%"],x: ["120%", "0%"] },
      { duration: 0.5, ease: "linear", delay:0 }
    );
    animate(
      `#imageWrappers`,
      { x: ["50%", "0%"], width: ["50%", "100%"], height: ["20%", "100%"] },
      { duration: 0.8, ease: "linear", delay: 0.1 }
    );

    animate(
      `#title`,
      { opacity: [0, 1] },
      { duration: .7, ease: "backInOut", delay: 0.4 }
    );
    animate(
      `#content`,
      { opacity: [0, 1] },
      { duration: .7, ease: "backInOut", delay: 0.4 }
    );
    animate(
      `#Navbar`,
      { opacity: [0, 1] },
      { duration: .7, ease: "backInOut", delay: 0.4 }
    );
  };

  // useEffect(() => {
  //   const animationInterval = setInterval(handleNext, 3500);

  //   return () => {
  //     clearInterval(animationInterval);
  //   };
  // }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  let scaleUpWidth = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);
  let scaleUpHeight = useTransform(scrollYProgress, [0, 1], ["30%", "100%"]);

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
            transition={{ duration: 0.6, ease: "circInOut" }}
            viewport={{ once: true }}
            style={{
              height: scaleUpHeight,
              width: scaleUpWidth,
              zIndex: 10,
            }}
            className="bg-green-500 absolute right-0 bottom-0 z-0 w-[50%] h-[30%]  flex justify-center items-center"
          >
            <Image
              src="/hero-bg.jpg"
              alt="test-image"
              fill
              className="object-cover w-full h-full"
            />
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
      <section
        ref={scope}
        className="h-screen relative bg-pink-400 flex items-center overflow-hidden"
      >
        <button
          onClick={handleNext}
          className="absolute bottom-10 left-[50%] text-2xl border border-black p-3 z-10"
        >
          Next
        </button>
        <div
          className={`w-[80%] bg-[#E6DFFF] ${
            (currentIndex + 1) % 2 === 0 ? "bg-yellow-30 " : "bg-cyan-400 "
          }  h-full flex items-end justify-end  flex-shrink-0 text-5xl  overflow-hidden`}
        >
          <div
            id="testDiv"
            className={`w-full ${
              (currentIndex + 1) % 2 === 0 ? "bg-yellow-300 " : "bg-cyan-400 "
            } h-full ml-auto`}
          >
            <div className=" w-full h-full flex justify-end items-center py-1">
              <div className="w-[90%] h-[85%] flex flex-col justify-center items-center gap-3 2xl:gap-10 relative">
                <div
                  id="title"
                  className="flex justify-between items-center w-full "
                >
                  <div>
                    <h3 className="text-[#121212] AzonixFont font-[Azonix,Oxanium] text-5xl 2xl:text-6xl">
                      Our Portfolio
                    </h3>
                  </div>
                  <div className="w-[50%] bg-[#282828] h-[2px] rounded-lg" />
                </div>
                <div className="w-full h-[75%] flex justify-between items-end gap-5">
                  <div id="content" className="w-[50%] h-[90%] ">
                    <h3 className="text-[#121212] font-[Oxanium] text-xl 2xl:text-3xl font-[700]">
                      Bliz Services
                    </h3>
                    <p className="text-[#2E2E2E] font-[Oxanium] text-base 2xl:text-[20px] my-4 font-[400]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean eu ullamcorper libero. Nunc malesuada sem vel
                      mauris viverra lobortis. Maecenas sodales sollicitudin leo
                      nec eleifend.
                    </p>
                    <div className="grid grid-cols-2 w-[80%] 2xl:w-[60%] gap-6">
                      <div className="flex justify-center itemd-center py-2 gap-2 border border-[#000] rounded-full">
                        <span className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[500]">
                          +
                        </span>
                        <h4 className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[300]">
                          Lorem ipsum
                        </h4>
                      </div>
                      <div className="flex justify-center itemd-center py-2 gap-2 border border-[#000] rounded-full">
                        <span className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[500]">
                          +
                        </span>
                        <h4 className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[300]">
                          Lorem ipsum
                        </h4>
                      </div>
                      <div className="flex justify-center itemd-center py-2 gap-2 border border-[#000] rounded-full">
                        <span className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[500]">
                          +
                        </span>
                        <h4 className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[300]">
                          Lorem ipsum
                        </h4>
                      </div>
                      <div className="flex justify-center itemd-center py-2 gap-2 border border-[#000] rounded-full">
                        <span className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[500]">
                          +
                        </span>
                        <h4 className="font-[Kanit] text-[#2E2E2E] text-base 2xl:text-[20px] font-[300]">
                          Lorem ipsum
                        </h4>
                      </div>
                    </div>
                    <button className="flex justify-center items-center gap-4 my-7 bg-[#000] w-[40%] 2xl:w-[25%] text-white py-3 font-[Oxanium] text-[16px] font-[600] rounded-full">
                      Learn more
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <circle
                            cx="6"
                            cy="6"
                            r="6"
                            fill="url(#paint0_linear_171_26)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_171_26"
                              x1="6"
                              y1="0"
                              x2="6"
                              y2="12"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#BB9406" />
                              <stop offset="1" stop-color="#433500" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="w-[50%] h-[90%] relative flex justify-end items-end">
                    <div
                      id="imageWrapper"
                      className="relative w-full h-full bg-red-400"
                    >
                      <Image
                        fill
                        src="/portfolioImg1.png"
                        loading="lazy"
                        className="object-fill bottom-0 right-0"
                        alt="portfolio-img"
                      />
                    </div>
                  </div>
                </div>
                <div
                  id="Navbar"
                  className="sticky left-0 w-full flex justify-center items-center"
                >
                  <div className="w-full ml-auto flex justify-start items-center">
                    <div className=" min-w-[15%]  flex flex-col justify-between items-start gap-2 cursor-pointer">
                      <div className="flex justify-center items-center gap-5 px-2">
                        <h3 className="font-[Kanit] font-[600] text-[20px]">
                          01{" "}
                        </h3>
                        <h3 className="font-[Kanit] text-base 2xl:text-[20px] font-[300]">
                          Bliz Services
                        </h3>
                      </div>
                      <div className="bg-[#000] w-full h-[2px]" />
                    </div>
                    <div className=" min-w-[15%]  flex flex-col justify-between items-start gap-2">
                      <div className="flex justify-center items-center gap-5 px-2">
                        <h3 className="font-[Kanit] font-[600] text-[20px]">
                          02{" "}
                        </h3>
                        <h3 className="font-[Kanit] text-base 2xl:text-[20px] font-[300]">
                          Royal legacy
                        </h3>
                      </div>
                      <div className="bg-[#000] w-full h-[2px]" />
                    </div>

                    <div className=" min-w-[15%]  flex flex-col justify-between items-start gap-2">
                      <div className="flex justify-center items-center gap-5 px-2">
                        <h3 className="font-[Kanit] font-[600] text-[20px]">
                          03{" "}
                        </h3>
                        <h3 className="font-[Kanit] text-base 2xl:text-[20px] font-[300]">
                          Life insurance
                        </h3>
                      </div>
                      <div className="bg-[#000] w-full h-[2px]" />
                    </div>

                    <div className=" min-w-[15%]  flex flex-col justify-between items-start gap-2">
                      <div className="flex justify-center items-center gap-5 px-2">
                        <h3 className="font-[Kanit] font-[600] text-[20px]">
                          04{" "}
                        </h3>
                        <h3 className="font-[Kanit] text-base 2xl:text-[20px] font-[300]">
                          Joptimal Agency
                        </h3>
                      </div>
                      <div className="bg-[#000] w-full h-[2px]" />
                    </div>

                    <div className=" min-w-[15%]  flex flex-col justify-between items-start gap-2">
                      <div className="flex justify-center items-center gap-5 px-2">
                        <h3 className="font-[Kanit] font-[600] text-[20px]">
                          05{" "}
                        </h3>
                        <h3 className="font-[Kanit] text-base 2xl:text-[20px] font-[300]">
                          TABB
                        </h3>
                      </div>
                      <div className="bg-[#000] w-full h-[2px]" />
                    </div>
                    <div className=" min-w-[15%]  flex flex-col justify-between items-start gap-2">
                      <div className="flex justify-center items-center gap-5 px-2">
                        <h3 className="font-[Kanit] font-[600] text-[20px]">
                          06{" "}
                        </h3>
                        <h3 className="font-[Kanit] text-base 2xl:text-[20px] font-[300]">
                          Upwealth
                        </h3>
                      </div>
                      <div className="bg-[#000] w-full h-[2px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {dummyBlogData.slice(currentIndex + 1).map((cur, id) => (
          <div
            key={id}
            className={` ${
              (id + 1) % 2 === 0
                ? "bg-cyan-400 w-[10%]"
                : " bg-yellow-300 w-[13%]"
            } h-full flex justify-end items-end text-3xl flex-shrink-0`}
          >
            <div id={`preview`} className="w-full h-full">
              <div className="w-full bg-[#FDD] overflow-hidden h-full protfolioShadow flex justify-center items-center">
                <div className="w-full h-[85%] flex justify-end items-end">
                  <div
                    className={` flex justify-end items-end  ${
                      (id + 1) % 2 === 0 ? "w-full h-[15%]" : "w-full h-[25%]"
                    }`}
                  >
                    <div id="imageWrappers" className="relative w-full h-full">
                      <Image
                        src="/portfolioImg1.png"
                        fill
                        loading="lazy"
                        alt="portfolio-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="bg-teal-400 w-[15%] h-full flex justify-center items-center text-3xl">upcoming 2</div> */}
      </section>
    </div>
  );
}
