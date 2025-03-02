import React, {useEffect, useState} from "react";
import DriverProfileHeader from "../components/DriverDetails/DriverProfileHeader";
import DriverProfileList from "../components/DriverDetails/DriverProfileList";
import Pagination from "../components/DriverDetails/Pagination";

function DriversProfile() {
  const [drivers, setDrivers] = useState([]);
  const [images, setImages] = useState([]);
  const [inn, setIn] = useState(0);
  const [out, setOut] = useState(10);

  const admin = {admin: localStorage.getItem("authToken")};

  const GetData = (r) => {
    fetch('https://qualitydrive.org/api/driver/GetDrivers/?admin='+r) // Replace with your actual API endpoint
    .then(response => response.json())
    .then(data => {setDrivers(data?data.splice(inn, out):null); console.log("Drivers: ", data?data:null)})
    .catch(error => console.error('Error fetching users:', error));
  }
  useEffect(() => {

    GetData(localStorage.getItem("u-Token"));
        
    fetch('https://qualitydrive.org/api/image/GetAllImages') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {setImages(data?data:null); console.log("All Images: ", data?data:null)})
        .catch(error => console.error('Error fetching users:', error));


        
  }, [inn]);

  return (
    <div className="py-10 px-20">
      <DriverProfileHeader drivers={drivers} />
      <DriverProfileList drivers={drivers} images={images} />
      <Pagination drivers={drivers} setInPrev={() => setIn(e => e - 10)} setOutPrev={() => setOut(e => e - 10)} setIn={() => setIn(e => e + 10)} setOut={() => setOut(e => e + 10)} />
    </div>
  );
}

export default DriversProfile;
