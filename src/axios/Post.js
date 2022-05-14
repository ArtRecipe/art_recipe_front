import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:8000/api", //"http://127.0.0.1:8000/api",
  // withCredentials: true,
});

export const getData = async () => {
  try {
    return await Axios.get("/post/post/");
  } catch (error) {
    console.log(error);
    console.error();
  }
};

export const getDataOnly = (postid: String) => {
  const getDetail = async () => {
    try {
      return await Axios.get(`/post/post/${postid}`);
    } catch (error) {
      console.error(error);
    }
  };
};

export const getDetail = (postid: String) => {
  return axios({
    method: "GET",
    url: `http://localhost:8000/api/post/post/${postid}/`,
  });
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

// //1차 준비 완료
// import axios from "axios";

// export const getPostList = (data) => {
//   return axios({
//     method: "GET",
//     url: "",
//     data,
//   });
// };

// export const searchPost = (search: String) => {
//   return axios({
//     method: "GET",
//     url: "",
//   });
// };

// // 게시물 리스트 GET
// export const uploadPost = (data) => {
//   return axios({
//     method: "GET",
//     url: `/api/post/post`,
//     data
//   });
// };

// export const deletePost = (postId: String, accesstoken: String) => {
//   return axios({
//     method: "DELETE",
//     headers: { accesstoken },
//     url: "",
//   });
// };

// export const postSubscribe = (data, accesstoken: String) => {
//   return axios({
//     method: "POST",
//     headers: { accesstoken },
//     url: "",
//     data,
//   });
// };

// export const mySubscribeList = (userId: String, search: String) => {
//   return axios({
//     method: "GET",
//     url: "",
//   });
// };

// export const myUploadPostList = (userId: String, search: String) => {
//   return axios({
//     method: "GET",
//     url: "",
//   });
// };
