import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  const handleClick = () => {
    navigate("/add-driver");
  };

  const addVehicle = () => {
    navigate("/add-vehicle");
  };

  return (
    <div className="w-[20%] bg-white h-screen flex flex-col justify-between px-4 py-8">
      {/* Navigation Links */}
      <nav className="flex flex-col gap-10">
        <ul className="space-y-1 ps-10">
          <li
            className={`p-2 ${
              isActive("/home") ? "bg-slate-200" : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/home"
              className={`flex items-center ${
                isActive("/home")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img src="/assets/home.png" alt="Home" className="h-4 mr-3" />
              <span className="text-sm text-primary-text">Home</span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              isActive("/driver-profile")
                ? "bg-slate-200"
                : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/driver-profile"
              className={`flex items-center ${
                isActive("/driver-profile")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img
                src="/assets/users.png"
                alt="Driver Profiles"
                className="h-3 mr-3"
              />
              <span className="text-sm text-primary-text">Driver Profiles</span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              isActive("/fleet-management")
                ? "bg-slate-200"
                : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/fleet-management"
              className={`flex items-center ${
                isActive("/fleet-management")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img
                src="/assets/fleet.png"
                alt="Fleet Management"
                className="h-3 mr-3"
              />
              <span className="text-sm text-primary-text">
                Fleet Management
              </span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              isActive("/notifications") ? "bg-slate-200" : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/notifications"
              className={`flex items-center ${
                isActive("/notifications")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img
                src="/assets/notif.png"
                alt="Notifications"
                className="h-5 mr-3"
              />
              <span className="text-sm text-primary-text">Notifications</span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              isActive("/driver-gps") ? "bg-slate-200" : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/driver-gps"
              className={`flex items-center ${
                isActive("/driver-gps")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img
                src="/assets/notif.png"
                alt="Driver-gps"
                className="h-5 mr-3"
              />
              <span className="text-sm text-primary-text">Driver GPS</span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              isActive("/driver-dash") ? "bg-slate-200" : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/driver-dash"
              className={`flex items-center ${
                isActive("/driver-dash")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img
                src="/assets/notif.png"
                alt="Driver-dash"
                className="h-5 mr-3"
              />
              <span className="text-sm text-primary-text">Driver Dash Prototype</span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              isActive("/vehicle-analytics")
                ? "bg-slate-200"
                : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/vehicle-analytics"
              className={`flex items-center ${
                isActive("/vehicle-analytics")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img
                src="/assets/notif.png"
                alt="Notifications"
                className="h-5 mr-3"
              />
              <span className="text-sm text-primary-text">
                Vehicle Analytics
              </span>
            </Link>
          </li>
          <li
            className={`p-2 ${
              isActive("/analytics") ? "bg-slate-200" : "hover:bg-slate-200"
            }`}
          >
            <Link
              to="/analytics"
              className={`flex items-center ${
                isActive("/vehicle-analytics")
                  ? "text-primary-text font-bold"
                  : "text-primary-text hover:text-primary-text"
              }`}
            >
              <img src="/assets/notif.png" alt="Notifications" className="h-5 mr-3" />
              <span className="text-sm text-primary-text">
                Driver Analytics
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center">
          <button
            onClick={handleClick}
            className=" bg-primary-text text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
          >
            Add a Driver
          </button>
        </div>
        <div className="flex flex-col items-center">
            <button
              onClick={addVehicle}
              className=" bg-primary-text text-white py-2 px-4 rounded hover:bg-opacity-90 transition"
            >
              Add a Vehicle
            </button>
          </div>

      </nav>
    </div>
  );
}

export default SideMenu;
