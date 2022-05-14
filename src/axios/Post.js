import axios from "axios";

export const getPostList = async () => {
  return axios(
    {
      method: "GET",
      url: "/api/post/post/",
    },
    {
      withCredentials: true,
    }
  );
};

export const getPost = async (postId) => {
  return axios(
    {
      method: "GET",
      url: `/api/post/post/${postId}/`,
    },
    {
      withCredentials: true,
    }
  );
};

export const postPost = async (data) => {
  return axios(
    {
      method: "POST",
      url: "/api/post/post/",
      data,
    },
    {
      withCredentials: true,
    }
  );
};

// export const searchPost = (search: String) => {
//   return axios({
//     method: "GET",
//     url: "",
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
