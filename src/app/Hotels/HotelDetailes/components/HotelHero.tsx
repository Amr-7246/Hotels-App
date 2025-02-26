"use client";

import React, { JSX } from 'react'
import Image from "next/image";
import { useAppSelector } from '../../../store/hooks';
import { FaMapMarkerAlt, FaInfoCircle, FaStar, FaDollarSign, } from 'react-icons/fa';
import Rooms from './Rooms';
import { Hotels } from '../../components/Data/hotelsData';
import { FaSwimmingPool, FaDumbbell } from 'react-icons/fa';
import {  MdWifi } from 'react-icons/md';
import { MdBreakfastDining, MdOutlineBreakfastDining } from 'react-icons/md';
import { MdSpa } from 'react-icons/md';
import { MdStar } from 'react-icons/md';
import { span } from 'framer-motion/client';


const HotelHero: React.FC  = () => {
  // ^  Scroll function that finds the element by id and scrolls to it smoothly
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // const Hotels = useAppSelector((state) => state.Hotels.hotels);
  const hotel = Hotels[1];
  const amenityIcons: Record<string, JSX.Element> = {
    Pool: <FaSwimmingPool size={24} />,
    Gym: <FaDumbbell size={24} />,
    Spa: <MdSpa size={24} />,
    Free_Breakfast: <MdBreakfastDining size={24} />,
    WiFi: <MdWifi size={24} />,
  };

  return (
    <div className =' min-h-screen w-full scroll-smooth '>
      {/* Hero */}
      <div className=' h-[300px] md:h-[400px] flex flex-center gap-5 md:px-10  bg-black rounded-[0px]'> 
        <span   className= 'w-[85%] max-w-[600px] md:h-[90%] h-[80%]  relative overflow-hidden rounded-lg border border-stone-600 shadow-lg shadow-stone-700 ' >
          <Image layout="fill" objectFit="cover" src={ hotel.imageUrl } alt="Hotel Hero"   className="w-[100%]" />
        </span>
        <div className=' relative md:flex md:flex-col justify-between hidden md:w-[40%] max-w-[380px] h-[90%]  ' >
          <span className= 'w-[100%] max-w-[600px] h-[48%] relative overflow-hidden rounded-lg border border-stone-600 shadow-lg shadow-stone-700 ' >
            <Image layout="fill" objectFit="cover" src={ Hotels[5].imageUrl } alt="Hotel Hero"   className="w-[100%]" />
          </span>

          <span className= 'w-[100%] max-w-[600px] h-[48%] relative overflow-hidden rounded-lg border border-stone-600 shadow-lg shadow-stone-700 ' >
            <Image layout="fill" objectFit="cover" src={ Hotels[3].imageUrl } alt="Hotel Hero"   className="w-[100%]" />
          </span>
        </div>
      </div>
      {/* Hero */}
      {/* navbar */}
      <div className=' sticky top-0 z-50 p-3 bg-stone-950 shadow-stone-800 shadow-lg border-b border-stone-800 ' >
        <span  onClick={() => scrollToSection('overview')}  className=' hotel-nav border-r border-stone-600 '>Overview</span>
        <span onClick={() => scrollToSection('rooms')}  className=' hotel-nav '>Rooms</span>
        {/* <span className=' hotel-nav '>Overview</span>
        <span className=' hotel-nav '>Overview</span> */}
      </div>
      {/* navbar */}
      {/* Overview */}
      <div className='min-h-[300px] p-5 border-b lg:px-[20%] border-stone-900'>
        <h1 className='header-cliping'>{hotel.name}</h1>
        <div className="flex items-center">
          <span className='block text-green-400 font-bold'>{hotel.rating}</span>
          <div className="flex ml-2 gap-x-2">
            <i className="fas fa-star text-yellow-500"><FaStar/></i>
            <i className="fas fa-star text-yellow-500"><FaStar/></i>
            <i className="fas fa-star text-yellow-500"><FaStar/></i>
            <i className="fas fa-star text-yellow-500"><FaStar/></i>
            <i className="fas fa-star-half-alt text-yellow-500 relative"><FaStar/><div className='absolute bg-stone-900 rounded-[10%] h-[20px] w-[20px] bottom-[0px] left-[8px] '></div></i>
          </div>
        </div>
        <span className='hover:text-white cursor-pointer text-stone-600 duration-500'>See All Reviews</span>
        <div id="overview"  className=' flex flex-center mt-8 flex-wrap border-t border-stone-600 py-5 '>
          <div className='w-full flex flex-center flex-wrap'>
            <h1 className=' font-black text-teal-700 pb-2 text-center w-[100%] '>About this property</h1>
            <p className='text-stone-400 text-center '>Luxury hotel with 5 restaurants, near Egypt International Exhibitions Center</p>
          </div>
          <div className='flex flex-center p-5 flex-wrap my-8 bg-black/50 border border-stone-800 rounded-lg  gap-5'>
              <span className=' w-full header-cliping mb-5 '  >Featuers</span>
              {hotel.amenities.map((amenity, i) => (
              <span
                className="bg-stone-800 text-teal-500 rounded-md min-w-[100px] min-h-[100px] flex flex-center"
                key={i}
              >
                {amenityIcons[amenity] || amenity}
              </span>
            ))}
          </div>
            <span className= 'text-center w-[100%] hover:text-white text-stone-600 duration-500 cursor-pointer block '>See All about this property</span>
        </div>
      </div>
      {/* Overview */}
      {/* Rooms*/}
      <div id="rooms"  >
        <Rooms/>
      </div>
      {/* Rooms*/}
    </div>
  )
}

export default HotelHero