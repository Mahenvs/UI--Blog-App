import { checkAuthUrl } from "@/Helper/URL";

import axios from "axios";
export const CheckAuth = async () => {

    try {
        const response = await axios.get(checkAuthUrl, {
            withCredentials: true,
        });
        if (response.data.authenticated) {
            // User is authenticated
            console.log("User is authenticated");

        } else {

            // User is not authenticated
            console.log("User is not authenticated");
            return
            // Handle unauthenticated state (e.g., redirect to login page)
        }
    } catch (error: any) {
        console.error("Auth check error:", error.response?.data || error.message);
    }

};
