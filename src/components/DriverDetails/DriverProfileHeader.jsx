import React from "react";

const DriverProfileHeader = ({drivers}) => {
  return (
    <div className="flex items-center mb-8">
      <div className="bg-orange-600 text-xs text-white py-2 px-4 font-bold">
        ACTIVE DRIVERS
      </div>
      <span className="text-white text-xs bg-primary-text py-2 px-4 font-bold">
        TOTAL: {drivers.length}
      </span>
    </div>
  );
};

export default DriverProfileHeader;
