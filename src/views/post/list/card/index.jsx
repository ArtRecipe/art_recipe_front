import DefaultProfile from "../../../../assets/images/logo/logo_1.png";
import Bookmark from "../../../../assets/images/bookmark.png";
import { useNavigate } from "react-router-dom";
import styles from "./listcard.module.scss";
import DefaultPhoto from "../../../../assets/images/defaultphoto.png";

const PostCard = ({ post, thumbnail, username, profile }) => {
  const navigate = useNavigate();
  // let address = '/post/';
  const toDetail = () => {
    // navigate(address+post.writer.id);
    navigate("/detail/" + post.id);
  };

  // const bookmark = ()=> {
  // }
  return (
    <div className={styles.postCardWrap}>
      {/* <img src={Bookmark} onClick={Bookmark} style={{height:'1.5rem', width:'1rem', opacity:'0.5'}} alt="icon"/> */}
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
      {/* <img
        className="thumbnail"
        onClick={toDetail}
        style={{ height: "23rem", width: "23rem" }}
        src={thumbnail}
        alt={thumbnail}
      /> */}
      <div className={styles.userDetail}>
        {profile ? (
          <img src={profile} alt={profile} />
        ) : (
          <img src={DefaultProfile} style={{ height: "3rem", width: "3rem" }} alt={profile} />
        )}

        <div className={styles.userName}>{username}</div>
      </div>
    </div>
  );
};

export default PostCard;
