import React, { useEffect, useState } from "react";
import { getDetail } from "../../../axios/Post";
import { getDataOnly } from "../../../axios/Post";
import DefaultProfile from "../../../assets/images/profile.png";
import { useParams } from "react-router-dom";
import "./detail.scss";

const PostDetail = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let date = [];
  const [updateDate, setUpdateDate] = useState("");

  console.log("디테일페이지");
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      setDetails(null);
      try {
        const res = await getDetail(id);
        setDetails(res.data);
        console.log(res.data);
        setUpdateDate(res.data.updated_at);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   setError(null);
  //   setLoading(true);
  //   const res = getDataOnly(postid)
  //     .then(function (res) {
  //       setDetails(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(function (rej) {
  //       console.log(rej);
  //       setError(true);
  //     });
  //   setLoading(false);
  // }, []);

  // 대기중일때
  if (loading) {
    return <div className="list-block">로딩 중</div>;
  }
  if (error) return <div>에러가 발생했습니다</div>;
  // 아직 디테일info값이 설정되지 않았을때
  if (!details) {
    console.log("아직 값이 설정되지 않음");
    return null;
  }
  date = updateDate.split("T");
  console.log(date);

  return (
    <div className="detail-form">
      {details.writer.profile ? (
        <div style={{ height: "2rem", width: "2rem", marginRight: "1rem" }}>
          {details.writer.profile}
        </div>
      ) : (
        <img
          src={DefaultProfile}
          style={{ height: "2rem", width: "2rem", marginRight: "1rem" }}
          alt="Profile"
        />
      )}

      {details.writer.username}

      <h3>{details.title}</h3>
      <img
        className="detail-img"
        src={details.thumbnail}
        style={{ height: "70%", width: "70%" }}
        alt="picture"
      />
      <br />
      <br />
      {details.desc}
      <br />
      <br />
      <div className="detail-date">최신 업데이트 : {date[0]}</div>
    </div>
  );
};

export default PostDetail;
