"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between lg:justify-start gap-[4rem] sm:gap-[12rem] lg:gap-[7.5rem] bg-[#283618] text-[#FEFAE0] w-[calc(100%-2rem)] lg:w-fit px-5 xl:px-28 py-4 rounded-2xl">
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-[2rem]">
        {/* <Image
          src="/logo.svg"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12"
          alt="Mossy Mug Logo"
        /> */}
        <p className="font-lora font-[600] text-[clamp(1rem,0.824rem+0.751vw,1.5rem)] tracking-widest sm:tracking-[0.25em] whitespace-nowrap">
          MOSSY MUG
        </p>
      </div>

      <nav className="hidden lg:flex items-center gap-[2rem] text-sm font-lato font-[700] tracking-wider whitespace-nowrap">
        <a href="#home" className="hover:text-[#BC6C25] transition-colors">
          HOME
        </a>
        <a href="#location" className="hover:text-[#BC6C25] transition-colors">
          LOCATION
        </a>
        <a href="#about" className="hover:text-[#BC6C25] transition-colors">
          ABOUT US
        </a>
        <a href="#contact" className="hover:text-[#BC6C25] transition-colors">
          CONTACT
        </a>
        <a
          href="#order"
          className="bg-[#DDA15E] px-6 py-2.5 rounded-lg text-sm font-[700] text-[#283618] hover:bg-[#BC6C25] transition-colors"
        >
          ORDER NOW
        </a>
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-[#FEFAE0] focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-[#283618] text-[#FEFAE0] text-sm font-lato font-[700] rounded-2xl p-6 flex flex-col items-center gap-6 shadow-xl lg:hidden z-50">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#BC6C25] transition-colors"
          >
            HOME
          </a>
          <a
            href="#location"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#BC6C25] transition-colors"
          >
            LOCATION
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#BC6C25] transition-colors"
          >
            ABOUT US
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#BC6C25] transition-colors"
          >
            CONTACT
          </a>
          <a
            href="#order"
            onClick={() => setIsOpen(false)}
            className="bg-[#DDA15E] px-6 py-2.5 rounded-lg text-sm font-[700] text-[#283618] w-full text-center hover:bg-[#BC6C25] transition-colors"
          >
            ORDER NOW
          </a>
        </div>
      )}
    </header>
  );
}
