import React from "react";

const RecentNotifications = () => {
  const notifications = [
    {
      type: "Tire Pressure",
      updates: "2 NEW UPDATES",
      image: "/assets/tire.jpeg",
    },
    {
      type: "Fuel Level",
      updates: "2 NEW UPDATES",
      image: "/assets/fuel.jpeg",
    },
    {
      type: "Oil Pressure",
      updates: "2 NEW UPDATES",
      image: "/assets/oil.jpeg",
    },
    {
      type: "Engine Temperature",
      updates: "2 NEW UPDATES",
      image: "/assets/engine.jpeg",
    },
  ];

  return (
    <div>
      <div className="bg-orange-600 p-2 mb-4 md:w-[25%] w-full">
        <h2 className="text-sm text-white">RECENT NOTIFICATIONS</h2>
      </div>

      <div className="bg-white p-4 shadow-md rounded-md">
        <div className="flex space-x-4 justify-between">
          {notifications.map((notification) => (
            <div
              key={notification.type}
              className="flex flex-col items-center w-1/4  border"
            >
              <img
                src={notification.image}
                alt={notification.type}
                className="rounded-xl h-20 w-40 mb-2 object-cover border"
              />
              <span className="text-sm font-semibold">{notification.type}</span>
              <span className="text-[10px] font-bold text-orange-600">
                {notification.updates}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentNotifications;
