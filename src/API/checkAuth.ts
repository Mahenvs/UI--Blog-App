import { checkAuthUrl } from "@/Helper/URL";
import axios from "axios";

export const checkAuth = async () => {
    try {
        const response = await axios.get(checkAuthUrl, {
            withCredentials: true,
        });
        console.log(response);
        console.log("999999");
        
        if (response.data.authenticated) {
            // User is authenticated
            console.log("User is authenticated");
            // Handle authenticated state (e.g., set user data in state/context)
        } else {
            // User is not authenticated
            console.log("User is not authenticated");
            // Handle unauthenticated state (e.g., redirect to login page)
        }
    } catch (error: any) {
        console.error("Auth check error:", error.response?.data || error.message);
    }
};
