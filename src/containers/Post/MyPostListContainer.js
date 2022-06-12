import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getMyPost, getMyBookmarkPost } from "../../axios/Post";
import { Loading } from "../../components/Loading/Loading";
import { MyPostCard } from "../../components/Post/MyPostCard";
import styles from "./myPostList.module.scss";

export const MyPostListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const [isMyBookmarkPost, setIsMyBookmarkPost] = useState(true);
  const userId = useSelector((state) => state.user.user.id);

  useEffect(() => {
    const fetchData = async (isMyBookmarkPost) => {
      setLoading(true);
      try {
        let res;
        if (isMyBookmarkPost) {
          res = await getMyBookmarkPost(userId);
        } else {
          res = await getMyPost(userId);
        }
        setData([...res.data]);
      } catch (err) {
        setError(err.response.status);
      }
      setLoading(false);
    };
    fetchData(isMyBookmarkPost);
  }, [isMyBookmarkPost, userId]);

  // 로딩 중인 경우
  if (loading) return <Loading />;

  // 에러 발생한 경우
  if (error) return <div>에러가 발생했습니다 {error}</div>;

  return (
    <>
      <div className={styles.tabWrap}>
        {isMyBookmarkPost ? (
          <div className={styles.tab}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
            </svg>
            저장한 게시물 <div className={styles.count}>{data.length}</div>
          </div>
        ) : (
          <div className={styles.tab}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
            </svg>
            내 게시물 <div className={styles.count}>{data.length}</div>
          </div>
        )}
        <div className={styles.tabSelectWrap}>
          <div className={styles.tabSelect} onClick={() => setIsMyBookmarkPost(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
            </svg>
            저장한 게시물
          </div>
          <div className={styles.tabSelect} onClick={() => setIsMyBookmarkPost(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" />
            </svg>
            내 게시물
          </div>
        </div>
      </div>

      <div className={styles.postListWrap}>
        {data.map((post) => (
          <MyPostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default MyPostListContainer;
