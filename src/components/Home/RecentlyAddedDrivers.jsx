import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecentlyAddedDrivers = () => {
  const navigate = useNavigate();
  const [ drivers, setDrivers ] = useState([]);
  const [ images, setImages ] = useState([]);

  
  
  useEffect(() => {
    fetch('https://qualitydrive.org/api/driver/GetDrivers/?admin='+localStorage.getItem("authToken")) // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {setDrivers(data?data.splice(0, 5):null); console.log("Drivers: ", data?data.splice(0, 5):null)})
        .catch(error => console.error('Error fetching users:', error));

    fetch('https://qualitydrive.org/api/image/GetAllImages') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {setImages(data?data:null); console.log("All Images: ", data?data:null)})
        .catch(error => console.error('Error fetching users:', error));

     
  //console.log(">>>", matchImage);

  }, []);

  // const drivers = [
  //   {
  //     name: "Sipho Khuzwayo",
  //     id: "ABC123",
  //     status: "Active",
  //     image: "/assets/sipho.jpeg",
  //   },
  //   {
  //     name: "Jane Smith",
  //     id: "CDE345",
  //     status: "Active",
  //     image: "/assets/Jane.jpeg",
  //   },
  //   {
  //     name: "Emma Moyo",
  //     id: "J1K789",
  //     status: "Active",
  //     image: "/assets/emma.jpeg",
  //   },
  // ];

  const handleGetInfoClick = (id) => {
    navigate(`/driver-profiles/${id}`, { state: { drivers: drivers, images: images }});
  };

  return (
    <div>
      <div className="bg-orange-600 p-2 mb-4 md:w-[25%] w-full">
        <h2 className="text-sm text-white">RECENTLY ADDED DRIVERS</h2>
      </div>
      <div className="bg-white shadow-md rounded-md ">
        <div className="flex space-x-4 justify-between">
          {drivers?drivers.map((driver) => {
               let matchImage = (images)?images.sort((a1, a2) => a2.userId - a1.userId).find(a => a.userId === driver.id):null;

            return <a href="javascript:void(0)" onClick={() => handleGetInfoClick(driver.id)}>
            <div key={driver.id} className="flex gap-4 items-center w-1/3">
              {(matchImage)?<img
                src={matchImage?matchImage.image:null}
                alt={driver.name}
                className="h-24 w-24 object-cover rounded-md "
              />:<div className="h-24 w-24 rounded-full object-cover mr-4" ><i className="glyphicon glyphicon-user" style={{fontSize: "55px", color: "grey"}}></i></div>}
              <div className="flex flex-col">
                <span className="text-sm text-black font-semibold">{driver.name}</span>
                <span className="text-xs text-gray-500">{driver.driverCode}</span>
                <span className="text-xs font-bold text-green-600">
                  status
                </span>
              </div>
            </div>
            </a>
}):null}
        </div>
      </div>
    </div>
  );
};

export default RecentlyAddedDrivers;
