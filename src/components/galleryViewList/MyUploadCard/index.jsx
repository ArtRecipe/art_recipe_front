import { useNavigate } from "react-router-dom";
import styles from "./listcard.module.scss";

const Index = ({ data }) => {
  const navigate = useNavigate();
  const toDetail = () => {
    // navigate("/detail/" + post.id);
  };

  console.log("갤러리 카드");
  console.log(data);
  return (
    <div className={styles.postCardWrap}>
      {data
        ? data.map(function (a, i) {
            return a.image ? (
              <img
                className={styles.myGalleryPhoto}
                src={a.image}
                alt="uploadedPhoto"
              />
            ) : null;
          })
        : null}
    </div>
  );
};
export default Index;
