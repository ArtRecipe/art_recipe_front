import React, { useState, useEffect } from "react";
import PostCard from "./card/index";
import DefaultPhoto from "../../../../assets/images/defaultphoto.png";
import { getPostList, myBookmarkedGet } from "../../../../axios/Post";
import { useSelector } from "react-redux";

const Index = ({ myGallery }) => {
  const [postlist, setPostlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 데이터 로딩
  const userId = useSelector((state) => state.user.user.id);

  useEffect(() => {
    setError(null);
    setLoading(true);
    if (myGallery) {
      const res = getPostList()
        .then(function (res) {
          setPostlist([...res.data]);
          console.log("POST LIST GET SUCCESS");
          console.log("길이");
          console.log(postlist.length);
        })
        .catch(function (rej) {
          console.log(rej);
          setError(rej);
        });
    } else {
      const res = myBookmarkedGet(userId)
        .then(function (res) {
          setPostlist([...res.data]);
          console.log("내가 북마크한 게시글 GET SUCCESS");
          console.log(res);
          console.log(res.data[0].images.length);
        })
        .catch(function (rej) {
          console.log(rej);
          setError(rej);
        });
    }
    setLoading(false);
  }, [myGallery]);

  if (loading) {
    return <h5>로딩중 입니다.</h5>;
  }

  if (!postlist) {
    console.log("아직 값이 설정되지 않음");
    return null;
  }
  return (
    <>
      {myGallery ? (
        <p>내가 업로드한 게시글은 {postlist.length}개</p>
      ) : (
        <p>북마크한 게시글은 {postlist.length}개</p>
      )}

      {postlist.map((post) => (
        <div key={post.id}>
          {post.images.length === 0 ? (
            <PostCard
              key={post.id}
              post={post}
              thumbnail={DefaultPhoto}
              title={post.title}
              profile={post.profile}
            />
          ) : (
            <PostCard
              key={post.id}
              myGallery={myGallery}
              post={post}
              thumbnail={post.images[0].image}
              username={post.writer.username}
              profile={post.profile}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Index;
