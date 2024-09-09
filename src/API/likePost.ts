import { displayToast } from "@/components/Utility/displayToast";
import { addLikeURL, removeLikeURL } from "@/Helper/URL";


import axios from "axios";

export const likePost = async (postId: number, flag: string, isLiked: boolean, updatePostLike: (postId: number, isLiked: boolean) => void) => {
    try {
        updatePostLike(postId, isLiked)
        const userId = localStorage.getItem("userId");
        let URL = addLikeURL;
        if (flag != "bookmark") {
            URL = removeLikeURL
        }
        const response = await axios.post(URL,
            {
                userId, postId
            }, {
            headers: {
                "Content-Type": "application/json",
            },

        });
        return response
    } catch (error) {
        updatePostLike(postId, !isLiked)
        displayToast("You need to Login to like a post.","rgb(227, 47, 47)");
        return error
    }
}