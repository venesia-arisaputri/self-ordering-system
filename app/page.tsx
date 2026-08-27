"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-[#606C38] pt-6">
      <Header />
      <section className="flex w-full justify-center items-center mt-14 mb-20 gap-24">
        <div className="w-140">
          <p className="font-lora font-black leading-[80px] text-6xl text-[#FEFAE0]">
            A quiet corner,
            <br /> a comforting cup.
          </p>
          <p className="text-[#FEFAE0] font-lato font-thin mt-8 tracking-wider">
            Take a break from the rush in our warm, cabin-inspired space. Enjoy
            <br />
            handcrafted coffee and comforting food in a truly relaxing <br />
            atmosphere.
          </p>
          <div className="flex gap-8 mt-6">
            <button className="bg-[#DDA15E] px-8 py-3 rounded-lg text-sm font-[700] text-[#283618] cursor-pointer">
              ORDER NOW
            </button>
            <button className="border-1 border-[#FEFAE0] px-6 py-3 rounded-lg text-sm font-[700] text-[#FEFAE0] cursor-pointer">
              SEE OUR LOCATION
            </button>
          </div>
        </div>
        <Image
          src="/hero.png"
          width={313}
          height={415}
          alt="Picture of logo.png"
        />
      </section>
      <section className="bg-[#FEFAE0] w-full px-46 pt-8 pb-40">
        <p className="font-lora text-3xl font-semibold">VISIT US TODAY</p>
        <p className="text-[#283618] font-thin mt-1">
          We've prepared a table just for you. Here is where you can find your
          daily dose of calm and coziness.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-6 text-[#FEFAE0] font-lato">
          <div className="relative">
            <Image
              src="/Location/Location1.png"
              width={384}
              height={346}
              alt="Picture of Location.png"
            />
            <div className="absolute left-8 right-8 -bottom-30 bg-[#606C38] p-6">
              <p className="text-[16px]">Mossy Mug - Lippo Mall Puri</p>
              <p className="text-[14px] mt-1">
                Monday - Sunday | 10:00 - 22:00
              </p>
              <p className="text-[14px] mt-1">
                Jl. Puri Indah Raya Puri Indah CBD No.1 Blok U, RT.3/RW.2,
                Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah
                Khusus Ibukota Jakarta 11610
              </p>
              <a href="#" className="text-[14px] underline">
                View on Maps
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/Location/Location2.png"
              width={384}
              height={346}
              alt="Picture of Location.png"
            />
            <div className="absolute left-8 right-8 -bottom-30 bg-[#606C38] p-6">
              <p className="text-[16px]">Mossy Mug - Lippo Mall Puri</p>
              <p className="text-[14px] mt-1">
                Monday - Sunday | 10:00 - 22:00
              </p>
              <p className="text-[14px] mt-1">
                Jl. Puri Indah Raya Puri Indah CBD No.1 Blok U, RT.3/RW.2,
                Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah
                Khusus Ibukota Jakarta 11610
              </p>
              <a href="#" className="text-[14px] underline">
                View on Maps
              </a>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/Location/Location3.png"
              width={384}
              height={346}
              alt="Picture of Location.png"
            />
            <div className="absolute left-8 right-8 -bottom-30 bg-[#606C38] p-6">
              <p className="text-[16px]">Mossy Mug - Lippo Mall Puri</p>
              <p className="text-[14px] mt-1">
                Monday - Sunday | 10:00 - 22:00
              </p>
              <p className="text-[14px] mt-1">
                Jl. Puri Indah Raya Puri Indah CBD No.1 Blok U, RT.3/RW.2,
                Kembangan Sel., Kec. Kembangan, Kota Jakarta Barat, Daerah
                Khusus Ibukota Jakarta 11610
              </p>
              <a href="#" className="text-[14px] underline">
                View on Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-28 flex justify-center items-center overflow-hidden">
        <div className="relative w-[1000px] flex items-center">
          <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-[340px] h-[450px] rounded-3xl overflow-hidden shadow-2xl z-20">
            <Image
              src="/story.png"
              fill
              className="object-cover"
              alt="Cozy cabin bar seating with plaid cushions and an espresso machine"
            />
          </div>
          <div className="bg-[#FEFAE0] rounded-3xl pt-16 pb-16 pr-16 pl-[360px] w-full min-h-[380px] z-10 flex flex-col justify-center">
            <p className="font-lora font-bold text-xs tracking-[0.2em] text-[#283618]">
              OUR STORY
            </p>
            <h2 className="font-lora font-bold text-4xl mt-3 mb-6 text-[#283618] leading-[1.2]">
              Crafted for comfort, brewed with care.
            </h2>
            <p className="font-lato text-sm text-[#283618] leading-relaxed mb-5">
              Established in 2025, Mossy Mug was born from a simple dream: to
              bring the calm, grounding comfort of a forest cabin into the heart
              of the city. We believe that a great day starts with a moment of
              stillness, a warm mug in hand, and food that comforts the soul.
            </p>
            <p className="font-lato text-sm text-[#283618] leading-relaxed">
              For the past year, we have mindfully designed every corner of our
              space to be your serene escape. From our slow-brewed coffee to our
              freshly kitchen-crafted meals, we invite you to slow down, take a
              deep breath, and savor the cozy warmth we've prepared just for
              you.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
