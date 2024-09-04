import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Toaster/>
      <div className="flex justify-center mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
