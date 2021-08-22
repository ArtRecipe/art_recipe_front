import axios from 'axios';

export const Axios = axios.create({
    baseURL:"http://115.85.183.95:7002/api",
    // withCredentials: true,
});

export const getData = async () => {
    try {
        return await Axios.get("/post/post/");
    } catch (error) {
        console.error(error);
    }
}

export const getDataOnly = async () => {
    try {
        return await Axios.get("post/post/");
    } catch (error) {
        console.error(error);
    }
}

// export const postData = async () => {
//     try {
//         return await Axios.post("post/post/",{
//             title:'hi',
//             thumbnail: '',
//             material: 'hi',
//             color: '#5dd',
//             desc:"hee"
//         })
//     } catch (e){
//         console.error(e);
//     }
// }






