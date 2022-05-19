import React, { useEffect, useState } from "react";
import { getPost, getPostList } from "../../../axios/Post";
import DefaultProfile from "../../../assets/images/profile.png";
import { useParams } from "react-router-dom";
import styles from "./detail.module.scss";
import BrushIcon from "../../../assets/images/paintbrush-solid.svg";
import PaletteIcon from "../../../assets/images/palette-solid.svg";
import BookmarkIcon from "../../../assets/images/bookmark-solid.svg";
import UtubePlayer from "../../../components/videoPlayer/index.js";

const PostDetail = () => {
  const { postId } = useParams();
  const [details, setDetails] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let date = [];
  const postIdx = postId - 1;
  const [sideBarStatus, setSideBarStatus] = useState(0);

  // const [updateDate, setUpdateDate] = useState("");

  console.log("디테일페이지");
  console.log(postId);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      setDetails(null);
      try {
        const res = await getPostList();
        setDetails(res.data[postIdx]);

        console.log(res.data[postIdx]);
        // setUpdateDate(res.data[id].created_at);
      } catch (err) {
        console.log(err);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기중일때
  if (loading) {
    return <div className={styles.listBlock}>로딩 중</div>;
  }
  if (error) return <div>에러가 발생했습니다</div>;
  // 아직 디테일info값이 설정되지 않았을때
  if (!details) {
    console.log("아직 값이 설정되지 않음");
    return null;
  }
  // date = updateDate.split("T");
  // console.log(date);

  return (
    <div className={styles.detailForm}>
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
      {details.images.map((a, i) => {
        return (
          <div key={i} style={{ height: "70%", width: "70%" }}>
            <img className={styles.detailImg} src={a.image} alt="postedPhoto" />
          </div>
        );
      })}
      <br />
      <br />
      {details.url ? (
        <>
          <UtubePlayer youtubeurl={details.url} />
        </>
      ) : null}

      {details.desc}

      {/* 하단 코드는 우측의 정보들(재료,컬러,북마크 등) */}
      <div className={styles.sideMenuBar}>
        <img className={styles.sideLogo} src={DefaultProfile} alt="CI" />
        <img
          className={styles.sideButton}
          onClick={() => {
            if (sideBarStatus == 1) {
              setSideBarStatus(0);
            } else {
              setSideBarStatus(1);
            }
          }}
          src={BrushIcon}
          alt="ButtonImg"
        />
        <div className={styles.sideButtonTitle}>재료</div>
        <img
          className={styles.sideButton}
          onClick={() => {
            if (sideBarStatus == 2) {
              setSideBarStatus(0);
            } else {
              setSideBarStatus(2);
            }
          }}
          src={PaletteIcon}
          alt="ButtonImg"
        />
        <div className={styles.sideButtonTitle}>컬러</div>
        <img
          className={styles.sideButton}
          onClick={() => {
            if (sideBarStatus == 3) {
              setSideBarStatus(0);
            } else {
              setSideBarStatus(3);
            }
          }}
          src={BookmarkIcon}
          alt="ButtonImg"
        />
        <div className={styles.sideButtonTitile}></div>
      </div>
      {sideBarStatus ? (
        <SideInfoModal sideBarStatus={sideBarStatus} details={details} />
      ) : null}
    </div>
  );
};

function SideInfoModal(props) {
  const sideMenuTitle = [
    "Modal ERROR",
    "MATERIAL",
    "COLOR",
    "북마크 서비스는 준비중입니다.",
  ];

  return (
    <div className={styles.detailModal}>
      <h6>{sideMenuTitle[props.sideBarStatus]}</h6>
      {props.sideBarStatus == 1 ? ( // Material재료 정보
        <>
          <div className={styles.modalMaterialData}>
            {props.details.materials.map((a, i) => {
              return (
                <div key={i}>
                  <h6>{a.name}</h6>
                  <>
                    {a.url ? (
                      <span
                        className={styles.materialLink}
                        onClick={() => window.open(a.url, "_blank")}
                      >
                        재료 링크
                      </span>
                    ) : (
                      <span>재료 정보 없음</span>
                    )}
                  </>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
      {props.sideBarStatus == 2 ? (
        <div className={styles.modalColorData}>
          {props.details.color ? (
            <>{props.details.color}</>
          ) : (
            <>등록된 정보가 없습니다.</>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default PostDetail;
