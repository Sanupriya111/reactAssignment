import React from "react";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
