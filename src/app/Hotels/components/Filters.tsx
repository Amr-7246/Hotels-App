"use client";

import React, { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaSwimmingPool, FaDumbbell, FaHotTub, FaWifi, FaStar, FaRegStar } from 'react-icons/fa';
import { MdSpa, MdRestaurant } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useAppSelector } from '../../store/hooks';

const Filters: React.FC = () => {
  // * ################ Start State 
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(200);
  const [selectedRating, setSelectedRating] = useState<number>(1);
  const isToggle = useAppSelector((state) => state.filter.isToggle);


  const propertyTypes = ['Hotel', 'Resort', 'Apartment', 'Bed & Breakfast', 'Hostel'];
  const amenitiesOptions = [
    { name: 'Pool', icon: <FaSwimmingPool className="text-teal-300" size={20} /> },
    { name: 'Spa', icon: <MdSpa className="text-teal-300" size={20} /> },
    { name: 'Gym', icon: <FaDumbbell className="text-teal-300" size={20} /> },
    { name: 'Ocean View', icon: <FaSwimmingPool className="text-teal-300" size={20} /> },
    { name: 'Hot Tub', icon: <FaHotTub className="text-teal-300" size={20} /> },
    { name: 'Free WiFi', icon: <FaWifi className="text-teal-300" size={20} /> },
    { name: 'Restaurant', icon: <MdRestaurant className="text-teal-300" size={20} /> },
  ];
  // * ################ End State 


  // * ################ Start Logic
  const togglePropertyType = (type: string) => {
    setSelectedPropertyTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
    );
  };
  // * ################ End Logic
  return (
      <div className= {` ${ isToggle ? 'translate-x-[-100%]' : 'translate-x-[-90%]'} z-10  min-h-screen absolute py-5 w-[100%] top-0 md:w-[80%] md:min-h-[500px] md:rounded-xl md:translate-x-[-50%] md:translate-y-[-50%] md:top-[400px] md:overflow-scroll md:scrollbar-hide md:h-[600px] md:left-[50%] lg:w-[100%] lg:h-[1200px] lg:min-h-screen lg:overflow-hidden lg:relative lg:top-0 lg:left-[0px] lg:rounded-none lg:translate-x-[0%] lg:translate-y-[0%] mx-auto bg-stone-800 duration-[500ms] lg:duration-0 `}>
        <h1 className="border-b border-rose-900 flex flex-center pb-1">
          <span className="header-cliping w-fit">Filter</span>
        </h1>
        
        {/* ############# Start Property Type Filterisation ####################### */}
        <div className="filter-type-div">
          <h2 className="filter-type"> Property Type : </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {propertyTypes.map((type) => (

              <motion.div  className={` options ${   selectedPropertyTypes.includes(type)     ? 'border-teal-300 bg-gradient-to-r from-teal-900 to-zinc'     : 'border-stone-700 bg-gradient-to-r from-black to-white/10  ' }`} key={type} onClick={() => togglePropertyType(type)} whileTap={{ scale: 0.95 }}>

                {selectedPropertyTypes.includes(type) && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <AiOutlineCheck className="text-teal-300" />
                  </motion.div>
                )}
                <span className="">{type}</span>

              </motion.div>
            ))}
          </div>
        </div>
        {/* ############# End Property Type Filter ####################### */}

        {/* ############# Start Amenities Filter ####################### */}
        <div className="filter-type-div">
          <h2 className="filter-type">Amenities</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {amenitiesOptions.map((amenity) => (
              <motion.div  key={amenity.name} onClick={() => toggleAmenity(amenity.name)} whileTap={{ scale: 0.95 }} className={` options  ${  selectedAmenities.includes(amenity.name)  ? 'border-teal-300 bg-gradient-to-r from-teal-900 to-zinc'     : 'border-stone-700 bg-gradient-to-r from-black to-white/10  ' } `} >
                <div className=" " >{amenity.icon}</div>
                <span className=" " >{amenity.name}</span>

                {selectedAmenities.includes(amenity.name) && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    <AiOutlineCheck className="text-teal-300" />
                  </motion.div>
                )}

              </motion.div>
            ))}
          </div>
        </div>
        {/* ############# End Amenities Filter ####################### */}
        {/* ############# Start Price Range Filter ####################### */}
        <div className="filter-type-div">
          <h2 className="">
            <span className='filter-type' >Price Range:</span> <span className='text-green-500 font-yujiMai font-bold ' >  Up to   ${priceRange} </span>
          </h2>
          <div className="px-10 py-[20px] ">
            <Slider
              min={0}
              max={500}
              value={priceRange}
              onChange={(value) => setPriceRange(value as number)}
              styles={{
                track: { background: 'linear-gradient(to right, #d1d5db , #1c1c1e )', height: 4 },
                handle: {
                  borderColor: '#111827',
                  height: 20,
                  width: 20,
                  marginLeft: -10,
                  marginTop: -8,
                  backgroundColor: '#1F2937',
                },
                rail: { backgroundColor: '#111827', height: 4 },
              }}/>
          </div>
        </div>
        {/* ############# Start Price Range Filter ####################### */}
        {/* ############# Start Rating Filter ####################### */}
        <div className="filter-type-div">
          <h2 className="filter-type ">Minimum Rating</h2>
          <div className="flex flex-wrap flex-center gap-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div   key={star}   onClick={() => setSelectedRating(star)}   className="cursor-pointer"   whileTap={{ scale: 0.95 }}   whileHover={{ scale: 1.1 }} >
                < AnimatePresence mode="wait" >
                  {selectedRating >= star ? (
                    <motion.div
                      key="filled"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <FaStar className="text-yellow-500" size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <FaRegStar className="text-teal-800" size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <AnimatePresence mode="wait">
              <motion.span
                key={selectedRating}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="header-cliping text-center "
              >
                {selectedRating} Stars & Up
              </motion.span>
            </AnimatePresence>
            </div>
        </div>
          {/* ############# End Rating Filter ####################### */}
      </div>
  );
};

export default Filters;
