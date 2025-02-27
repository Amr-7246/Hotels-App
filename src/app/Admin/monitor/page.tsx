"use client";
import HotelsProductivity from '../components/monitor/HotelsProductivity'
import RoomsMonitor from '../components/monitor/RoomsMonitor'
import ClinteIssues from '../components/monitor/ClinteIssues'
import StuffIssues from '../components/monitor/StuffIssues'
import GlobalNavBar from '@/app/components/GlobalNavBar';

export default function Page() {
    return (
    <div className=' flex flex-wrap flex-center'>
        <div className='w-[80%] mt-5 bg-gray-950 h-[100px] flex flex-center border border-stone-700 rounded-lg max-w-[850px]'>
            <div className='flex flex-wrap relative gap-5 flex-center'>
                <span className='text-zinc rounded-full cursor-pointer hover:bg-stone-700 duration-[500ms]  w-[30px] h-[30px] overflow-hidden full border '></span>
                <input className='text-zinc input rounded-lg' type="text" placeholder='Finde Hotel . . . ' />  
                <div className='absolute bg-sky-500 top-[100%] w-[100%] hidden'> Hotel Cairo</div>
            </div>
        </div>
        <HotelsProductivity/>
        <div className=' pb-[100px] lg:max-w-[900px] flex flex-center flex-wrap gap-x-5 '>
            <RoomsMonitor/>
            <ClinteIssues/>
            <StuffIssues/>
        </div>
        <GlobalNavBar/>
    </div>
    );
}