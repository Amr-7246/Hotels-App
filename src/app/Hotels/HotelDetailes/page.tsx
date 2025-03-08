"use client";
import GlobalNavBar from '@/app/components/GlobalNavBar';
import Search from '../components/Search'
import HotelHero from './components/HotelHero'
import { Hotels } from '../components/Data/hotelsData';
import { useState } from 'react';

export default function Page() {
    const [searchResults, setSearchResults] = useState<any[]>(Hotels);
    return (
        <div>
            <div className='pt-8'>
                <Search setSearchResults={setSearchResults} />
            </div>
            <div className= ' bg-stone-900 ' >
                <HotelHero/>
            </div>
        <GlobalNavBar/>
        </div>
    );
}