"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { Hotels } from './Data/hotelsData';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleFilter } from '../../store/slices/Filter';
import Loading from '@/app/components/Loading';

type HotelsCardProps = {
  SearchResults: any[];
};

const HotelsCard: React.FC<HotelsCardProps> = ({ SearchResults }) => {
  const dispatch = useAppDispatch();
  const isToggle = useAppSelector((state) => state.filter.isToggle);

  const customeHotels = SearchResults && SearchResults.length > 0 ? SearchResults : Hotels;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [SearchResults]);

  return (
    <div id = 'Hotels'  className='  pb-[100px] w-full bg-stone-900 shadow-lg shadow-black lg:h-[1200px] md:overflow-y-scroll '>
      <div className="text-white/30 w-full px-8 pb-8">
        {/* Header */}
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
        {/* Header */}
        {/* Hotels Cards */}
          {isLoading ? (
              <Loading />
          ) : (
            <Link href={'/Hotels/HotelDetailes'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customeHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="border overflow-hidden border-stone-700 rounded-lg hover:bg-white/5 bg-black/50 duration-[700ms] transition-colors"
                  >
                    <Image
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      className="w-full h-[250px] object-cover mb-4"
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
          )}
        {/* Hotels Cards */}
      </div>
    </div>
  );
};

export default HotelsCard;
