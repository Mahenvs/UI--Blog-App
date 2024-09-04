
import { displayToast } from "@/components/Utility/DisplayToast";
import { addBookmarkURL, removeBookmarkURL } from "@/Helper/URL";

import axios from "axios";

export const bookmarkPost = async (postId: number, flag: string, isbookmarked: boolean, updatePostBookmark: (postId: number, isbookmarked: boolean) => void) => {
    try {
        updatePostBookmark(postId, isbookmarked)
        const userId = localStorage.getItem("userId");
        let URL = addBookmarkURL;
        if (flag != "bookmark") {
            URL = removeBookmarkURL
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
        updatePostBookmark(postId, !isbookmarked)
        displayToast("Network failure, please try again.");
        return error
    }
}