"use client"

import { useState } from "react"
import Image from "next/image"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="py-4 px-6 flex flex-wrap items-center  justify-between font-familjen">
      <div className="flex items-center gap-4 ml-4">
        <Image
          className="ml-14 "
          src="/assets/logo.png"
          alt="Botol Logo"
          width={150}
          height={150}
        />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      <div className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto lg:gap-10 lg:mr-5`}>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-7 text-black text-xl">
          Shop
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-7 text-black text-xl">
          Contact us
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-7 text-black text-xl">
          About
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-7 text-black text-xl">
          Journal
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 mr-7 text-black text-xl">
          Custom
        </a>
        <button className="bg-gradient-to-r from-[#00d1ff] to-[#1a83ff] text-white px-6 py-2 mr-7 rounded-full text-xl mt-4 lg:mt-0 w-full lg:w-auto">
          Inquiry Now
        </button>
      </div>
    </nav>
  )
}

