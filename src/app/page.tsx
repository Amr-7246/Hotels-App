"use client";

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Image from "next/image";
import HeroSection from "./components/Hero";
import Slider from "./components/Slider";
import Root from "./components/Root";
import GlobalNavBar from "./components/GlobalNavBar";
import type { AppProps } from 'next/app';
import { wrapper } from './store/store';
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./components/Map"), { ssr: false });


export default function Home() {
  return (
    <>
      <div className="">
        <HeroSection/>
        <DynamicMap />
        <Slider/>
        <Root/>
        <GlobalNavBar/>
      </div>
    </>
  );
}
