import React from "react";
import { Outlet } from 'react-router';
import Footer from "../../common/layout/Footer";
import Navbar from "../../common/layout/Navbar";

function ApplicationWrapper() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default ApplicationWrapper;
