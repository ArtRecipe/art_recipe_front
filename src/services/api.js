import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:8000/api", //"http://127.0.0.1:8000/api",
  // withCredentials: true,
});

export const getData = async () => {
  try {
    return await Axios.get("/post/post/");
  } catch (error) {
    console.error(error);
  }
};

export const getDataOnly = async (postId: String) => {
  try {
    return await Axios.get(`/post/post/${postId}`);
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
