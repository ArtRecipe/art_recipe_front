import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../../axios/Post";
import { PostContainer } from "../../../containers/Post/PostContainer";

const PostDetail = () => {
  const { postId } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getPost(postId);
        setData(res.data);
      } catch (err) {
        setError(err.response.status);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 로딩 중인 경우
  if (loading) return <div>로딩 중</div>;

  // 에러 발생한 경우
  if (error) return <div>에러가 발생했습니다 {error}</div>;

  return <PostContainer data={data} />;
};

export default PostDetail;
