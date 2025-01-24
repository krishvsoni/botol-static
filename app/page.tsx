'use client';
import React from 'react';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

const BotolWebsite = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-black overflow-visible font-familjen">
        <Navbar />
        <main className="flex justify-center items-center mt-20 relative px-4 sm:px-0">
          <div className="relative flex flex-col items-center w-full">
            {/* Main Heading */}
            <div className="text-4xl sm:text-6xl font-bold text-center z-10">
              The Ultimate Companion
              <br />
              for Hydration
            </div>
            
            {/* Sub Heading */}
            <div className="text-xl sm:text-2xl text-center mt-4 z-10">
              we believe in the power of hydration.
              <br />
              Our mission is simple yet vital
            </div>

            {/* Background Image */}
            <Image
              src="/assets/bg.svg"
              alt="Background"
              width={680}
              height={400}
              className="absolute top-12 left-1/2 transform -translate-x-1/2 h-auto max-w-full max-h-full z-0"
            />

            {/* Water Bottle Images */}
            <div className="relative mt-20 z-10">
              <Image
                src="/assets/Bottol-Down.png"
                alt="Water bottle body"
                width={560}
                height={800}
                className="relative top-12 w-full"
              />
              <Image
                src="/assets/Bottol-Cap.png"
                alt="Water bottle cap"
                width={560}
                height={200}
                className="absolute top-12 w-full"
              />
            </div>

            <div className="flex justify-center items-center w-full absolute top-0 mt-[500px] z-10">
              <div className="flex w-1/2 sm:w-1/2">
                <Image
                  src="/assets/2.svg"
                  alt="Small Bottle 1"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex justify-end w-1/2 sm:w-1/3">
                <Image
                  src="/assets/3.svg"
                  alt="Small Bottle 2"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </main>

        {/* Additional Sections */}
        <Features />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default BotolWebsite;