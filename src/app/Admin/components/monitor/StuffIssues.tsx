import React from 'react'

const StuffIssues = () => {
  return (
    <div className='monitor-schema  py-5 max-w-[400px] h-[400px] '>
        <div className='bg-stone-600 flex flex-center  rounded-lg w-[80%]'>
            <span className={`h-[30px] w-[50px] mx-5  bg-rose-500 rounded-full  `}></span>
            message ma fofkam can back with it and how to make it work
        </div>
        <div className='monitor-schema overflow-hidden !w-[300px] !h-[220px]'>
            <div className={`bg-emerald-900 w-[200px] shadow-xl shadow-stone-800 h-[200px] overflow-hidden rounded-full`}>
                <div className={`bg-sky-700 w-[100px] h-[100px] relative `} > 
                    <span className={`absolute top-[40%] font-bold text-orange-950 rotate-[-45deg] `} > Stuff Issues </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StuffIssues