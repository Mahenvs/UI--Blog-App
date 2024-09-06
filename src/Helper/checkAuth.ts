import axios from "axios";
import { checkAuthUrl } from "./URL";

export const checkAuth = async () => {
    try {
      const response = await axios.get(checkAuthUrl, {
        withCredentials: true,
    });
    return response
    //   if (response.status) {
    //     login();
    //   } else {
    //     logout();
    //   }
    } catch (error) {
      console.error("Error checking authentication:", error);
    //   logout();
    }
  };
