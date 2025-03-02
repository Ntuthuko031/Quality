import React, { useState, useEffect } from "react";

const FleetManagementTable = () => {

  //const driver = location.state.drivers.find(item => item.id == id)
  //console.log(driver);
  const [data, setData] = useState([]);
  // let dateAdded = driver.dateCreated.split("T");
  // dateAdded = dateAdded[0].split("-");
  // dateAdded = dateAdded[0];

  const admin = {admin: localStorage.getItem("authToken")};

  useEffect(()=>{
    fetch('https://qualitydrive.org/api/Vehicle/GetVehicles/?admin='+localStorage.getItem("authToken")) // Replace with your actual API endpoint
    .then(response => response.json())
    .then(data => { setData(data?data:[]); console.log("Images: ", data?data:null)})
    .catch(error => console.error('Error fetching images:', error));
    
  },[]);

  // const data = [
  //   {
  //     code: "ABC123",
  //     name: "John Doe",
  //     surname: "Doe",
  //     model: "Toyota Minibus",
  //     registration: "CA12HJ GP",
  //     hours: 6,
  //     trips: 4,
  //     distance: 120,
  //   },
  //   {
  //     code: "DEF345",
  //     name: "Jane Doe",
  //     surname: "Doe",
  //     model: "Ford Minibus",
  //     registration: "AS12AC GP",
  //     hours: 7,
  //     trips: 3,
  //     distance: 110,
  //   },
  //   {
  //     code: "HI567",
  //     name: "Adam Smith",
  //     surname: "Smith",
  //     model: "Nissan Minibus",
  //     registration: "GV84FE GP",
  //     hours: 5,
  //     trips: 5,
  //     distance: 130,
  //   },
  //   {
  //     code: "KLM789",
  //     name: "Emma Johnson",
  //     surname: "Johnson",
  //     model: "Toyota Minibus",
  //     registration: "EF78IG GP",
  //     hours: 8,
  //     trips: 12,
  //     distance: 100,
  //   },
  //   {
  //     code: "NOP910",
  //     name: "Michael Williams",
  //     surname: "Williams",
  //     model: "Toyota Minibus",
  //     registration: "PU14ME GP",
  //     hours: 6,
  //     trips: 4,
  //     distance: 120,
  //   },
  //   {
  //     code: "QRS101",
  //     name: "Olivia Brown",
  //     surname: "Brown",
  //     model: "Toyota Minibus",
  //     registration: "FK76QZ GP",
  //     hours: 7,
  //     trips: 5,
  //     distance: 110,
  //   },
  //   {
  //     code: "TUV102",
  //     name: "Sophia Miller",
  //     surname: "Miller",
  //     model: "Volkswagen Minibus",
  //     registration: "CX65BG GP",
  //     hours: 5,
  //     trips: 5,
  //     distance: 130,
  //   },
  //   {
  //     code: "XYZ103",
  //     name: "Liam Davis",
  //     surname: "Davis",
  //     model: "Nissan Minibus",
  //     registration: "AQ91UT GP",
  //     hours: 8,
  //     trips: 9,
  //     distance: 100,
  //   },
  // ];

  const Fleets = [
    {
      type: "Minibus",

      image: "/assets/toyota.jpeg",
    },
    {
      type: "Trucks",

      image: "/assets/trucks.jpeg",
    },
    { type: "Buses", updates: "4 NEW UPDATES", image: "/assets/busses.jpeg" },
    {
      type: "E-Hailing Vehicles",
      image: "/assets/hailing.png",
    },
    {
      type: "Delivery Vehicles",
      image: "/assets/trucks.jpeg",
    },
  ];

  return (
    <div className="flex gap-8">
      <div className=" bg-white w-[25%] flex flex-col justify-around p-2">
        {Fleets.map((fleet) => (
          <div key={fleet.type} className="flex flex-col items-center">
            <img
              src={fleet.image}
              alt={fleet.type}
              className="h-full w-full  object-contain"
            />
            <span className="text-sm font-semibold">{fleet.type}</span>
          </div>
        ))}
      </div>
      <div className=" bg-white rounded-lg shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-orange-600 text-white">
            <tr>
              <th className="p-3">Driver Code</th>
              <th className="p-3">Name</th>
              <th className="p-3">Surname</th>
              <th className="p-3">Car Model</th>
              <th className="p-3">Registration</th>
              <th className="p-3">Driving Hours Per Day</th>
              <th className="p-3">Trips Per Day</th>
              <th className="p-3">Distance Traveled (km)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((driver) => (
              <tr key={driver.id} className="border-b">
                <td className="p-3">{driver.id}</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3">{driver.name}</td>
                <td className="p-3">{driver.registration}</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FleetManagementTable;
