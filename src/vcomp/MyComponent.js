import React from "react";
import MaintenanceLogs from "./MaintenanceLogs"; // Adjust the path

const MyComponent = () => {
  const logsData = [
    { date: "02/12/25", description: "Oil Change" },
    { date: "02/05/25", description: "Wrap" },
    { date: "01/25/25", description: "Battery" },
  ];

  return <MaintenanceLogs logs={logsData} />;
};

export default MyComponent;