import React from "react";
import NotificationCard from "./NotificationCard";

const NotificationsSection = () => {
  const notificationsToday = [
    {
      title: "Tire pressure is too high",
      sensor: "tire-pressure",
      reason: "Sensor reading was in the red zone",
      status: "Vehicle Checked",
      vehicle: "Toyota Minibus",
      time: "16:06",
      date: "25/07/2024",
    },
    {
      title: "Fuel level is too low",
      sensor: "fuel-level",
      reason: "Sensor reading was in the red zone",
      status: "Vehicle Checked",
      vehicle: "Toyota Minibus",
      time: "16:06",
      date: "25/07/2024",
    },
    {
      title: "Oil pressure is too low",
      sensor: "oil-pressure",
      reason: "Sensor reading was in the red zone",
      status: "Vehicle Checked",
      vehicle: "Toyota Minibus",
      time: "16:06",
      date: "25/07/2024",
    },
    {
      title: "Engine temperature is too high",
      sensor: "engine-temperature",
      reason: "Sensor reading was in the red zone",
      status: "Vehicle Checked",
      vehicle: "Toyota Minibus",
      time: "16:06",
      date: "25/07/2024",
    },
  ];

  const notificationsYesterday = [
    {
      title: "Tire pressure is too high",
      sensor: "tire-pressure",
      reason: "Sensor reading was in the red zone",
      status: "Vehicle Checked",
      vehicle: "Toyota Minibus",
      time: "16:06",
      date: "24/07/2024",
    },
    {
      title: "Fuel level is too low",
      sensor: "fuel-level",
      reason: "Sensor reading was in the red zone",
      status: "Vehicle Checked",
      vehicle: "Toyota Minibus",
      time: "16:06",
      date: "24/07/2024",
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-white bg-orange-600 px-4 py-1 w-[10%]">
          Today
        </h3>
        {notificationsToday.map((notification, index) => (
          <NotificationCard key={index} {...notification} />
        ))}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white bg-primary-text px-4 py-1 w-[12%]">
          Yesterday
        </h3>
        {notificationsYesterday.map((notification, index) => (
          <NotificationCard key={index} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;
