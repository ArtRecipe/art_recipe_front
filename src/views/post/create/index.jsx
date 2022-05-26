import React, { useEffect, useRef, useState } from "react";
import styles from "./create.module.scss";

import plusIcon from "../../../assets/images/plus_btn.svg";
import minusIcon from "../../../assets/images/min_btn.svg";
import PlusInput from "./plusInput";
import PostBanner from "../banner";

const PostCreate = () => {
  const ref = useRef(null);

  const [imageUrl, setImgUrl] = useState(null);
  const [inputarr, setInputarr] = useState([1]);

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    if (file) {
      const PostImage = document.querySelector("#post_image");
      // post_preview = <PostPreview src={previewURL} />
      PostImage.style.background = `url(${previewURL}) no-repeat center #6C6C6C`;
      PostImage.style.opacity = 0.5;
    } else {
      const PostImage = document.querySelector("#post_image");
      // post_preview = <PostPreview src={previewURL} />
      PostImage.style.background = "#6C6C6C";
      PostImage.style.opacity = 1;
    }
  }, [file]);

  let post_preview = null;

  if (file) {
    const PostImage = document.querySelector("#post_image");
    // post_preview = <PostPreview src={previewURL} />
    PostImage.style.background = `url(${previewURL}) no-repeat center #6C6C6C`;
    PostImage.style.opacity = 0.5;
  }

  const onChangeFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);

    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
    }

    // console.log(e.target.files[0])
  };

  const onClickPlusBtn = (e) => {};

  const onClickImageUpload = (e) => {
    if (!file) {
      ref.current.click();
    }
  };

  const onCLickMinusBtn = (e) => {
    setFile("");
    setPreviewURL("");

    const PostImage = document.querySelector("#post_image");
    // post_preview = <PostPreview src={previewURL} />
    PostImage.style.background = "#6C6C6C";
    PostImage.style.opacity = 1;
  };

  const onSubmitPost = () => {
    // const response = postData();
  };

  return (
    <>
      <div className={styles.postBanner}></div>
      <div className={styles.createWrap}>
        <div className={styles.createAdvice}>
          나만의 재료와 미술작품을 공유하고, 작품에 스토리를 더하세요 !
        </div>
        <div className={styles.contentWrap}>
          <form className={styles.form} action="#" method="post">
            <div
              className={styles.postImage}
              onClick={onClickImageUpload}
              id={"post_image"}
            >
              <img src={imageUrl} alt={imageUrl} />
              <input
                type="file"
                name={"post_img"}
                accept="image/*"
                onChange={onChangeFile}
                ref={ref}
              />
              {file ? (
                <div
                  className={styles.plusImg}
                  src={minusIcon}
                  alt="minusIcon"
                  onClick={onCLickMinusBtn}
                ></div>
              ) : (
                <div
                  className={styles.plusImg}
                  src={plusIcon}
                  alt="plusIcon"
                ></div>
              )}
            </div>
            <div className={styles.postContent}>
              <div className={styles.postContentWrap}>
                <div className={styles.title} htmlFor={"post_title"}>
                  TITLE
                </div>
                <input
                  type="text"
                  placeholder={"작품 제목을 입력해주세요."}
                  id={"post_title"}
                />
              </div>
              <div className={styles.postContentWrap}>
                <div className={styles.title}>MATERIAL</div>
                <div className={styles.postMaterialSubTitle}>
                  작품에 사용된 재료를 입력해주세요.
                </div>
                <div className={styles.ingredientInputWrap}>
                  {inputarr.map((item) => (
                    <PlusInput />
                  ))}
                  <div
                    className={styles.ingredientPlusBtn}
                    onClick={onClickPlusBtn}
                  >
                    <img src={plusIcon} alt="plusIcon" />
                  </div>
                </div>
              </div>
              <div className={styles.postContentWrap}>
                <div className={styles.title} htmlFor={"post_color"}>
                  COLOR
                </div>
                <input
                  type="text"
                  placeholder={"작품의 색상들을 입력해주세요."}
                  id={"post_color"}
                />
              </div>
              <div className={styles.postBtnWrap}>
                <div className={styles.postSaveBtn}>저장</div>
                <div className={styles.postCancelBtn}>취소</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default PostCreate;
