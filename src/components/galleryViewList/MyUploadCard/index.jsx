import { useNavigate } from "react-router-dom";
import styles from "./listcard.module.scss";

const Index = ({ data, dataId }) => {
  const navigate = useNavigate();
  const toDetail = () => {
    alert("테스트중입니다.");
    // navigate("/detail/" + dataId);
  };

  return (
    <div className={styles.postCardWrap}>
      {data
        ? data.map(function (a, i) {
            return a.image ? (
              <img
                onClick={toDetail}
                key={i}
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
