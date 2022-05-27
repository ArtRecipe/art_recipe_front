import React, { useEffect, useRef, useState } from "react";
import styles from "./create.module.scss";

import plusIcon from "../../../assets/images/plus_btn.svg";
import minusIcon from "../../../assets/images/min_btn.svg";
import PlusInput from "./plusInput";
import PostBanner from "../banner";

import { useNavigate } from "react-router-dom";

// /api/post/post/ POST : 게시글 생성. 여러 개의 image 및 material 생성 가능 json nested하게 보내면 됨.
const PostCreate = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [utubeUrl, setUtubeUrl] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [inputarr, setInputarr] = useState([{ name: "", url: "" }]);
  const [imgUrl, setImgUrl] = useState([{ image: "" }]); //[{ image: "" }]
  const [imgCount, setImgCount] = useState([1]);

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(null);

  useEffect(() => {
    if (file) {
      const PostImage = document.querySelector("#post_image");
      // post_preview = <PostPreview src={previewURL} />
      PostImage.style.background = `url(${previewURL}) no-repeat center #6C6C6C`;
      PostImage.style.opacity = 0.5;
    }
    // else {
    //   const PostImage = document.querySelector("#post_image");
    //   // post_preview = <PostPreview src={previewURL} />
    //   PostImage.style.background = "#6C6C6C";
    //   PostImage.style.opacity = 1;
    // }
  }, [file]);

  let post_preview = null;

  if (file) {
    const PostImage = document.querySelector("#post_image");
    // post_preview = <PostPreview src={previewURL} />;
    PostImage.style.background = `url(${previewURL}) no-repeat center #6C6C6C`;
    // PostImage.style.opacity = 0.5;
  }

  const onChangeFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setPreviewURL(reader.result);
      setImgUrl([...imgUrl, { image: reader.result }]);
      // setImgUrl([...imgUrl, { name: file }]);
      setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
    }
  };

  const onClickPlusImgInput = () => {
    if (imgCount.length + 1 == imgUrl.length) {
      setImgCount([...imgCount, 1]);
    }
  };

  const onClickMinusImgInput = (idx) => {
    alert(idx);
    if (imgCount.length > 2) {
      // setImageUrl(imgUrl.pop());
      setImgCount(imgCount.pop());

      let copy = imgUrl.splice(idx + 1);
      copy = imgUrl.splice(0, idx).join(copy);
      console.log(copy);
    }
  };

  const onClickPlusBtn = (e) => {
    //재료 input 칸 추가
    if (
      inputarr[inputarr.length - 1].name == "" &&
      inputarr[inputarr.length - 1].url == ""
    ) {
      alert("Materials의 빈칸을 먼저 채워주세요.");
    } else {
      setInputarr([...inputarr, { name: "", url: "" }]);
    }
  };

  const onClickImageUpload = (e) => {
    if (!file) {
      ref.current.click();
    }
  };

  const onCLickMinusBtn = (e) => {
    setFile("");
    setPreviewURL("");

    const PostImage = document.querySelector("#post_image");
    // post_preview = <PostPreview src={previewURL} />;
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
            <div className={styles.postContent}>
              <div className={styles.postContentWrap}>
                {imgCount.map((a, i) => (
                  <>
                    <div
                      className={styles.ingredientPlusBtn}
                      onClick={() => {
                        onClickMinusImgInput(i);
                      }}
                      id={i}
                    >
                      <img
                        src={minusIcon}
                        style={{ height: "50%", width: "50%" }}
                        alt="minusIcon"
                      />
                    </div>
                    <div
                      className={styles.imgBtn}
                      onClick={onClickImageUpload}
                      id={"post_image"}
                      key={i}
                    >
                      <input
                        type="file"
                        name={"post_img"}
                        accept="image/*"
                        onChange={onChangeFile}
                        ref={ref}
                      />
                    </div>
                  </>
                ))}
                {/* {imgUrl
                  ? imgUrl.map((a, i) => (
                      <img
                        className={styles.postImage}
                        key={i}
                        style={{
                          background:
                            "url(" + a.image + ") no-repeat center #6C6C6C",
                        }}
                        id={"img_id" + i}
                        alt={imageUrl}
                      />
                    ))
                  : null} */}
                <div
                  className={styles.ingredientPlusBtn}
                  onClick={onClickPlusImgInput}
                >
                  <img src={plusIcon} alt="plusIcon" />
                </div>

                {/* <div
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
                </div> */}

                {/* <div className={styles.postContent}>
                <div className={styles.postContentWrap}> */}
                <div className={styles.title} htmlFor={"post_title"}>
                  YouTube
                </div>
                <input
                  type="url"
                  placeholder={"영상의 유투브 URL을 입력해주세요."}
                  id={"post_title"}
                />
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
                <div
                  className={styles.postCancelBtn}
                  onClick={() => {
                    navigate("/list");
                  }}
                >
                  취소
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default PostCreate;
