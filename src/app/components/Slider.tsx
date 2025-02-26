"use client";


import React from 'react'
import CustomSlider from './CustomSlider'
import Link from 'next/link'
import { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setMyData } from '../store/slices/myDataSlice';
import { 
    Hotel_1, Hotel_2, Hotel_3, Hotel_4, Hotel_5, Hotel_6,
    Hotel_7, Hotel_8, Hotel_9, Hotel_10, Hotel_11, Hotel_12,
    Hotel_13, Hotel_14, Hotel_15, Hotel_16, Hotel_17, Hotel_18,
    Hotel_19, Hotel_20, Hotel_21, Hotel_22, Hotel_23
} from '../../assets/index';


const Slider: NextPage = () => {
    const dispatch = useAppDispatch();
    const { name } = useAppSelector((state) => state.myData);
    
    const slides = [
        { src: Hotel_1 , alt: "Slide 1", text: "Caption One" },
        { src: Hotel_2 , alt: "Slide 2", text: "Caption Two" },
        { src: Hotel_3 , alt: "Slide 3", text: "Caption Three" },
        { src: Hotel_4 , alt: "Slide 4", text: "Caption Four" },
    ];
    const handleUpdateName = () => {
        dispatch(setMyData('New Name'));
    };
    
return (
    <>
        <div className="w-full mx-auto max-w-6xl p-4">
            <div className=" flex pl-5 m-5 h-[50px] border-b-[5px] rounded-b-md border-black">
            <Link href={'/Hotels'}>
                <span className="header-cliping cursor-pointer hover:pl-5 duration-[500ms]">Recommended stays for you . .</span> 
            </Link>
            </div>
            <CustomSlider slides={slides} />
        </div>
        <div className="w-full mx-auto max-w-6xl p-4">
            <div className=" flex pl-5 m-5 h-[50px] border-b-[5px] rounded-b-md border-black">
                <span className="header-cliping">Discover your new favourite stay . .</span> 
            </div>
            <CustomSlider slides={slides} />
        </div>
    </>
)
}

export default Slider