"use client";

import React from 'react';
import Image, { StaticImageData } from "next/image";
import { Hotels } from './Data/hotelsData';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFilter } from '../../store/slices/Filter';
import Rooms from '../HotelDetailes/components/Rooms';
import { 
  Hotel_1, Hotel_2, Hotel_3, Hotel_4, Hotel_5, Hotel_6,
  Hotel_7, Hotel_8, Hotel_9, Hotel_10, Hotel_11, Hotel_12,
  Hotel_13, Hotel_14, Hotel_15, Hotel_16, Hotel_17, Hotel_18,
  Hotel_19, Hotel_20, Hotel_21, Hotel_22, Hotel_23
} from '../../../assets/index';


const HotelsCard = () => {
  const dispatch = useAppDispatch();
  const isToggle = useAppSelector((state) => state.filter.isToggle);

  return (
    <div className='  bg-stone-900 w-full shadow-lg shadow-black lg:h-[1200px] overflow-y-scroll scrollbar-default '>
      <div className=" text-white/30 px-8 pb-8 ">
      
        <div className='flex items-end justify-between lg:pt-8'>
          <h1 className="text-3xl header-cliping w-fit border-b-[3px] rounded-[4px] border-rose-900 font-bold mb-6">
            Our Hotels
          </h1>
          <button
            className='btn lg:hidden'
            onClick={() => dispatch(toggleFilter())}
          >
            Filter
          </button>
        </div>
        <Link href={'/Hotels/HotelDetailes'}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6   ">
            {Hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="  border overflow-hidden border-stone-700 rounded-lg  hover:bg-white/5 bg-black/50 duration-[700ms] transition-colors"
              >
                <Image
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  className="w-full h-[250px] object-cover  mb-4"
                />
                <div className='m-5'>
                  <h2 className="text-2xl font-bold text-teal-800">{hotel.name}</h2>
                  <p className="mt-1 text-sm">{hotel.address}</p>
                  <p className="mt-2 text-stone-300">{hotel.description}</p>
                  <p className="mt-2 font-semibold text-green-500">
                    ${hotel.pricePerNight} per night
                  </p>
                  <p className="mt-5 border-t border-stone-800 pt-3 flex items-center text-sm text-stone-400 font-black">
                    Rating: 
                    <span className='text-green-400 ml-3'>{hotel.rating}</span>
                    <span className='text-yellow-500 ml-3'><FaStar /></span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HotelsCard;
