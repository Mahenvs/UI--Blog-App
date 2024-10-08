import { useEffect } from "react";
import axios from "axios";
import { useStore } from "@/store";
import { checkAuthUrl } from "@/Helper/URL";

export const useAuth = () => {
  const { login, logout, isAuthenticated } = useStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(checkAuthUrl, { withCredentials: true });
        if (response.status) {
          console.log(response.data.user);
          // localStorage.setItem("userId",response.data?.user?.email?.slice(0,2))
          login();
        } else {
          logout();
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        logout();
      }
    };

    checkAuth();
  }, [login, logout]);

  return isAuthenticated;
};
