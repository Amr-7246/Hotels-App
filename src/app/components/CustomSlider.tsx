"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Slide {
  src: StaticImageData;
  alt: string;
  text: string;
}

interface CustomSliderProps {
  slides: Slide[];
}

const CustomSlider: React.FC<CustomSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Determine slides per view based on window width
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Toggle functions for previous/next slide
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(slides.length - slidesPerView, 0) : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= slides.length - slidesPerView ? 0 : prev + 1
    );
  };

  // Each slide takes a percentage width based on the number visible
  const slideWidthPercentage = 100 / slidesPerView;

  return (
    <>
      
      <div className="relative w-full overflow-hidden bg-zinc-900">
        {/* Slider container animated with Framer Motion */}
        <motion.div
          className="flex"
          animate={{ x: -(currentIndex * slideWidthPercentage) + "%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-4"
              style={{ width: `${slideWidthPercentage}%` }}
            >
              <Link href={'/Hotels'}>
                <div className="relative h-64 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl duration-300">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            <Link href={'/Hotels'}>
              <p className="mt-2 text-center cursor-pointer hover:text-stone-600 duration-500 text-sm text-white">{slide.text}</p>
            </Link>
            </div>
          ))}
        </motion.div>
        {/* Toggle Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-2 focus:outline-none"
        >
          {/* <span className='bg-black duration-[500ms] rounded-full hover:bg-transparent hover:border hover:border-stone-600'><FaArrowLeft /></span> */}
          <div className ='bg-black w-[40px] text-[18px] text-stone-600 hover:text-black h-[40px] flex flex-center  duration-[500ms] rounded-full hover:bg-transparent hover:border hover:border-stone-600'>
            <FaArrowLeft />
          </div>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full p-2 focus:outline-none"
        >
          <div className ='bg-black w-[40px] text-[18px] text-stone-600 hover:text-black h-[40px] flex flex-center  duration-[500ms] rounded-full hover:bg-transparent hover:border hover:border-stone-600'>
            <FaArrowRight />
          </div>
        </button>
      </div>
    </>
  );
};

export default CustomSlider;
