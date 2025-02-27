"use client";
import Search from './components/Search'
import HotelsCard from './components/HotelsCard'
import Filters from './components/Filters'
import GlobalNavBar from '../components/GlobalNavBar';

export default function Page() {

return (
    <div className=' flex flex-wrap w-full '>
        <div className='mt-[30px]  pb-5  h-full md:mt-5 mx-auto z-10 overflow-visible '>
            <Search/> 
        </div>
        <div className= ' flex flex-wrap ' >
            <div className= ' lg:w-[25%] ' >
                <Filters/>
            </div>
            <div className= ' w-full lg:w-[75%] ' >
                <HotelsCard/>
            </div>
        </div>
        <GlobalNavBar/>
    </div>
);
}
