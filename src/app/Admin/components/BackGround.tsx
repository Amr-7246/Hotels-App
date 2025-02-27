import React from 'react'

const BackGround = () => {
  return (
    <div className=' h-[100%] w-[100%] absolute'>
        <div className='bg-main-div w-[130px] h-[130px]  rotate-[45deg]  left-[82%] top-[-2%] '>
            <div className='bg-inner-div'></div>
        </div>
        <div className='bg-main-div w-[200px] h-[200px]  rotate-[45deg]  left-[-20%] md:left-[0] top-[-5%] '>
            <div className='bg-inner-div'></div>
        </div>
        <div className='bg-main-div w-[150px] h-[150px]  rotate-[0deg]  left-[-20%] md:left-[-5%] top-[35%] '>
            <div className='bg-inner-div'></div>
        </div>
        <div className='bg-main-div w-[150px] h-[150px]  rotate-[45deg]  left-[30%] top-[33%] '>
            <div className='bg-inner-div'></div>
        </div>
        <div className='bg-main-div w-[130px] h-[130px]  rotate-[45deg]  left-[82%] top-[-20%] '>
            <div className='bg-inner-div'></div>
        </div>
    </div>
  )
}

export default BackGround