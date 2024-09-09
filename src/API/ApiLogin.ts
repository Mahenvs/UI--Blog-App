import { loginURL, registerURL } from "@/Helper/URL";
import { userModel } from "@/Helper/userModel";
import axios from "axios";
export interface ApiResponse {
    status: number;
    message: string;
    data?: Array<string>; // Adjust based on your response structure
  }
export const ApiLogin = async (formData: userModel, flag: string) => {
    try {

        let URL = loginURL
        if (flag == "signin") {
            URL = loginURL
        }
        else {
            URL = registerURL
        }

        const response = await axios.post(URL,
            {
             ...formData
            }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });
        
        return response
    } catch (error) {
        console.error("Error:", error);
        return error
    }
};