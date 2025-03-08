"use client";
import Image from "next/image";
import Link from "next/link";
import { Hero  , Banner } from "@/assets";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import Search from "../Hotels/components/Search";
import { useState } from "react";
import { Hotels } from "../Hotels/components/Data/hotelsData";

const HeroSection = () => {
    const [searchResults, setSearchResults] = useState<any[]>(Hotels); 

return (
    <div className="bg-black py-10 flex flex-center flex-wrap gap-y-10 border-b border-stone-800 shadow-lg shadow-stone-800 ">

        <div className="  w-[90%] md:w-[80%] relative rounded-[40px] overflow-hidden max-w-[600px]">
            <div className="bg-stone-800/60 z-[5] flex flex-center absolute w-[100%] h-[100%] ">
                <span className="header-cliping border-b border-orange-900 " >Your Beast Hotel Choise</span>
            </div>
                <Image src={Hero} alt="Company Hero" className="w-[100%]" />
        </div>

        <div className=" flex flex-center gap-5 flex-wrap w-[90%]  ">
            <Search setSearchResults={setSearchResults} />
        </div>

    </div>
)
}

export default HeroSection