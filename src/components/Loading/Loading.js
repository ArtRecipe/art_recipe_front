import ReactLoading from "react-loading";
import styles from "./loading.module.scss";

export const Loading = () => {
  return (
    <div className={styles.loadingWrap}>
      <ReactLoading type="spin" color="#aca4d3" />
    </div>
  );
};

export default Loading;
