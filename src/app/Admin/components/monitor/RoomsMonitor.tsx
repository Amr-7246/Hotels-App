"use client";
import React from 'react'

const RoomsMonitor = () => {
  return (
    <div className='monitor-schema overflow-hidden max-w-[400px] h-[400px] '>
        <div className={`bg-black flex flex-center w-[100%] min-h-[100px] border-b border-stone-600 `}>
            <div className={`w-[80%] h-[40px] border overflow-hidden border-stone-600 rounded-lg relative`}>
                <div className={`w-[80%] h-[100%] flex flex-center font-black text-stone-800 rounded-r-xl bg-green-500`} >
                  Fill Rooms
                </div>
            </div>
        </div>
        <div className='flex flex-wrap gap-x-3 flex-center font-bold my-10 h-[200px]'>
            <div className={`bg-cyan-600 p-2 rounded-lg text-center`}> <span className={`block`}>53</span>Empity Rooms Count</div>
            <div className={`bg-lime-600 p-2 rounded-lg text-center`}> <span className={`block`}>640</span>Fill Rooms Count</div>
            <div className={`bg-amber-900 p-2 rounded-lg text-center`}> <span className={`block`}>85 : 02 : 15 </span>Next Chick out After </div>
        </div>
    </div>
  )
}

export default RoomsMonitor