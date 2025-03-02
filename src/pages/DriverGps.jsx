import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useNavigate } from "react-router-dom";

import Pagination from "../components/DriverDetails/Pagination";

const drivers = [
  {
    name: "Emma Moyo",
    id: "IJK789",
    status: "Active",
    image: "/assets/emma.jpeg",
    position: { lat: -29.8579, lng: 31.0292 }, // Example coordinates
  },
  {
    name: "Jane Smith",
    id: "CDE345",
    status: "Active",
    image: "/assets/Jane.jpeg",
    position: { lat: -29.86, lng: 31.03 }, // Example coordinates
  },
  {
    name: "John Doe",
    id: "XYZ123",
    status: "Active",
    image: "/assets/emma.jpeg",
    position: { lat: -29.859, lng: 31.028 }, // Example coordinates
  },
  {
    name: "Sarah Connor",
    id: "T1000",
    status: "Active",
    image: "/assets/Jane.jpeg",
    position: { lat: -29.858, lng: 31.027 }, // Example coordinates
  },
];

const googleMap = {
  0: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.307568704959!2d28.02624053511164!3d-26.121512804064405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950cae2fdc0b21%3A0x448fd67310272132!2sPronto%20Italian%20Restaurant!5e0!3m2!1sen!2s!4v1728260363785!5m2!1sen!2s",
  1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1792.5692356634665!2d28.00085244768587!3d-26.029024946577277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9576a6ba7b0ec9%3A0xd1927b7188197f26!2sKingfisher%20Park!5e0!3m2!1sen!2s!4v1728260595044!5m2!1sen!2s",
  2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.1413008708187!2d28.002730411307006!3d-26.094305777049097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957497155b6ec1%3A0x822cadc74a9d6a73!2s163%20Bram%20Fischer%20Dr%2C%20Ferndale%2C%20Randburg%2C%202194%2C%20South%20Africa!5e0!3m2!1sen!2s!4v1728260670180!5m2!1sen!2s",
  3: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.307568704959!2d28.02624053511164!3d-26.121512804064405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950cae2fdc0b21%3A0x448fd67310272132!2sPronto%20Italian%20Restaurant!5e0!3m2!1sen!2s!4v1728260363785!5m2!1sen!2s",
};

export default function DriverGps() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // Map container style
  const containerStyle = {
    width: "100%",
    height: "100%", // Set to full height to contain within parent div
    borderRadius: "8px",
  };
  // Default center location for the map
  const center = [-29.8579, 31.0292]; // Example center coordinates for Durban

  const handleRedirect = () => {
    navigate("/analytics");
  };
  return (
    <div className='p-20 flex flex-col gap-12'>
      <div className='flex'>
        {/* Driver Cards Section */}
        <div className='flex flex-col gap-10 w-max bg-white'>
          {drivers.map((driver, index) => (
            <div
              onClick={() => setIndex(index)}
              // onClick={handleRedirect}
              key={driver.id}
              className='flex hover:bg-slate-100 cursor-pointer items-center w-[300px] rounded-lg'
            >
              <img
                src={driver.image}
                alt={driver.name}
                className='h-20 w-20 mr-4 rounded-lg object-cover'
              />
              <div>
                <h4 className='text-lg font-bold'>{driver.name}</h4>
                <p className='text-sm text-gray-500'>{driver.id}</p>
                <p className='text-sm font-bold text-green-600'>
                  {driver.status}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Map Section */}
        <div className='flex bg-white w-full  h-[500px] overflow-hidden'>
          <iframe
            src={googleMap[index]}
            width='100%'
            height='500'
            className='border-none w-full'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <Pagination />
    </div>
  );
}
