import React from "react";
import PropTypes from "prop-types";
import styles from "./postList.module.scss";

import { PostBanner } from "../../components/Banner/PostBanner";
import { PostCard } from "../../components/Post/PostCard";

export const PostListContainer = ({ data }) => {
  if (data) {
    return (
      <>
        <PostBanner />
        <div className={styles.postListWrap}>
          {data.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </>
    );
  }
  return null;
};

PostListContainer.propTypes = {
  data: PropTypes.array,
};

export default PostListContainer;
