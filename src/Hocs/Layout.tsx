import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import axios from "axios";
import { checkAuth } from "@/API/checkAuth";

const Layout = () => {
  
  return (
    <div>
      <Navbar />
      <Toaster />
      <div className="flex justify-center mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
