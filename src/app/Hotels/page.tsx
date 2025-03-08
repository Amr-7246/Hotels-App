"use client";
import { useState } from "react";
import Search from './components/Search';
import HotelsCard from './components/HotelsCard';
import Filters from './components/Filters';
import GlobalNavBar from '../components/GlobalNavBar';
import { Hotels } from "./components/Data/hotelsData";

export default function Page() {
    const [searchResults, setSearchResults] = useState<any[]>(Hotels); // Default to all hotels

    return (
        <div className='flex flex-wrap w-full'>
            <div className='mt-[30px] pb-5 h-full md:mt-5 mx-auto z-10 overflow-visible'>
                <Search setSearchResults={setSearchResults} />
            </div>
            <div className=' flex w-full flex-wrap '>
                <div className='lg:w-[25%]'>
                    <Filters setSearchResults={setSearchResults}  />
                </div>
                <div className='w-full  lg:w-[75%]'>
                    <HotelsCard SearchResults={searchResults} />
                </div>
            </div>
            <GlobalNavBar />
        </div>
    );
}
