"use client";
import GlobalNavBar from "../components/GlobalNavBar";

export default function Page() {
    const HomeCards : string[] = [
        'Monetor' , 'Controlle' , 'featuers',
        'Monetor' , 'Controlle' , 'featuers',
        'Monetor' , 'Controlle' , 'featuers',
    ]
return (
    <div className='SASS-schema flex flex-wrap gap-5'>
        {HomeCards.map((card , i ) => (
            <div className='w-[80%] md:w-[40%] lg:w-[30%] h-[200px] flex flex-center bg-gray-950 border border-stone-800 rounded-lg'  key={i}> 
                <button className='font-orbitron duration-[500ms] w-[40%] bg-stone-600 text-zinc font-black text-[15px] px-0 py-2 rounded-md  hover:bg-transparent  border border-transparent hover:border hover:text-stone-600 hover:border-stone-600' >{card}</button>
            </div>
        ))}
        <GlobalNavBar/>
    </div>
);
}
