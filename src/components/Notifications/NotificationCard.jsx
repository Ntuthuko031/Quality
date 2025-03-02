import React from "react";

const NotificationCard = ({
  title,
  sensor,
  reason,
  status,
  vehicle,
  time,
  date,
}) => {
  return (
    <div className="flex justify-between items-center bg-white p-4 mb-2 shadow rounded-lg">
      <div className="flex items-center">
        <img
          src={`/assets/screw.png`}
          alt={title}
          className="h-12 w-12 mr-4 rounded-full"
        />
        <div>
          <h4 className="text-lg font-bold">{title}</h4>
          <p className="text-sm text-gray-500">Sensor: {sensor}</p>
          <p className="text-sm text-gray-500">Reason: {reason}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold">{status}</p>
        <p className="text-sm text-gray-500">{vehicle}</p>
        <p className="text-sm text-gray-500">
          {time} {date}
        </p>
      </div>
      <div>
        <img src="/assets/arrow.png" alt="" />
      </div>
    </div>
  );
};

export default NotificationCard;
