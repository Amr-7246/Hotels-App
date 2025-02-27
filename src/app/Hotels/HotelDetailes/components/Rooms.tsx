"use client";
import React from 'react'
import { useAppSelector } from '../../../store/hooks';
import Image from "next/image";

const Rooms = () => {
  const Hotels = useAppSelector((state) => state.Hotels.hotels);
  const hotel = Hotels[0];
  return (
  <div className=' flex flex-center flex-wrap gap-5 py-5' >
    {hotel.rooms.map((Room , i) => (
      <div key={Room.id }  className='w-[80%] md:w-[35%] min-w-[350px]  overflow-hidden border bg-black/50 border-black rounded-lg min-h-[400px] shadow-lg shadow-stone-800 ' >
        {/* Hero */}
        <div className=' relative h-[300px] overflow-hidden border-b border-stone-800 '>
          <Image
            src={Room.images[0]}
            alt="Hotel Hero"
            layout="fill" objectFit="cover"
            className="w-[100%]"
          />
        </div>
        {/* Hero */}
        {/* Detailes */}
        <div className='p-5'>
          <h1 className='header-cliping' >{Room.name}</h1>
          <div className='flex flex-wrap '>
            {Room.amenities.map((amenitie ) => (
              <span key={amenitie}  className='text-stone-500 block m-3  ' >
                {amenitie}
              </span>
            ))}
          </div>
        </div>
        {/* Detailes */}
        {/* Reserve */}
        <div  className='flex flex-wrap p-5 flex-center'>
            <div className='flex justify-around w-full items-center'>
              <span className='text-green-500 px-2 rounded-lg flex flex-center bg-stone-700/50 border-b-5 border-rose-500 min-w-[100px] min-h-[50px]'>{Room.availableRooms} Rooms available </span>
              <span className='text-green-500 px-2 rounded-lg flex flex-center bg-stone-700/50 border-b-5 border-rose-500 min-w-[100px] min-h-[50px]'>{Room.pricePerNight} $ per night</span>
            </div>
            <div className='flex flex-center w-full mt-5 border-t border-stone-800 mb-[-15px]'>
              <button className='btn'>Reserve Now</button>
            </div>
        </div>
        {/* Reserve */}
      </div> 
    ))}
  </div >
  )
}

export default Rooms