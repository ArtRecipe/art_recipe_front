import React from "react";
import styles from "./postBanner.module.scss";

export const PostBanner = () => {
  return (
    <>
      <div className={styles.bannerWrap}>
        <div className={styles.subtitle}>
          Art Recipe _ 나만의 재료 · 예술작품을 공유하고 아카이브
        </div>
        <div className={styles.title}>Everyday, Art Recipe</div>
      </div>
    </>
  );
};

export default PostBanner;
