import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPostList } from "../../../axios/Post";
import { Loading } from "../../../components/Loading/Loading";
import { PostListContainer } from "../../../containers/Post/PostListContainer";

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const word = searchParams.get("search") ? searchParams.get("search") : '';
        const res = await getPostList(word);
        setData([...res.data]);
      } catch (err) {
        setError(err.response.status);
      }
      setLoading(false);
    };
    fetchData();
  }, [searchParams]);

  // 로딩 중인 경우
  if (loading) return <Loading />;

  // 에러 발생한 경우
  if (error) return <div>에러가 발생했습니다 {error}</div>;

  return <PostListContainer data={data} />;
};

export default PostList;
