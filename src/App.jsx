import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DriverLogin from "./pages/DriverLogin";
import DriverProfile from "./pages/DriverProfile";
import AddDriver from "./pages/AddDriver";
import Details from "./pages/Details";
import Notifications from "./pages/Notifications";
import Fleet from "./pages/Fleet";
import FleetReport from "./pages/FleetReport";
import DriverDash from "./pages/DriverDash";
import DriverGps from "./pages/DriverGps";
import Register from "./pages/Register";

import NewPassword from "./pages/NewPassword";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

import AddVehicle from "./pages/AddVehicle";
import Analytics from "./pages/Analytics";
import VehicleAnalytics from "./pages/VehicleAnalytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="driver-login" element={<DriverLogin />} />
          <Route path="home" element={<Home />} />
          <Route path="driver-profile" element={<DriverProfile />} />
          <Route path="/driver-profiles/:id" element={<Details />} />
          <Route path="/add-driver" element={<AddDriver />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="fleet-management" element={<Fleet />} />
          <Route path="fleet-report" element={<FleetReport />} />
          <Route path="driver-dash" element={<DriverDash />} />
          <Route path="driver-gps" element={<DriverGps />} />
          <Route path="register" element={<Register />} />

          <Route path="new-password" element={<NewPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="vehicle-analytics" element={<VehicleAnalytics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
