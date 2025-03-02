import React from "react";
import Pagination from "../components/DriverDetails/Pagination";
export default function VehicleAnalytics() {
  const data = [
    {
      code: "ABC123",
      name: "John",
      surname: "Doe",
      model: "Toyota Minibus",
      registration: "CA12JH GP",
      maintenanceAlert: 6,
      enginePerformance: 4,
      fuelConsumption: 120,
      tyreCondition: 320,
      emissionData: 45,
      loadManagement: 72,
    },
    {
      code: "DEF345",
      name: "Jane",
      surname: "Doe",
      model: "Ford Minibus",
      registration: "AS12AC GP",
      maintenanceAlert: 7,
      enginePerformance: 3,
      fuelConsumption: 110,
      tyreCondition: 250,
      emissionData: 72,
      loadManagement: 21,
    },
    {
      code: "HIJ567",
      name: "Adam",
      surname: "Smith",
      model: "Nissan Minibus",
      registration: "GV84FE GP",
      maintenanceAlert: 5,
      enginePerformance: 5,
      fuelConsumption: 130,
      tyreCondition: 400,
      emissionData: 61,
      loadManagement: 68,
    },
    {
      code: "KLM789",
      name: "Emma",
      surname: "Johnson",
      model: "Toyota Minibus",
      registration: "EF78IG GP",
      maintenanceAlert: 8,
      enginePerformance: 12,
      fuelConsumption: 100,
      tyreCondition: 410,
      emissionData: 66,
      loadManagement: 90,
    },
    {
      code: "NOP910",
      name: "Michael",
      surname: "Williams",
      model: "Toyota Minibus",
      registration: "PU14EW GP",
      maintenanceAlert: 6,
      enginePerformance: 4,
      fuelConsumption: 120,
      tyreCondition: 378,
      emissionData: 68,
      loadManagement: 96,
    },
    {
      code: "QRS101",
      name: "Olivia",
      surname: "Brown",
      model: "Toyota Minibus",
      registration: "FK76QZ GP",
      maintenanceAlert: 7,
      enginePerformance: 5,
      fuelConsumption: 110,
      tyreCondition: 102,
      emissionData: 54,
      loadManagement: 59,
    },
    {
      code: "TVU102",
      name: "Sophia",
      surname: "Miller",
      model: "Volkswagen Minibus",
      registration: "CX65SI GP",
      maintenanceAlert: 5,
      enginePerformance: 5,
      fuelConsumption: 130,
      tyreCondition: 484,
      emissionData: 32,
      loadManagement: 78,
    },
  ];
  return (
    <div className='p-20'>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden overflow-x-auto'>
        <table className='w-full text-left'>
          <thead className='bg-primary-text text-white'>
            <tr>
              <th className='p-4 font-normal'>Driver Code</th>
              <th className='p-4 font-normal'>Name</th>
              <th className='p-4 font-normal'>Surname</th>
              <th className='p-4 font-normal'>Car Classification</th>
              <th className='p-4 font-normal'>Registration</th>
              <th className='p-4 font-normal'>Maintenance Alert</th>
              <th className='p-4 font-normal'>Engine Performance</th>
              <th className='p-4 font-normal'>Fuel Consumption</th>
              <th className='p-4 font-normal'>Tyre Pressure & Condition</th>
              <th className='p-4 font-normal'>Emission Data</th>
              <th className='p-4 font-normal'>Load Management</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vehicle, index) => (
              <tr key={index} className='border-b'>
                <td className='p-4'>{vehicle.code}</td>
                <td className='p-4'>{vehicle.name}</td>
                <td className='p-4'>{vehicle.surname}</td>
                <td className='p-4'>{vehicle.model}</td>
                <td className='p-4'>{vehicle.registration}</td>
                <td className='p-4'>{vehicle.maintenanceAlert}</td>
                <td className='p-4'>{vehicle.enginePerformance}</td>
                <td className='p-4'>{vehicle.fuelConsumption}</td>
                <td className='p-4'>{vehicle.tyreCondition}</td>
                <td className='p-4'>{vehicle.emissionData}</td>
                <td className='p-4'>{vehicle.loadManagement}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
