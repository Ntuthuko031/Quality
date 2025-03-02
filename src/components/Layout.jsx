import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  const location = useLocation();

  // Check if the current path includes "/"
  const isHomePage = location.pathname === "/";
  const isDriverLogin = location.pathname === "/driver-login";
  const isAddDriver = location.pathname === "/add-driver";
  const isFleetReport = location.pathname === "/fleet-report";
  const isForgotPassword = location.pathname === "/forgot-password";
  const isNewPassword = location.pathname === "/new-password";
  const isResetPassword = location.pathname === "/reset-password";

  return (
    <div className="w-screen h-full ">
      <Header />
      <div className="flex w-full">
        {!isHomePage && !isAddDriver && !isFleetReport && !isDriverLogin && !isForgotPassword && !isNewPassword && !isResetPassword && <SideMenu />}
        <main
          className={`bg-slate-100 ${
            isHomePage || isDriverLogin || isAddDriver || isFleetReport || isForgotPassword || isNewPassword || isResetPassword ? "w-full" : "w-[75%]"
          }`}
        >
          {!isHomePage && !isAddDriver && !isDriverLogin && !isForgotPassword && !isNewPassword && !isResetPassword && <Navigation />}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
