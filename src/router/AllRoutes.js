import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeLight from "../views/all-home-version/HomeLight";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Redirect the root path ("/") to "/home-light" */}
        <Route path="/" element={<Navigate to="/home-light" replace />} />
        <Route path="/home-light" element={<HomeLight />} />
        <Route path="/rtl-home-light" element={<RtlHomeLight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
