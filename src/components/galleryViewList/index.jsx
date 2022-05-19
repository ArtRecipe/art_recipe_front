import { useNavigate } from "react-router-dom";
import styles from "./listcard.module.scss";
import MyUploadCard from "./MyUploadCard/index";

const Index = ({ galleryId, data }) => {
  const navigate = useNavigate();
  const toDetail = () => {
    // navigate("/detail/" + post.id);
  };

  if (galleryId == 1) {
    console.log("갤러리뷰 리스트-내가 업로드한 이미지");
    console.log(data);
    return (
      <div className={styles.postCardWrap}>
        {data ? (
          <>
            {data.map(function (a, i) {
              return a.images ? (
                <MyUploadCard
                  className={styles.myGalleryPhoto}
                  key={i}
                  data={a.images}
                  alt="myPhoto"
                />
              ) : null;
            })}
          </>
        ) : null}
      </div>
    );
  } else if (galleryId == 2) {
    console.log("갤러리뷰 리스트 - 북마크");
    console.log(data);
    return (
      <div className={styles.postCardWrap}>
        {data ? (
          <>
            {data.map(function (a, i) {
              return a.url ? (
                <img
                  className={styles.myBookmarkPhoto}
                  key={i}
                  data={a.url}
                  alt="myPhoto"
                />
              ) : null;
            })}
          </>
        ) : null}
      </div>
    );
  } else {
    return null;
  }
};

export default Index;
