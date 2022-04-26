import React, { useEffect, useState } from "react";
import { getData } from "../../../services/api";
import PostBanner from "../banner";
import { PostListWrap, LoaderWrap } from "./styles";
import PostCard from "./card";
import ReactLoading from "react-loading";

const PostList = () => {
  const [postlist, setPostlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 데이터 로딩
  const [target, setTarget] = useState(""); // target

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      // 데이터를 가져오는 부분
      setError(null);
      setLoading(true);
      const res = getData()
        .then(function (res) {
          setPostlist([...res.data]);
          console.log("POST LIST GET SUCCESS");
          console.log(res);
        })
        .catch(function (rej) {
          console.log(rej);
          setError(rej);
        });
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (target) {
      // callback 함수, option
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target); // 타겟 엘리먼트 지정
    }
    return () => observer && observer.disconnect();
  }, [target]);

  // useEffect(() => {
  //   setError(null);
  //   setLoading(true);
  //   const res = getData()
  //     .then(function (res) {
  //       setPostlist([...res.data]);
  //       console.log("POST LIST GET SUCCESS");
  //       console.log(res);
  //     })
  //     .catch(function (rej) {
  //       console.log(rej);
  //       setError(rej);
  //     });
  //   setLoading(false);
  // }, []);

  console.log("포스트 리스트페이지");
  console.log(postlist);
  // 대기중일때
  // if (loading) {
  //   return <div className="list-block">로딩 중</div>;
  // }
  if (error) return <div>에러가 발생했습니다</div>;
  // 아직 postlist값이 설정되지 않았을때
  if (!postlist) {
    console.log("아직 값이 설정되지 않음");
    return null;
  }
  return (
    <>
      <PostBanner />
      <PostListWrap>
        {postlist.map((post) => (
          <PostCard
            post={post}
            thumbnail={post.thumbnail}
            username={post.writer.username}
            profile={post.profile}
          />
        ))}
      </PostListWrap>
      {isLoading ? (
        <LoaderWrap>
          <ReactLoading type="spin" color="#A593E0" />
        </LoaderWrap>
      ) : (
        ""
      )}
      <div ref={setTarget}></div>
    </>
  );
};

export default PostList;
