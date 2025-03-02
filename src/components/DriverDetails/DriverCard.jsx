import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DriverCard = ({ driver, drivers, images }) => {
  const navigate = useNavigate();
  const uniqueData = [...images].reverse();
  const matchImage = (images)?uniqueData.find(a => a.userId === driver.id):null;
  console.log("list imaages", matchImage);

  //console.log(">>>", matchImage); .sort((a1, a2) => a2.userId - a1.userId)

  const handleGetInfoClick = () => {
    navigate(`/driver-profiles/${driver.id}`, { state: { drivers: drivers }});
  };
  return (
    <div className="flex items-center justify-between bg-white mb-2 shadow-sm rounded-lg">
      <div className="flex items-center">
        {matchImage?<img
          src={matchImage?matchImage.image:null}
          alt={driver.name}
          className="h-20 w-20 mr-4 rounded-lg object-cover"
        />:<div className="h-24 w-24 rounded-full object-cover mr-4" ><i className="glyphicon glyphicon-user" style={{fontSize: "55px"}}></i></div>}
        <div>
          <h4 className="text-lg text-black font-bold">{driver.name}</h4>
          <p className="text-sm text-gray-500">{driver.driverCode}</p>
          <p className="text-sm font-bold text-green-600">{driver.status}</p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="text-sm text-gray-600 flex items-center gap-4">
          <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
            <img
              src="/assets/calender.png"
              alt="Registration Year"
              className="h-5"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-primary-text font-bold">
              Regitration Year
            </span>
            <span className="text-[12px] font-bold">
              {driver.registrationYear}
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-4">
          <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
            <img
              src="/assets/car.png"
              alt="Registration Year"
              className="h-5"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primary-text font-bold">
              Assigned Vehicle
            </span>
            <span className="text-[12px] font-bold">
              {driver.assignedVehicle}
            </span>
          </div>
        </div>
        <div className="px-4">
          <button
            onClick={handleGetInfoClick}
            className="bg-primary-text text-white px-4 py-2 rounded-md hover:bg-primary-text"
          >
            Get Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
