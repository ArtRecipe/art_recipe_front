import { useNavigate } from "react-router-dom";
import styles from "./myPostCard.module.scss";
import DefaultPhoto from "../../assets/images/logo/logo_3.png";

export const MyPostCard = ({ post }) => {
  const navigate = useNavigate();
  const toDetail = () => {
    navigate("/detail/" + post.id);
  };

  return (
    <div className={styles.postCardWrap}>
      {post.images[0] ? (
        <img onClick={toDetail} src={post.images[0].image} alt="thumbnail" />
      ) : (
        <img onClick={toDetail} src={DefaultPhoto} alt="thumbnail" />
      )}
      <div className={styles.title}>{post.title}</div>
    </div>
  );
};

export default MyPostCard;
