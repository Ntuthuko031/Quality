import React from "react";

const FleetUpdates = () => {
  const fleets = [
    { type: "Minibus", updates: "4 NEW UPDATES", image: "/assets/toyota.jpeg" },
    { type: "Trucks", updates: "2 NEW UPDATES", image: "/assets/trucks.jpeg" },
    { type: "Buses", updates: "4 NEW UPDATES", image: "/assets/busses.jpeg" },
    {
      type: "E-Hailing Vehicles",
      updates: "2 NEW UPDATES",
      image: "/assets/hailing.png",
    },
  ];

  return (
    <div>
      <div className="bg-orange-600 p-2 mb-4 md:w-[15%] w-full">
        <h2 className="text-sm text-white">FLEET UPDATES</h2>
      </div>
      <div className="bg-white p-6 shadow-md rounded-md">
        <div className="flex space-x-4 justify-between">
          {fleets.map((fleet) => (
            <div key={fleet.type} className="flex flex-col items-center w-1/4">
              <img
                src={fleet.image}
                alt={fleet.type}
                className="h-full w-full  object-contain"
              />
              <span className="text-sm font-semibold">{fleet.type}</span>
              <span className="text-[10px] font-bold text-orange-600">
                {fleet.updates}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FleetUpdates;
