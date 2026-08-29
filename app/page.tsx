"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#606C38] pt-5">
      <div className="sticky top-8 z-50 flex justify-center">
        <Header />
      </div>

      <section
        id="home"
        className="flex flex-col lg:flex-row w-full justify-center items-center mt-14 mb-10 gap-8 lg:gap-12 xl:gap-32 scroll-mt-[200px] px-4 lg:px-0"
      >
        <div className="order-2 lg:order-1 w-full px-8 sm:px-32 lg:px-0 lg:w-[31rem] xl:w-[36.25rem]">
          <p className="text-center lg:text-left font-lora font-[700] text-2xl sm:text-[clamp(2rem,1.296rem+3.005vw,4rem)] leading-[1.25] text-[#FEFAE0]">
            A quiet corner,
            <br /> a comforting cup.
          </p>
          <p className="text-center lg:text-left text-[#FEFAE0] text-sm sm:text-[clamp(16px,1.38vw,20px)] font-lato font-[300] mt-4 lg:mt-8">
            Take a break from the rush in our warm, cabin-inspired space. Enjoy
            handcrafted coffee and comforting food in a truly relaxing
            atmosphere.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="bg-[#DDA15E] px-9.5 sm:px-4 py-2 text-xs md:px-5 md:py-2 xl:px-6 xl:py-2.5 xl:text-sm rounded-lg font-[700] text-[#283618] hover:bg-[#BC6C25] transition-colors cursor-pointer">
              ORDER NOW
            </button>
            <button className="border-1 border-[#FEFAE0] px-4 py-2 text-xs md:px-5 md:py-2 xl:px-6 xl:py-2.5 xl:text-sm rounded-lg font-[700] text-[#FEFAE0] hover:border-[#DDA15E] hover:text-[#DDA15E] transition-colors cursor-pointer">
              SEE OUR LOCATION
            </button>
          </div>
        </div>

        <Image
          src="/hero.png"
          width={313}
          height={415}
          loading="eager"
          className="order-1 lg:order-2 w-full h-64 md:w-4/5 md:h-96 lg:w-75 lg:h-100 object-cover rounded-xl"
          alt="Mossy Mug Hero"
        />
      </section>

      <section
        id="location"
        className="bg-[#FEFAE0] w-full px-8 sm:px-16 xl:px-30 pt-8 pb-16 md:pb-24 xl:pb-40 scroll-mt-[150px]"
      >
        <p className="font-lora font-[600] text-[#283618] text-xl md:text-2xl lg:text-3xl">
          VISIT US TODAY
        </p>
        <p className="font-lato font-[300] text-[#283618] text-xs md:text-sm lg:text-base mt-1">
          We've prepared a table just for you. Here is where you can find your
          daily dose of calm and coziness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 md:gap-x-6 md:gap-y-16 mt-8 font-lato text-[#FEFAE0]">
          <div className="flex flex-row md:flex-col h-full bg-[#606C38] md:bg-transparent rounded-lg md:rounded-none overflow-hidden md:overflow-visible shadow-md md:shadow-none">
            <div className="w-[20%] md:w-full shrink-0 relative">
              <Image
                src="/Location/Location1.png"
                width={384}
                height={346}
                alt="Picture of Location 1"
                className="w-full h-full md:h-[250px] xl:h-auto object-cover"
              />
            </div>

            <div className="flex flex-col flex-1 bg-[#606C38] p-4 md:px-6 lg:px-8 md:py-4 md:mx-6 md:-mt-12 relative z-10">
              <p className="text-sm md:text-base font-bold md:font-normal">
                Mossy Mug - Lippo Mall Puri
              </p>
              <p className="text-xs md:text-sm mt-1">
                Monday - Sunday | 10:00 - 22:00
              </p>
              <p className="hidden sm:block text-xs md:text-sm font-[300] leading-tight mt-2">
                Jl. Puri Indah Raya Puri Indah CBD No.1 Blok U, RT.3/RW.2,
                Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah
                Khusus Ibukota Jakarta 11610
              </p>
              <a
                href="#"
                className="text-xs font-[300] underline hover:[text-shadow:_0_0_0.6px_currentColor,_0_0_0.6px_currentColor] mt-auto pt-4"
              >
                View on Maps
              </a>
            </div>
          </div>

          <div className="flex flex-row md:flex-col h-full bg-[#606C38] md:bg-transparent rounded-lg md:rounded-none overflow-hidden md:overflow-visible shadow-md md:shadow-none">
            <div className="w-[20%] md:w-full shrink-0 relative">
              <Image
                src="/Location/Location2.png"
                width={384}
                height={346}
                alt="Picture of Location 2"
                className="w-full h-full md:h-[250px] xl:h-auto object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 bg-[#606C38] p-4 md:px-6 lg:px-8 md:py-4 md:mx-6 md:-mt-12 relative z-10">
              <p className="text-sm md:text-base font-bold md:font-normal">
                Mossy Mug - Lippo Mall Puri
              </p>
              <p className="text-xs md:text-sm mt-1">
                Monday - Sunday | 10:00 - 22:00
              </p>
              <p className="hidden sm:block text-xs md:text-sm font-[300] leading-tight mt-2">
                Jl. Puri Indah Raya Puri Indah CBD No.1 Blok U, RT.3/RW.2,
                Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah
                Khusus Ibukota Jakarta 11610
              </p>
              <a
                href="#"
                className="text-xs font-[300] underline hover:[text-shadow:_0_0_0.6px_currentColor,_0_0_0.6px_currentColor] mt-auto pt-4"
              >
                View on Maps
              </a>
            </div>
          </div>

          <div className="flex flex-row md:flex-col h-full bg-[#606C38] md:bg-transparent rounded-lg md:rounded-none overflow-hidden md:overflow-visible shadow-md md:shadow-none">
            <div className="w-[20%] md:w-full shrink-0 relative">
              <Image
                src="/Location/Location3.png"
                width={384}
                height={346}
                alt="Picture of Location 3"
                className="w-full h-full md:h-[250px] xl:h-auto object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 bg-[#606C38] p-4 md:px-6 lg:px-8 md:py-4 md:mx-6 md:-mt-12 relative z-10">
              <p className="text-sm md:text-base font-bold md:font-normal">
                Mossy Mug - Lippo Mall Puri
              </p>
              <p className="text-xs md:text-sm mt-1">
                Monday - Sunday | 10:00 - 22:00
              </p>
              <p className="hidden sm:block text-xs md:text-sm font-[300] leading-tight mt-2">
                Jl. Puri Indah Raya Puri Indah CBD No.1 Blok U, RT.3/RW.2,
                Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah
                Khusus Ibukota Jakarta 11610
              </p>
              <a
                href="#"
                className="text-xs font-[300] underline hover:[text-shadow:_0_0_0.6px_currentColor,_0_0_0.6px_currentColor] mt-auto pt-4"
              >
                View on Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative w-full py-16 lg:py-24 flex justify-center items-center overflow-hidden scroll-mt-[90px] px-6 md:px-10 lg:px-0"
      >
        <div className="relative w-full max-w-[600px] md:max-w-[800px] lg:max-w-none lg:w-[850px] xl:w-[1020px] flex flex-col lg:flex-row items-center">
          <div className="relative lg:absolute lg:left-[0px] xl:left-[-80px] lg:top-1/2 lg:-translate-y-1/2 w-full md:max-w-[460px] h-[240px] sm:h-[300px] md:h-[280px] lg:w-[320px] lg:h-[360px] xl:w-[380px] xl:h-[420px] rounded-3xl overflow-hidden shadow-2xl z-20 mx-auto">
            <Image
              src="/story.png"
              fill
              sizes="(max-width: 1023px) 500px, (max-width: 1279px) 320px, 380px"
              className="object-cover"
              alt="Cozy cabin bar seating with plaid cushions and an espresso machine"
            />
          </div>

          <div className="flex flex-col w-full text-center lg:text-left relative z-10 mt-6 md:-mt-20 lg:mt-0">
            <div className="hidden xl:block h-[1px] w-full bg-[#FEFAE0] mb-4"></div>
            <div className="hidden xl:block h-[1px] w-full bg-[#FEFAE0] mb-4"></div>

            <div className="bg-transparent md:bg-[#FEFAE0] rounded-2xl p-0 md:pt-28 md:pb-10 md:px-10 lg:py-8 lg:pr-12 lg:pl-[360px] xl:py-10 xl:pr-16 xl:pl-90 w-full flex flex-col justify-center items-start md:items-center lg:items-start">
              <p className="font-lora font-[600] text-xs xl:text-sm tracking-[0.1em] text-[#FEFAE0] md:text-[#283618]">
                OUR STORY
              </p>

              <p className="font-lora font-[600] text-xl sm:text-[22px] md:text-2xl lg:text-[26px] xl:text-3xl text-left md:text-center mt-3 mb-4 text-[#FEFAE0] md:text-[#283618] leading-[1.2]">
                Crafted for comfort, brewed with care.
              </p>

              <div className="block md:hidden h-[3px] w-24 bg-[#FEFAE0] mt-2 mb-6"></div>
              <p className="font-lato text-xs md:text-sm xl:text-base text-[#FEFAE0] md:text-[#283618] text-left md:text-center leading-normal md:leading-tight mb-3">
                Established in 2025, Mossy Mug was born from a simple dream: to
                bring the calm, grounding comfort of a forest cabin into the
                heart of the city. We believe that a great day starts with a
                moment of stillness, a warm mug in hand, and food that comforts
                the soul.
              </p>

              <p className="font-lato text-xs md:text-sm xl:text-base text-[#FEFAE0] md:text-[#283618] text-left md:text-center leading-normal md:leading-tight">
                For the past year, we have mindfully designed every corner of
                our space to be your serene escape. From our slow-brewed coffee
                to our freshly kitchen-crafted meals, we invite you to slow
                down, take a deep breath, and savor the cozy warmth we've
                prepared just for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="m-0 p-0 w-full h-full">
        <Footer />
      </section>
    </div>
  );
}
