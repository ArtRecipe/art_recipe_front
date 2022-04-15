//1차 준비 완료
import axios from "axios";

export const getPostList = (data) => {
  return axios({
    method: "GET",
    url: "",
    data,
  });
};

export const searchPost = (search: String) => {
  return axios({
    method: "GET",
    url: "",
  });
};

export const postDetail = () => {
  return axios({
    method: "GET",
    headers: { accesstoken },
    url: "",
  });
};

export const deletePost = (postId: String, accesstoken: String) => {
  return axios({
    method: "DELETE",
    headers: { accesstoken },
    url: "",
  });
};

export const postSubscribe = (data, accesstoken: String) => {
  return axios({
    method: "POST",
    headers: { accesstoken },
    url: "",
    data,
  });
};

export const mySubscribeList = (userId: String, search: String) => {
  return axios({
    method: "GET",
    url: "",
  });
};

export const myUploadPostList = (userId: String, search: String) => {
  return axios({
    method: "GET",
    url: "",
  });
};
