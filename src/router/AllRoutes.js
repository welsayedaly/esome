import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/all-home-version/Home";
import CICDXPage from "../views/CICDXPage";
import ServicesPage from "../views/ServicesPage";
import BlogListPage from "../views/BlogListPage";
import AboutPage from "../views/AboutPage";
import ContactPage from "../views/ContactPage";
import NotFound from "../views/NotFound";
import BlogPage from "../components/blog/BlogPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Redirect the root path ("/") to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cicdx" element={<CICDXPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;