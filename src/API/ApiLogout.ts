
import { logoutURL } from "@/Helper/URL";
import axios from "axios";
export const ApiLogout = async () => {
    try {
        const response = await axios.post(logoutURL, {
        }, {
        headers: {
            "Content-Type": "application/json",
        },
        withCredentials: true
    });
        return response
    } catch (error) {
        console.error("Error:", error);
    }
};