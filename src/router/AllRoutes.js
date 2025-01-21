import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/all-home-version/Home";  // Update this import to point to the Home component
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Redirect the root path ("/") to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} /> {/* Updated this route to /home */}
        <Route path="/rtl-home-light" element={<RtlHomeLight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
