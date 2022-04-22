import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  // withCredentials: true,
});

export const getData = async () => {
  try {
    return await Axios.get("/post/post/");
  } catch (error) {
    console.error(error);
  }
};

export const getDataOnly = async () => {
  try {
    return await Axios.get("/post/post/1/");
  } catch (error) {
    console.error(error);
  }
};

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
