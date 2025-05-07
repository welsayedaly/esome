import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/all-home-version/Home";
import RtlHomeLight from "../views/all-home-version/RtlHomeLight";
import NotFound from "../views/NotFound";
import BlogPage from "../components/blog/BlogPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Redirect the root path ("/") to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rtl-home-light" element={<RtlHomeLight />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
