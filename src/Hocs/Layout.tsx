import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "@/hooks/useAuth";


const Layout = () => {
  const isAuthenticated = useAuth(); // Use the custom hook

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
