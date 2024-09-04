import { loginURL, registerURL } from "@/Helper/URL";
import { userModel } from "@/Helper/userModel";
import axios from "axios";
export const ApiLogin = async (formData: userModel, flag: string) => {
    try {
        console.log(formData);
        let URL = loginURL
        if (flag == "signin") {
            URL = loginURL
        }
        else {
            URL = registerURL
        }
        const {email,password} = formData

        const response = await axios.post(URL,
            {
                email,
                password
            }, {
            headers: {
                "Content-Type": "application/json",
            },

        });

        return response
    } catch (error) {
        console.error("Error:", error);
    }
};