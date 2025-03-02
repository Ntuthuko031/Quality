import React from "react";
import DriverCard from "./DriverCard";

const DriverProfileList = (props) => {
  const drivers = [
    {
      name: "Sipho Khuzwayo",
      id: "ABC123",
      status: "Active",
      registrationYear: "2023",
      assignedVehicle: "Toyota Minibus",
      image: "/assets/sipho.jpeg",
    },
    {
      name: "Jane Smith",
      id: "CDE345",
      status: "Active",
      registrationYear: "2023",
      assignedVehicle: "Toyota Minibus",
      image: "/assets/Jane.jpeg",
    },
    {
      name: "Emma Moyo",
      id: "J1K789",
      status: "Active",
      registrationYear: "2023",
      assignedVehicle: "Toyota Minibus",
      image: "/assets/emma.jpeg",
    },
    {
      name: "Thembi Nkosi",
      id: "OPQ102",
      status: "Active",
      registrationYear: "2023",
      assignedVehicle: "Toyota Minibus",
      image: "/assets/Jane.jpeg",
    },
  ];

  return (
    <div className="space-y-4">
      {props.drivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} drivers={props.drivers} images={props.images} />
      ))}
    </div>
  );
};

export default DriverProfileList;
