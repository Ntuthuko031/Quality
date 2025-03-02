import React from "react";
import RecentlyAddedDrivers from "../components/Home/RecentlyAddedDrivers";
import FleetUpdates from "../components/Home/FleetUpdates";
import RecentNotifications from "../components/Home/RecentNotifications";
import HomeMetrics from "../components/Home/HomeMetrics";

function Home() {
  return (
    <div className="p-4 flex gap-4 w-full">
      <div className="space-y-8 w-[80%]">
        <RecentlyAddedDrivers />
        <FleetUpdates />
        <RecentNotifications />
      </div>
      <div className="w-[20%]">
        <HomeMetrics />
      </div>
    </div>
  );
}

export default Home;
