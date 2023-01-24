import React, { useState } from "react";
import Navigation from "./Maps/Maps";
import Tools from "./index";
//import Weather from "./Weather/Weather";

export default function ToolNavigation() {
  const [currentPage, setCurrentPage] = useState("Tools");

  const renderPage = () => {
    if (currentPage === "Tools") {
      return <Tools />;
    }
    if (currentPage === "Navigation") {
      return <Navigation />;
    }
    // if (currentPage === "Weather") {
    //   return <Weather />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Tools currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      
    </div>
  );
}
