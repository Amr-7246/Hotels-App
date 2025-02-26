"use client";
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import { fetchHotels } from '../../store/slices/ServerHotels';

import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Search: React.FC = () => {
    
return (
    <div className=" flex flex-center mx-auto gap-5 flex-wrap w-[90%] pb-10 ">
        
        <div className="input ">
            <span className="l-icon-input"><FaMapLocationDot/></span>
            <div className=" text-input">
                <span className="text-input-top-span">where to ? </span>
                <span className="text-input-down-span">Cairo. Cairo Egypt . . .</span>
            </div>
            <span className="r-icon-input"><IoMdArrowDropdownCircle/></span>
            {/* <div className=" drop-list ">
                Hi there
            </div> */}
        </div>
        <div className="input ">
            <span className="l-icon-input"><IoMdCalendar/></span>
            <div className=" text-input">
                <span className="text-input-top-span">Dates </span>
                <span className="text-input-down-span">5 Mar - 7Mar</span>
            </div>
            <span className="r-icon-input"><IoMdArrowDropdownCircle/></span>
            {/* <div className=" drop-list ">
                Hi there
            </div> */}
        </div>
        <div className="input ">
            <span className="l-icon-input"><FaUserFriends/></span>
            <div className=" text-input">
                <span className="text-input-top-span">Travellers </span>
                <span className="text-input-down-span">7 travellers . .  1 room  </span>
            </div>
            <span className="r-icon-input"><IoMdArrowDropdownCircle/></span>
            {/* <div className=" drop-list ">
                Hi there
            </div> */}
        </div>
    </div>
)}
export default Search