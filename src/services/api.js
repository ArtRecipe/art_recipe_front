import axios from 'axios';

export const Axios = axios.create({
    baseURL:"http://127.0.0.1:8000/api",
    // withCredentials: true,
});

export const getData = async () => {
    try {
        return await Axios.get("post/post/");
    } catch (error) {
        console.error(error);
    }
}






