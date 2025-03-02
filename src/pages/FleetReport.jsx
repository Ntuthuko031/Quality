import React from "react";

function FleetReport() {
  const data = [
    {
      code: "ABC123",
      name: "John",
      surname: "Doe",
      model: "Toyota Minibus",
      registration: "CA12HJ GP",
      hours: 6,
      trips: 4,
      distance: 120,
    },
    {
      code: "DEF345",
      name: "Jane",
      surname: "Doe",
      model: "Ford Minibus",
      registration: "AS12AC GP",
      hours: 7,
      trips: 3,
      distance: 110,
    },
    {
      code: "HI567",
      name: "Adam",
      surname: "Smith",
      model: "Nissan Minibus",
      registration: "GV84FE GP",
      hours: 5,
      trips: 5,
      distance: 130,
    },
    {
      code: "KLM789",
      name: "Emma",
      surname: "Johnson",
      model: "Toyota Minibus",
      registration: "EF78IG GP",
      hours: 8,
      trips: 12,
      distance: 100,
    },
    {
      code: "NOP910",
      name: "Michael",
      surname: "Williams",
      model: "Toyota Minibus",
      registration: "PU14ME GP",
      hours: 6,
      trips: 4,
      distance: 120,
    },
    {
      code: "QRS101",
      name: "Olivia",
      surname: "Brown",
      model: "Toyota Minibus",
      registration: "FK76QZ GP",
      hours: 7,
      trips: 5,
      distance: 110,
    },
    {
      code: "TUV102",
      name: "Sophia",
      surname: "Miller",
      model: "Volkswagen Minibus",
      registration: "CX65BG GP",
      hours: 5,
      trips: 5,
      distance: 130,
    },
  ];

  return (
    <div className="p-20">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-primary-text text-white">
            <tr>
              <th className="p-4">Driver Code</th>
              <th className="p-4">Name</th>
              <th className="p-4">Surname</th>
              <th className="p-4">Car Model</th>
              <th className="p-4">Registration</th>
              <th className="p-4">Driving Hours Per Day</th>
              <th className="p-4">Trips Per Day</th>
              <th className="p-4">Distance Traveled (km)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((driver, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{driver.code}</td>
                <td className="p-4">{driver.name}</td>
                <td className="p-4">{driver.surname}</td>
                <td className="p-4">{driver.model}</td>
                <td className="p-4">{driver.registration}</td>
                <td className="p-4">{driver.hours}</td>
                <td className="p-4">{driver.trips}</td>
                <td className="p-4">{driver.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FleetReport;
