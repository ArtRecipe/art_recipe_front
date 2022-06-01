import React from "react";
import styles from "./postCreateBanner.module.scss";

export const PostCreateBanner = () => {
  return (
    <>
      <div className={styles.bannerWrap}>
        <div className={styles.bannerTitleWrap}>
          <div className={styles.bannerSubtitle}>
            Art Recipe _ 나만의 재료 · 예술작품을 공유하고 아카이브
          </div>
          <div className={styles.bannerTitle}>
            <h2>Everyday, Art Recipe</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCreateBanner;
