import { sendPostURL } from "@/Helper/URL";
import { postModel } from "@/Helper/userModel";
import axios from "axios";
export const createPost = async (postData: postModel) => {
    try {
        console.log(postData);

        const { title, description } = postData
        const userId = localStorage.getItem("userId")
        if(!userId) {
            throw new Error("UserId is mandatory")
        }
        const response = await axios.post(sendPostURL,
            {
                title, description, userId
            }, {
            headers: {
                "Content-Type": "application/json",
            },

        });

        return response
    } catch (error) {
        console.error("Error:", error);
        return error
    }
};