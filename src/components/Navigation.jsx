import React from "react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  // Function to map routes to link names
  const getActiveLinkName = () => {
    switch (location.pathname) {
      case "/home":
        return "Home";
      case "/driver-profile":
        return "Driver Profile";
      case "/fleet-management":
        return "Fleet Management";
      case "/notifications":
        return "Notifications";
      case "/driver-dash":
        return "Driver Dasg Prototype";
      case "/driver-gps":
        return "Driver GPS";
      default:
        return "Home";
    }
  };

  return (
    <div className="flex w-full ">
     
      <div className="w-[20%]  bg-orange-600 flex justify-center items-center gap-4">
        <img
          src="/assets/search.png"
          alt="Search"
          className="h-4 cursor-pointer"
        />
        <img
          src="/assets/filter_alt.png"
          alt="Filter"
          className="h-4 cursor-pointer"
        />
        <img
          src="/assets/notifications.png"
          alt="Notifications"
          className="h-4 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navigation;
