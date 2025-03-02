import React from "react";
import Pagination from "../components/DriverDetails/Pagination";
export default function Analytics() {
  const data = [
    {
      code: "ABC123",
      name: "John",
      surname: "Doe",
      model: "Toyota Minibus",
      registration: "CA12JH GP",
      closeBreaks: 6,
      speedIndex: 4,
      acceleration: 120,
      braking: 320,
      safetyScore: 45,
      driverPerformanceScore: 72,
    },
    {
      code: "DEF345",
      name: "Jane",
      surname: "Doe",
      model: "Ford Minibus",
      registration: "AS12AC GP",
      closeBreaks: 7,
      speedIndex: 3,
      acceleration: 110,
      braking: 250,
      safetyScore: 72,
      driverPerformanceScore: 21,
    },
    {
      code: "HIJ567",
      name: "Adam",
      surname: "Smith",
      model: "Nissan Minibus",
      registration: "GV84FE GP",
      closeBreaks: 5,
      speedIndex: 5,
      acceleration: 130,
      braking: 400,
      safetyScore: 61,
      driverPerformanceScore: 68,
    },
    {
      code: "KLM789",
      name: "Emma",
      surname: "Johnson",
      model: "Toyota Minibus",
      registration: "EF78IG GP",
      closeBreaks: 8,
      speedIndex: 12,
      acceleration: 100,
      braking: 410,
      safetyScore: 66,
      driverPerformanceScore: 90,
    },
    {
      code: "NOP910",
      name: "Michael",
      surname: "Williams",
      model: "Toyota Minibus",
      registration: "PU14EW GP",
      closeBreaks: 6,
      speedIndex: 4,
      acceleration: 120,
      braking: 378,
      safetyScore: 68,
      driverPerformanceScore: 96,
    },
    {
      code: "QRS101",
      name: "Olivia",
      surname: "Brown",
      model: "Toyota Minibus",
      registration: "FK76QZ GP",
      closeBreaks: 7,
      speedIndex: 5,
      acceleration: 110,
      braking: 102,
      safetyScore: 54,
      driverPerformanceScore: 59,
    },
    {
      code: "TVU102",
      name: "Sophia",
      surname: "Miller",
      model: "Volkswagen Minibus",
      registration: "CX65SI GP",
      closeBreaks: 5,
      speedIndex: 5,
      acceleration: 130,
      braking: 484,
      safetyScore: 32,
      driverPerformanceScore: 78,
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
              <th className='p-4 font-normal'>Close Breaks (L/100km)</th>
              <th className='p-4 font-normal'>
                Speed Index (Ave. speed/max speed)
              </th>
              <th className='p-4 font-normal'>Acceleration Index</th>
              <th className='p-4 font-normal'>Braking Index</th>
              <th className='p-4 font-normal'>Safety Score</th>
              <th className='p-4 font-normal'>Driver Performance Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((driver, index) => (
              <tr key={index} className='border-b'>
                <td className='p-4'>{driver.code}</td>
                <td className='p-4'>{driver.name}</td>
                <td className='p-4'>{driver.surname}</td>
                <td className='p-4'>{driver.model}</td>
                <td className='p-4'>{driver.registration}</td>
                <td className='p-4'>{driver.closeBreaks}</td>
                <td className='p-4'>{driver.speedIndex}</td>
                <td className='p-4'>{driver.acceleration}</td>
                <td className='p-4'>{driver.braking}</td>
                <td className='p-4'>{driver.safetyScore}</td>
                <td className='p-4'>{driver.driverPerformanceScore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}
