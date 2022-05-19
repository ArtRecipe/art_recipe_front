import React from "react";
import PropTypes from "prop-types";
import styles from "./post.module.scss";

import YTubePlayer from "../../components/VideoPlayer";
import { SideBarContainer } from "./SideBarContainer";

import defaultLogo from "../../assets/images/logo/logo_1.png";

export const PostContainer = ({ data }) => {
  if (data) {
    return (
      <div className={styles.detailForm}>
        <div>
          {/* 유저 정보 */}
          <div className={styles.userInfo}>
            <img src={defaultLogo} alt="Profile" />
            <p>{data.writer.username}</p>
          </div>

          {/* 상단 정보 */}
          <div className={styles.upperInfo}>
            <p>{data.title}</p>
            <div className={styles.buttonInfo}>
              <div className={styles.button}>수정</div>
              <div className={styles.button}>삭제</div>
            </div>
          </div>

          {/* 이미지 정보 */}
          <div className={styles.imageInfo}>
            {data.images.map((image, i) => {
              return (
                <div key={i}>
                  <img src={image.image} alt="PostImage" />
                </div>
              );
            })}
          </div>

          {/* 영상 정보 */}
          {data.url ? <YTubePlayer url={data.url} /> : null}

          {/* 설명 정보 */}
          <div className={styles.descInfo}>{data.desc}</div>
        </div>

        <SideBarContainer data={data} />
      </div>
    );
  }
  return null;
};

PostContainer.propTypes = {
  data: PropTypes.object,
};

export default PostContainer;
