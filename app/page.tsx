'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Features } from '../components/Features';
import { Products } from '../components/Products';
import { Footer } from '../components/Footer';

const BotolWebsite = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
// krishsoni.co
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); 
    };
    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 300,
          behavior: 'smooth',
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isSmallScreen]);

  return (
    <>
      <div className="min-h-screen bg-white text-black overflow-hidden font-familjen">
        <Navbar />
        <main className="flex justify-center items-center mt-[200px] relative px-4 sm:px-0">
          <div className="relative flex flex-col items-center w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto max-w-full max-h-full z-0"
            >
              <Image src="/assets/bg.svg" alt="Background" width={680} height={400} />
            </motion.div>

            <div className="relative z-50">
              <motion.div
                initial={{ y: 0 }}
                animate={isSmallScreen ? { y: 0 } : { y: 1040 }} 
                transition={{ duration: 5, delay: 2 }}
              >
                <Image
                  src="/assets/Bottol-Down.png"
                  alt="Water bottle body"
                  width={260}
                  height={700}
                  className="relative w-full bottle-down"
                />
              </motion.div>

              {/* Bottle Cap */}
              <motion.div
                initial="initial"
                animate="animate"
                variants={{
                  initial: { y: 0 },
                  animate: {
                    y: isSmallScreen ? 0 : [0, -100, 1040], 
                    transition: { duration: 5, delay: 7, times: [0, 0.33, 1] },
                  },
                }}
                className="absolute top-0 w-full bottle-cap"
                onAnimationComplete={() => {
                  if (!isSmallScreen) {
                    window.scrollTo({
                      top: 1300,
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                <Image src="/assets/Bottol-Cap.png" alt="Water bottle cap" width={260} height={100} />
              </motion.div>
            </div>

            {!isSmallScreen && (
              <>
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 4 }}
                    className="absolute top-[400px] left-1/5 transform -translate-x-1/2 -translate-y-1/2 text-center z-20"
                  >
                    <h1 className="text-4xl sm:text-8xl font-bold mb-4">
                      The Ultimate Companion
                      <br />
                      for Hydration
                    </h1>
                    <p className="text-xl sm:text-3xl mb-4">
                      we believe in the power of hydration.
                      <br />
                      Our mission is simple yet vital
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-[#00d1ff] to-[#1a83ff] hover:from-[#1a83ff]  transition-all duration-300 text-white text-lg sm:text-2xl rounded-full">
                      Inquiry Now
                    </button>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between items-center w-full absolute top-0 mt-[750px] z-30">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="w-1/3 flex justify-start ml-4"
                  >
                    <Image src="/assets/2.svg" alt="Small Bottle 1" width={120} height={120} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="w-1/3 mr-4 flex justify-end"
                  >
                    <Image src="/assets/3.svg" alt="Small Bottle 2" width={120} height={120} />
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </main>

        <Features />
        <Products />
        <Footer />
      </div>
    </>
  );
};

export default BotolWebsite;