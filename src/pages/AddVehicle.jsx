import React from "react";

export default function AddVehicle() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-md shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-8">
          Vehicle Profile Creation
        </h2>
        <form className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="vehicleMake"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Make
            </label>
            <input
              type="text"
              id="vehicleMake"
              name="vehicleMake"
              placeholder="Toyota"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="vehicleModel"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Model
            </label>
            <input
              type="text"
              id="vehicleModel"
              name="vehicleModel"
              placeholder="Corolla"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="vehicleType"
              className="block text-sm font-medium text-gray-700"
            >
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="minibus">Minibus</option>
              <option value="bus">Bus</option>
              <option value="truck">Truck</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="assignedDriver"
              className="block text-sm font-medium text-gray-700"
            >
              Assigned Driver
            </label>
            <input
              type="text"
              id="assignedDriver"
              name="assignedDriver"
              placeholder="Sipho Khuzwayo"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="mileage"
              className="block text-sm font-medium text-gray-700"
            >
              Mileage
            </label>
            <input
              type="text"
              id="mileage"
              name="mileage"
              placeholder="50000km"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-colors"
            >
              Create Vehicle Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
