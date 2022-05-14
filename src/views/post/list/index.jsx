import React, { useEffect, useState } from "react";
import { getPostList } from "../../../axios/Post";
import PostBanner from "../banner";
import PostCard from "./card";
import ReactLoading from "react-loading";
import DefaultPhoto from "../../../assets/images/defaultphoto.png";

const PostList = () => {
  const [postlist, setPostlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 데이터 로딩

  useEffect(() => {
    setError(null);
    setLoading(true);
    const res = getPostList()
      .then(function (res) {
        setPostlist([...res.data]);
        console.log("POST LIST GET SUCCESS");
        console.log(res);
        console.log(res.data[0].images.length);
      })
      .catch(function (rej) {
        console.log(rej);
        setError(rej);
      });
    setLoading(false);
  }, []);

  console.log("포스트 리스트페이지");

  console.log(postlist);
  // 대기중일때
  if (loading) {
    return <div className="list-block">로딩 중</div>;
  }
  if (error) return <div>에러가 발생했습니다</div>;
  // 아직 postlist값이 설정되지 않았을때
  if (!postlist) {
    console.log("아직 값이 설정되지 않음");
    return null;
  }
  return (
    <>
      <PostBanner />
      <div>
        {postlist.map((post) => (
          <div key={post.id}>
            {post.images.length === 0 ? (
              <PostCard
                key={post.id}
                post={post}
                thumbnail={DefaultPhoto}
                username={post.writer.username}
                profile={post.profile}
              />
            ) : (
              <PostCard
                key={post.id}
                post={post}
                thumbnail={post.images[0].image}
                username={post.writer.username}
                profile={post.profile}
              />
            )}
          </div>
        ))}
      </div>
      {isLoading ? (
        <div>
          <ReactLoading type="spin" color="#A593E0" />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PostList;
