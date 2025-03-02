import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const [drivers, setDrivers] = useState([]);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

 
  
  useEffect(() => {
    fetch('https://qualitydrive.org/api/driver/GetDrivers/?admin='+localStorage.getItem("authToken")) // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {setDrivers(data?data:null); console.log("Drivers: ", data?data:null)})
        .catch(error => console.error('Error fetching users:', error));

    fetch('https://qualitydrive.org/api/image/GetAllImages') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {setImages(data?data:null); console.log("All Images: ", data?data:null)})
        .catch(error => console.error('Error fetching users:', error));

     
  }, []);

 const handleGetInfoClick = (id) => {
    navigate(`/driver-profiles/${id}`, { state: { drivers: drivers, images: images }});
  };
  return (
    <div className="scrolls overflow-x-auto w-full">
      <div className="flex space-x-4 w-max">
        {drivers.map((driver) => {
                 let matchImage = (images)?images.sort((a1, a2) => a2.userId - a1.userId).find(a => a.userId === driver.id):null;

          return <a href="javascript:void(0)" onClick={() => handleGetInfoClick(driver.id)}>
          <div
            key={driver.id}
            className="flex items-center w-[300px] rounded-lg"
          >
            {(matchImage)?<img
              src={matchImage?matchImage.image:null}
              alt={driver.name}
              className="h-20 w-20 mr-4 rounded-lg object-cover"
              height={"80px"} width={"80px"}
            />:<div className="h-24 w-24 rounded-full object-cover mr-4" ><i className="glyphicon glyphicon-user" style={{fontSize: "55px", color: "grey"}}></i></div>}
            <div>
              <h4 className="text-lg text-black font-bold">{driver.name}</h4>
              <p className="text-sm text-gray-500">{driver.driverCode}</p>
              <p className="text-sm font-bold text-green-600">
                {driver.status}
              </p>
            </div>
          </div>
          </a>
})}
      </div>
    </div>
  );
};

export default Slider;
