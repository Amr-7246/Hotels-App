"use client";

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
// import { fetchHotels } from './store/slices/ServerHotels';
import Image from "next/image";
import HeroSection from "./components/Hero";
import Slider from "./components/Slider";
import Map from "./components/Map";
import Root from "./components/Root";
import GlobalNavBar from "./components/GlobalNavBar";
import type { AppProps } from 'next/app';
import { wrapper } from './store/store';

export default function Home() {
//   const dispatch = useAppDispatch();
//     const { hotels, loading, error } = useAppSelector((state) => state.hotelsSlice);

//     useEffect(() => {
//     dispatch(fetchHotels());
// }, [dispatch]);

//     if (loading) return <p>Loading hotels...</p>;
//     if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="">
        <HeroSection/>
        <Map/>
        <Slider/>
        <Root/>
        <GlobalNavBar/>
      </div>
    </>
  );
}


      // <div className=" bg-rose-900  shadow-lg shadow-stone-800 flex flex-center ">
      //   <Link href={'/Admin'}>
      //     <button className="btn" >Admin</button>
      //   </Link>
      // </div>