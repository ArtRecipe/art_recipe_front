import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./postCard.module.scss";

import DefaultProfile from "../../assets/images/logo/logo_1.png";
import DefaultPhoto from "../../assets/images/logo/logo_3.png";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const toDetail = () => {
    navigate("/detail/" + post.id);
  };

  return (
    <div className={styles.postCardWrap}>
      {/* 게시글 정보 */}
      <div className={styles.postInfo}>
        {post.images[0] ? (
          <img onClick={toDetail} src={post.images[0].image} alt="thumbnail" />
        ) : (
          <img onClick={toDetail} src={DefaultPhoto} alt="thumbnail" />
        )}

        <div className={styles.title}>{post.title}</div>
      </div>

      {/* 유저 정보 */}
      <div className={styles.userInfo}>
        <img src={DefaultProfile} alt="profile" />
        <div className={styles.userName}>{post.writer.username}</div>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
};

export default PostCard;
