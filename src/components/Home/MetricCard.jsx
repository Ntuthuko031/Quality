import React from "react";

const MetricCard = ({ title, value, title2, value2, title3, value3 }) => {
  return (
    <div
      className={`bg-white p-4 h-1/3 flex flex-col justify-center items-center shadow-md rounded-md `}
    >
      <h3 className="text-base text-orange-600">{title}</h3>
      <div className="text-2xl font-bold mb-1 text-black">{value}</div>
      <span className="text-sm text-black">{title2}</span>
      <span className="text-sm font-bold text-black mb-2">{value2}</span>
      <span className="text-sm text-black">{title3}</span>
      <span className="text-sm font-bold text-black">{value3}</span>
    </div>
  );
};

export default MetricCard;
