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
