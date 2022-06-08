import axios from "axios";

// 게시글 전체 조회
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

// 게시글 상세조회 - 북마크 개수 정보 알 수 있음
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

// 게시글 생성
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

// 게시글 수정 - 여러 개의 image 및 material 수정 가능 json nested하게 보내면
export const putPost = async (jData) => {
  return axios(
    {
      method: "PUT",
      url: "/api/post/post/",
      data: jData,
    },
    {
      withCredentials: true,
    }
  );
};

// 검색 - “제목“, “설명“, “작성자 이름“, “재료 이름“에 포함된 경우 result 나옴
export const getSearch = async (word) => {
  return axios(
    {
      method: "GET",
      url: `/api/post/post/?search=${word}`,
    },
    {
      withCredentials: true,
    }
  );
};

// 게시글 북마크 - POST할 때마다 on/off 반복.
export const postBookmark = async () => {
  return axios(
    {
      method: "POST",
      url: "/api/post/post/1/bookmark",
    },
    {
      withCredentials: true,
    }
  );
};

// 유저가 작성한 게시글 조회
export const getMyPost = async (userId) => {
  return axios(
    {
      method: "GET",
      url: `/api/post/post/?writer=${userId}`,
    },
    {
      withCredentials: true,
    }
  );
};

// 유저가 북마크한 게시글 조회
export const getMyBookmarkPost = async (userId) => {
  return axios(
    {
      method: "GET",
      url: `/api/post/post/?bookmarkers=${userId}`,
    },
    {
      withCredentials: true,
    }
  );
};

// export const deletePost = (postId: String, accesstoken: String) => {
//   return axios({
//     method: "DELETE",
//     headers: { accesstoken },
//     url: "",
//   });
// };
