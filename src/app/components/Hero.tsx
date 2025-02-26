import Image from "next/image";
import Link from "next/link";
import { Hero  , Banner } from "@/assets";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdCalendar } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const HeroSection = () => {
return (
    <div className="bg-black py-10 flex flex-center flex-wrap gap-y-10 border-b border-stone-800 shadow-lg shadow-stone-800 ">

        <div className="  w-[90%] md:w-[80%] relative rounded-[40px] overflow-hidden max-w-[600px]">
            <div className="bg-stone-800/60 z-[5] flex flex-center absolute w-[100%] h-[100%] ">
                <span className="header-cliping border-b border-orange-900 " >Your Beast Hotel Choise</span>
            </div>
                <Image src={Hero} alt="Company Hero" className="w-[100%]" />
        </div>

        <div className=" flex flex-center gap-5 flex-wrap w-[90%]  ">
            
            <div className="input ">
                <span className="l-icon-input"><FaMapLocationDot/></span>
                <div className=" text-input">
                    <span className="text-input-top-span">where to ? </span>
                    <span className="text-input-down-span">Cairo. Cairo Egypt . . .  </span>
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

    </div>
)
}

export default HeroSection