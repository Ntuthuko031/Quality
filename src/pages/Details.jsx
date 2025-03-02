import React from "react";
import DriverDetails from "../components/DriverDetails/DriverDetails";
import Slider from "../components/DriverDetails/Slider";

export default function Details() {
  return (
    <div>
      <DriverDetails />
      <div className="p-8">
        <h2 className="text-2xl text-black font-bold mb-4">Recently Added Drivers</h2>
        <Slider />
      </div>
    </div>
  );
}
