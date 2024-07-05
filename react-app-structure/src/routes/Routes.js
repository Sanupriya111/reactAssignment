import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/auth/login";
import Layout from "../components/Layout";
import Upload from "../pages/Dashboard/components/upload";

export default function Routers() {
  return (
    <Suspense >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout>{<Dashboard />}</Layout>} />
        <Route path="/upload" element={<Layout>{<Upload />}</Layout>} />
      </Routes>
    </Suspense>
  );
}
