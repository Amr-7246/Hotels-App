"use client";

import React , {useState } from 'react'
import dynamic from 'next/dynamic'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


// * Fixing leaflet icon issues in Next.js 😵‍💫
(L.Icon.Default as any).mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
})

// * Dynamically import our MapComponent to avoid SSR issues (Leaflet only loves the browser 🌐)
const DynamicMap = dynamic(() => Promise.resolve(MapComponent), { ssr: false })

// * #################### Start Actual Map component using react-leaflet components
const MapComponent = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)


    // & Coordinates for Egypt 🇪🇬
    const egyptCoordinates: [number, number] = [26.8206, 30.8025]
    // & Select tile URL based on the current theme
    const tileUrl = isDarkMode
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

// & Update attribution based on the selected tile layer
    const attribution = isDarkMode
    ? '&copy; <a href="https://carto.com/">CARTO</a> contributors'
    : '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'

    // & Coordinates for Egypt 🇪🇬
    return (
    <>
    <div className="h-full relative w-full">
        {/* <button
            onClick={() => {setIsDarkMode(!isDarkMode)}}
            className=" top-[-10%] m-4 px-4 absolute py-2 bg-gray-800 z-50 text-white rounded-full shadow-lg hover:bg-gray-700 transition">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
        <MapContainer
            center={egyptCoordinates}
            zoom={6}
            scrollWheelZoom={true}
            className="h-full w-full "
        >
            <TileLayer
                attribution= {attribution}
                url={tileUrl}
            />
            <Marker position={egyptCoordinates}>
                <Popup>Egypt, yo! 😎</Popup>
            </Marker>
        </MapContainer>
    </div>
    </>
    )
}
// * #################### End Actual Map component using react-leaflet components

const Map: React.FC = () => {
return (
    <div className="flex z-1 duration-[500ms] flex-center flex-wrap flex-col md:flex-row gap-10 mt-10">
        <div className="bg-black/40 md:bg-transparent md:border-none md:shadow-none shadow-lg shadow-stone-800 border border-stone-800 rounded-lg w-[90%] lg:w-[40%] flex items-center justify-center p-4">
            <div className="text-white text-center">
                <h2 className=" w-[85%] mx-auto header-cliping  border-b-[4px] rounded-[5%] mb-[40px] border-stone-800 ">Welcome to Global Stays!</h2>
                <p className="mt-2 text-lg text-white/50 font-hindMysuru ">
                    Your journey awaits Explore our map and unlock incredible experiences around the world.
                </p>
            </div>
        </div>
        <div className="bg-black/40 z-1 shadow-lg overflow-hidden shadow-stone-800 border border-stone-800 rounded-xl h-[300px] w-[90%] lg:w-[40%]">
            <DynamicMap />
        </div>
    </div>
)
}

export default Map
