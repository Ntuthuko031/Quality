import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ImageUpload from "./ImageUpload";

const DriverDetails = () => {
  const { id } = useParams();
  const [ imageUploadTog, setImageUploadTog ] = useState(false);
  const location = useLocation();
  const [ images, setImages ] = useState([]);
  

  const driver = location.state.drivers.find(item => item.id == id)
  //console.log(driver);
  let dateAdded = driver.dateCreated.split("T");
  dateAdded = dateAdded[0].split("-");
  dateAdded = dateAdded[0];

  useEffect(()=>{
    fetch('https://qualitydrive.org/api/image/GetImages/?UserId='+id) // Replace with your actual API endpoint
    .then(response => response.json())
    .then(data => {setImages(data?data:null); console.log("Images: ", data?data:null)})
    .catch(error => console.error('Error fetching images:', error));
    
  },[driver]);


  console.log("images", images);

  const uploadDone = () => {
    fetch('https://qualitydrive.org/api/image/GetImages/?UserId='+id) // Replace with your actual API endpoint
    .then(response => response.json())
    .then(data => {setImages(data?data:null); console.log("Images: ", data?data:null)})
    .catch(error => console.error('Error fetching images:', error));
  }
  
  // Dummy data for demonstration. Replace this with actual data fetching.
  // const driver = {
  //   id: "ABC123",
  //   name: "Sipho Khuzwayo",
  //   image: "/assets/sipho.jpeg",
  //   registrationYear: "2023",
  //   assignedVehicle: "Toyota Minibus",
  //   trips: "7,000 trips",
  //   distanceTravelled: "75,000 km",
  //   hoursDriven: "100 hours",
  // };

  return (
    <div className="py-10 px-36">
      {" "}
      <div className="p-8 bg-white rounded-md shadow-lg">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            {(images.length > 0)?<img
              src={(images.length > 0)?images[images.length - 1].image:null}
              alt={driver.name}
              className="h-24 w-24 rounded-full object-cover mr-4"
            />:<div className="h-24 w-24 rounded-full object-cover mr-4" ><i className="glyphicon glyphicon-user" style={{fontSize: "55px", color: "grey"}}></i></div>}
            {(imageUploadTog)?<a onClick={() => setImageUploadTog(!imageUploadTog)} title="Upload Profile Image" href="javascript:void(0)" style={{textDecoration: "none", color: "#112445"}}><span className="glyphicon glyphicon-camera" style={{position: "absolute", left: "28%", top: "175px"}}></span></a>:<a onClick={() => setImageUploadTog(!imageUploadTog)} title="Upload Profile Image" href="javascript:void(0)" style={{textDecoration: "none", color: "#ea580c"}}><span className="glyphicon glyphicon-camera" style={{position: "absolute", left: "28%", top: "175px"}}></span></a>}
            {(imageUploadTog)?<ImageUpload uploadDone={(e) => uploadDone(e)} UserId={driver.id} updateVisibility={() => setImageUploadTog(false)} />:null}
            <div>
              <h1 className="text-2xl text-black font-bold">{driver.name} {driver.surname}</h1>
              <span className="text-sm text-gray-500 font-bold">Driver</span>
              <p className="text-sm text-gray-500 font-bold">{driver.driverCode}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-md">
              Edit
            </button>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-md">
              Deactivate
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>
            <div>
              <h2 className="text-lg text-black font-bold">Registration Year</h2>
              <p className="text-black">{dateAdded}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>
            <div>
              <h2 className="text-lg text-black font-bold">Trips</h2>
              <p className="text-black">{driver.trips}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>
            <div>
              <h2 className="text-lg text-black font-bold">Distance Travelled</h2>
              <p className="text-black">{driver.distanceTravelled}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>
            <div>
              <h2 className="text-lg text-black font-bold">Hours Driven</h2>
              <p className="text-black">{driver.hoursDriven}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 bg-gray-100 rounded-md flex justify-center items-center">
              <img
                src="/assets/calender.png"
                alt="Registration Year"
                className="h-5"
              />
            </div>

            <div>
              <h2 className="text-lg text-black font-bold">Assigned Vehicle</h2>
              <p className="text-black">{driver.assignedVehicle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
