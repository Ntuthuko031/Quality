import React from "react";
import MetricCard from "./MetricCard";

const HomeMetrics = () => {
  return (
    <div className="space-y-8">
      <div
        className={`bg-white p-4 flex flex-col justify-center items-center shadow-md rounded-md `}
      >
        <h3 className="text-sm text-black mb-1 font-bold">
          Average Safety Score
        </h3>
        <div className="text-[12px] font-bold w-full text-center px-3 py-2 rounded-md text-white bg-orange-600">
          Safety Target: <span className="text-white text-sm">7</span>
        </div>
        <span className="text-2xl text-black font-bold">6.5/10</span>
        <span className="text-[10px] text-orange-600 font-bold mb-2">
          Current Score
        </span>
      </div>
      <MetricCard
        title="Total Hours"
        value="6,989hrs"
        title2=" Previous Quarter"
        value2="5,009hrs"
        title3=" Average per Vehicle"
        value3="750hrs"
      />
      <MetricCard
        title="Total Distance"
        value="12,989hrs"
        title2=" Previous Quarter"
        value2="4,349hrs"
        title3=" Average per Vehicle"
        value3="967hrs"
      />
    </div>
  );
};

export default HomeMetrics;
