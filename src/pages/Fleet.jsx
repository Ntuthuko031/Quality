import React, { useState } from "react";
import FleetManagementTable from "../components/Fleet/FleetManagementTable";
import Pagination from "../components/DriverDetails/Pagination";

function Fleet() {
  const [drivers, setDrivers] = useState([]);
  const [inn, setIn] = useState(0);
  const [out, setOut] = useState(10);

  return (
    <div className="p-6">
      <FleetManagementTable />
      <Pagination  drivers={drivers} setInPrev={() => setIn(e => e - 10)} setOutPrev={() => setOut(e => e - 10)} setIn={() => setIn(e => e + 10)} setOut={() => setOut(e => e + 10)} />
    </div>
  );
}

export default Fleet;
