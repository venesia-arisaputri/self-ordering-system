import Image from "next/image";
import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex relative w-full bg-[#283618] p-10 md:p-16 lg:p-24 xl:p-32 overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 md:gap-12 lg:gap-0">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start w-full">
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
            <Image
              src="/logo.svg"
              width={42}
              height={42}
              className="w-32 h-32 md:w-[42px] md:h-[42px]"
              alt="Picture of the logo"
            />
            <p className="font-lora font-[600] text-[clamp(1rem,0.824rem+0.751vw,1.5rem)] text-[#FEFAE0] tracking-widest sm:tracking-[0.25em] whitespace-nowrap">
              MOSSY MUG
            </p>
          </div>

          <div className="flex justify-center lg:justify-start gap-7 mt-8 lg:mt-16 w-full">
            <FaInstagram
              size={24}
              color="#FEFAE0"
              className="w-4 h-4 md:w-6 md:h-6 cursor-pointer"
            />
            <FaXTwitter
              size={24}
              color="#FEFAE0"
              className="w-4 h-4 md:w-6 md:h-6 cursor-pointer"
            />
            <FaTiktok
              size={24}
              color="#FEFAE0"
              className="w-4 h-4 md:w-6 md:h-6 cursor-pointer"
            />
            <FaFacebookF
              size={24}
              color="#FEFAE0"
              className="w-4 h-4 md:w-6 md:h-6 cursor-pointer"
            />
          </div>

          <p className="hidden lg:block text-[#FEFAE0] font-lato font-[300] lg:text-sm xl:text-base mt-12">
            © Mossy Mug 2026. All Rights Reserved.
          </p>
        </div>

        <div className="col-span-1 font-lato text-[#FEFAE0] text-center lg:text-left lg:pl-28 xl:pl-52 w-full flex flex-col items-center lg:items-start">
          <p className="text-lg sm:text-xl md:text-2xl">GENERAL</p>

          <div className="flex flex-col items-center lg:items-start mt-4 gap-3 md:mt-7 md:gap-5 text-sm sm:text-base font-[300]">
            <a href="#home" className="hover:text-[#BC6C25] transition-colors">
              Home
            </a>
            <a
              href="#location"
              className="hover:text-[#BC6C25] transition-colors"
            >
              Location
            </a>
            <a href="#about" className="hover:text-[#BC6C25] transition-colors">
              About Us
            </a>
            <a href="" className="hover:text-[#BC6C25] transition-colors">
              Order Now
            </a>
          </div>
        </div>

        <div className="col-span-1 font-lato text-[#FEFAE0] text-center lg:text-left xl:pl-8 w-full flex flex-col items-center lg:items-start">
          <p className="text-lg sm:text-xl md:text-2xl">CONTACT US</p>

          <div className="flex flex-col items-center lg:items-start mt-4 gap-4 md:mt-7 md:gap-7 text-sm sm:text-base font-[300]">
            <div className="flex items-center gap-3">
              <FaWhatsapp size={24} className="w-4 h-4 md:w-6 md:h-6" />
              <p>+62 812 8812 8812</p>
            </div>

            <div className="flex items-center gap-3">
              <MdEmail size={24} className="w-4 h-4 md:w-6 md:h-6" />
              <p>customer.service@mossymug.co</p>
            </div>

            <div className="flex items-center gap-3">
              <IoBagHandle size={24} className="w-4 h-4 md:w-6 md:h-6" />
              <p>Monday - Saturday | 08:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div className="block lg:hidden w-full text-center col-span-1 md:col-span-2">
          <p className="text-[#FEFAE0] font-lato font-[300] text-xs md:text-sm">
            © Mossy Mug 2026. All Rights Reserved.
          </p>
        </div>
      </div>

      <Image
        src="/logo.svg"
        width={240}
        height={240}
        alt="Picture of the logo background"
        className="hidden lg:block absolute right-16 xl:right-8 top-[-100px] xl:top-[-140px] z-49 w-45 h-45 xl:w-60 xl:h-60"
      />
    </div>
  );
}
