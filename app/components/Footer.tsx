import Image from "next/image";
import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="flex relative w-full bg-[#283618] p-24">
      <div className="grid grid-cols-3 w-full">
        <div>
          <div className="flex items-center gap-6">
            <Image
              src="/logo.png"
              width={42}
              height={42}
              alt="Picture of the logo"
            />
            <p className="font-lora text-xl text-[#FEFAE0] tracking-[6px]">
              MOSSY MUG
            </p>
          </div>

          <div className="flex gap-6 mt-10">
            <FaInstagram size={24} color="#FEFAE0" />
            <FaXTwitter size={24} color="#FEFAE0" />
            <FaTiktok size={24} color="#FEFAE0" />
            <FaFacebookF size={24} color="#FEFAE0" />
          </div>

          <p className="text-[#FEFAE0] font-lato mt-12">
            © Mossy Mug 2026. All Rights Reserved.
          </p>
        </div>

        <div className="font-lato text-[#FEFAE0] pl-40">
          <p className="text-2xl">GENERAL</p>

          <div className="flex flex-col mt-4 gap-2">
            <a href="">Order Now</a>
            <a href="">Deals</a>
            <a href="">Location</a>
            <a href="">About Us</a>
          </div>
        </div>

        <div className="text-[#FEFAE0]">
          <p className="text-2xl">CONTACT US</p>

          <div className="gap-4 mt-4">
            <div className="flex mt-4 items-center gap-3">
              <FaWhatsapp size={24} />
              <p>+62 812 8812 8812</p>
            </div>

            <div className="flex mt-4 items-center gap-3">
              <MdEmail size={24} />
              <p>customer.service@mossymug.co</p>
            </div>

            <div className="flex mt-4 items-center gap-3">
              <IoBagHandle size={24} />
              <p>Monday - Saturday | 08:00 - 20:00</p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/logo.png"
        width={150}
        height={150}
        alt="Picture of the logo"
        className="absolute right-24 top-[-64]"
      />
    </div>
  );
}
