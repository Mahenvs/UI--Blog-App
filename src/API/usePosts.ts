import { getPostsURL, sendPostURL } from "@/Helper/URL";
import { useStore } from "@/store";
import axios from "axios";
import { useState, useEffect } from "react";

export const usePosts = () => {
    // const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const setPosts = useStore((state) => state.setPosts); // Get the setPosts function from the store

    const fetchData = async () => {
        try {
            const response = await axios.get(getPostsURL);
            setPosts(response.data.data);
            
            console.log(response.data.data);
            
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {  loading, error };
};
