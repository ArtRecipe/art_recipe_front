import DefaultProfile from "../../../assets/images/logo/logo_1.png";
import { useNavigate } from "react-router-dom";
import styles from "./listcard.module.scss";
import DefaultPhoto from "../../../assets/images/default_photo.png";

const PostCard = ({ myGallery, post, thumbnail, title, profile }) => {
  const navigate = useNavigate();
  const toDetail = () => {
    navigate("/detail/" + post.id);
  };

  return (
    <div className={styles.postCardWrap}>
      {thumbnail ? (
        <img
          className={styles.thumbnail}
          onClick={toDetail}
          style={{ height: "23rem", width: "23rem" }}
          src={thumbnail}
          alt={thumbnail}
        />
      ) : (
        <DefaultPhoto />
      )}

      <div className={styles.userDetail}>
        {profile ? (
          <img src={profile} alt={profile} />
        ) : (
          <img
            src={DefaultProfile}
            style={{ height: "3rem", width: "3rem", margin: "0" }}
            alt={profile}
          />
        )}
        {title ? (
          <div className={styles.userName}>{title}</div>
        ) : (
          <div className={styles.userName}>무제 untitled</div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
