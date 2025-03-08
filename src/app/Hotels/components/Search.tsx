"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaUserFriends, FaSearch } from "react-icons/fa";
import { IoMdCalendar, IoMdArrowDropdownCircle } from "react-icons/io";
import gsap from "gsap";
import { Hotels } from "./Data/hotelsData";
import HotelsCard from "./HotelsCard";
import Link from "next/link";

const Search: React.FC<{ setSearchResults: (results: any[]) => void }> = ({ setSearchResults }) => {
// * #################### Start Hooks 
    const [whichOpened, setWhichOpened] = useState<string | null>(null);
    const dropListRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [location, setLocation] = useState("Egypt , Cairo . . .");
    const [dates, setDates] = useState("5 Mar - 7 Mar");
    const [travellers, setTravellers] = useState("7 travellers, 1 room");
    // const [SeachResults, setSearchResults] = useState<any[]>([]);
// * #################### End Hooks 
// * #################### Start Logic 
    const handleToggleDropdown = (e: React.MouseEvent<HTMLElement>) => {
        const name = e.currentTarget.getAttribute("data-name");
        setWhichOpened((prev) => (prev === name ? null : name));
    };
    const handleSearch = () => {
        const filtered = Hotels.filter((hotel: any) =>
            hotel.address.toLowerCase().includes(location.toLowerCase())
        );
        setSearchResults(filtered);
    };
// * #################### End Logic 
// * #################### Start Animation 
    useEffect(() => {
        Object.keys(dropListRefs.current).forEach((key) => {
            const dropList = dropListRefs.current[key];
            if (dropList) {
                if (whichOpened === key) {
                    gsap.to(dropList, { height: "auto", opacity: 1, duration: 0.3 });
                } else {
                    gsap.to(dropList, { height: 0, opacity: 0, duration: 0.3 });
                }
            }
        });
    }, [whichOpened]);
// * #################### End Animation 

return (
    <div className="flex justify-center mx-auto gap-2 flex-wrap w-[90%] pb-10">
        {/* Address */}
            <div className="input-div">
                <div className="input flex items-center gap-3">
                    <span className="l-icon-input text-blue-600 text-xl">
                        <FaMapLocationDot />
                    </span>
                    <div className="text-input">
                        <span className="text-input-top-span font-semibold">Where to?</span>
                        <span className="text-input-down-span text-gray-600">
                            {location}
                        </span>
                    </div>
                    <span
                        onClick={handleToggleDropdown}
                        data-name="address"
                        className="r-icon-input cursor-pointer text-blue-600 text-xl"
                    >
                        <IoMdArrowDropdownCircle />
                    </span>
                </div>
                <div
                    ref={(el) => {
                        if (el) {
                            dropListRefs.current["address"] = el;
                        }
                    }}
                    className="drop-list overflow-hidden opacity-0 h-0"
                >
                    <input
                        type="text"
                        placeholder="Enter location..."
                        onChange={(e) => setLocation(e.target.value)}
                        className="drop-input"
                    />
                </div>
            </div>
        {/* Adress */}
        {/* Date */}
            <div className="input-div">
                <div className="input flex items-center gap-3">
                    <span className="l-icon-input text-green-600 text-xl">
                        <IoMdCalendar />
                    </span>
                    <div className="text-input">
                        <span className="text-input-top-span font-semibold">Dates</span>
                        <span className="text-input-down-span text-gray-600">{dates}</span>
                    </div>
                    <span
                        onClick={handleToggleDropdown}
                        data-name="date"
                        className="r-icon-input cursor-pointer text-green-600 text-xl"
                    >
                        <IoMdArrowDropdownCircle />
                    </span>
                </div>
                <div
                    ref={(el) => {
                        if (el) {
                            dropListRefs.current["date"] = el;
                        }
                    }}
                    className="drop-list overflow-hidden opacity-0 h-0"
                >
                    <input
                        onChange={(e) => setDates(e.target.value)}
                        type="date"
                        className="drop-input"
                    />
                </div>
            </div>
        {/* Date */}
        {/* Travellers */}
            <div className="input-div">
                <div className="input flex items-center gap-3">
                    <span className="l-icon-input text-orange-600 text-xl">
                        <FaUserFriends />
                    </span>
                    <div className="text-input">
                        <span className="text-input-top-span font-semibold">Travellers</span>
                        <span className="text-input-down-span text-gray-600">
                            {travellers}
                        </span>
                    </div>
                    <span onClick={handleToggleDropdown} data-name="travellers" className="r-icon-input cursor-pointer text-orange-600 text-xl" >
                        <IoMdArrowDropdownCircle />
                    </span>
                </div>
                <div
                    ref={(el) => {
                        if (el) {
                            dropListRefs.current["travellers"] = el;
                        }
                    }}
                    className="drop-list overflow-hidden opacity-0 h-0"
                >
                    <input onChange={(e) => setTravellers(e.target.value)} type="number" placeholder="Number of travellers" className="drop-input" />
                </div>
            </div>
        {/* Travellers */}
        {/* Search Button */}
            <div className="w-full flex justify-center mt-4">
                <Link href={'/Hotels'}>
                    <button  onClick={handleSearch}  className = " text-xl duration-500 border border-stone-500  hover:text-teal-600 hover:border-teal-600 hover:scale-[1.1] p-3 bg-blue-500 text-stone-600 rounded-full " >
                        <FaSearch />
                    </button>
                </Link>
            </div>
        {/* Search Results */}
        {/* Search Results */}
    </div>
);
};

export default Search;
