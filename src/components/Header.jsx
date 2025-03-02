import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Check if the current path includes "/"
  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`px-14 py-2 w-screen overflow-hidden ${
        isHomePage ? "bg-orange-600" : "bg-white"
      } `}
    >
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <img
          src={isHomePage ? "/assets/logo-white.png" : "/assets/logo.png"}
          alt="Q Drive Logo"
          className={` ${isHomePage ? "h-20" : "h-16"}`}
        />

        {/* Menu Icon */}
        {isHomePage ? (
          <img src="/assets/menu.png" alt="Menu Icon" className="h-4" />
        ) : (
          <img
            src="/assets/home.png"
            alt="Menu Icon"
            className="h-4 cursor-pointer"
            onClick={() => {
              window.location.href = "/home";
            }}
          />
        )}

        {/* Navigation Links could go here if needed */}
      </nav>
    </header>
  );
};

export default Header;
