import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center gap-24 bg-[#283618] text-[#FEFAE0] w-fit h-fit px-28 py-3 rounded-xl">
      <div className="flex items-center gap-6">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="Picture of logo.png"
        />
        <p className="font-lora text-[24px] tracking-[8px]">MOSSY MUG</p>
      </div>
      <div className="flex items-center gap-8 text-sm font-lato tracking-wider">
        <p>HOME</p>
        <p>LOCATION</p>
        <p>ABOUT US</p>
        <p>CONTACT</p>
        <div className="bg-[#DDA15E] px-6 py-3 rounded-lg text-sm font-[700]">
          <p className="text-[#283618]">ORDER NOW</p>
        </div>
      </div>
    </header>
  );
}
