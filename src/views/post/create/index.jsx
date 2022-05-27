import React, { useEffect, useRef, useState } from "react";
import styles from "./create.module.scss";

import plusIcon from "../../../assets/images/plus_btn.svg";
import minusIcon from "../../../assets/images/min_btn.svg";
import minusIconB from "../../../assets/images/min_btn_b.svg";
import PlusInput from "./plusInput"; //Materials 파트
import PostBanner from "../banner";

import { useNavigate } from "react-router-dom";

// /api/post/post/ POST : 게시글 생성. 여러 개의 image 및 material 생성 가능 json nested하게 보내면 됨.
const PostCreate = () => {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [postForm, setPostForm] = useState({
    title: "",
    color: "",
    desc: "",
    url: "",
    materials: [{ name: "", url: "" }],
  });
  let midx = 0;

  const [imageUrl, setImageUrl] = useState(null); //전에 진희의 작업사항
  const [imgUrl, setImgUrl] = useState([{ image: "" }]); //[{ image: "" }]
  const [imgCount, setImgCount] = useState([1]);

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(null);

  const onChangeInput = (e) => {
    const val = e.target.value;
    const eid = e.target.id;
    if (eid === "post_youtube") {
      setPostForm({ ...postForm, url: val });
    } else if (eid === "post_title") {
      setPostForm({ ...postForm, title: val });
    } else if (eid === "mt") {
      let copy = postForm.materials;
      if (copy.length === midx || copy.length > midx) {
        if (copy.length > midx) {
          copy[midx].name = val;
        } else {
          copy.push({ name: val, url: "" });
        }
      } else {
        copy.push({ name: val, url: "" });
      }
      setPostForm({ ...postForm, materials: copy });
    } else if (eid === "murl") {
      let copy = postForm.materials;
      if (copy.length === midx || copy.length > midx) {
        if (copy.length > midx) {
          copy[midx].url = val;
        } else {
          copy.push({ name: "", url: val });
        }
      } else {
        copy.push({ name: "", url: val });
      }
      setPostForm({ ...postForm, materials: copy });
    } else if (eid === "post_color") {
      setPostForm({ ...postForm, color: val });
    }
  };

  useEffect(() => {
    if (file) {
      const PostImage = document.querySelector("#post_image");
      // post_preview = <PostPreview src={previewURL} />;
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
    //이미지 추가
    if (imgCount.length + 1 == imgUrl.length) {
      setImgCount([...imgCount, 1]);
    }
  };

  const onClickMinusImgInput = (idx) => {
    if (imgCount.length > 2) {
      // setImageUrl(imgUrl.pop());
      setImgCount(imgCount.pop());

      let copy = imgUrl.splice(idx + 1);
      copy = imgUrl.splice(0, idx).join(copy);
      console.log(copy);
    }
  };

  const onClickPlusM = (e) => {
    //재료 input 칸 추가
    console.log(postForm);
    let copy = postForm.materials;
    const name = postForm.materials[postForm.materials.length - 1].name;
    const url = postForm.materials[postForm.materials.length - 1].url;
    if (name === "" && url === "") {
      alert("Materials의 빈칸을 먼저 채워주세요.");
    } else {
      copy.push({ name: "", url: "" });
      setPostForm({ ...postForm, materials: copy });
    }
  };
  const onClickMinusM = (e) => {
    //재료 input 칸 삭제
    if (postForm.materials.length === 1) {
      //한 칸 밖에 없는데 삭제 누를 경우
      setPostForm({ ...postForm, materials: [{ name: "", url: "" }] }); //칸만 비워줌
    } else {
      //midx로 materials의 인덱스를 알아낼 수 있음
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
      <div className={styles.postBanner}>
        <PostBanner />
      </div>
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
                  id={"post_youtube"}
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
                  {postForm.materials.map((item, i) => (
                    <div className={styles.ingredientInputTop}>
                      <input
                        onChange={(e) => {
                          midx = i;
                          onChangeInput(e);
                        }}
                        type="text"
                        placeholder={"OO 아트붓 세트"}
                        id={"mt"}
                      />
                      <input
                        onChange={(e) => {
                          midx = i;
                          onChangeInput(e);
                        }}
                        type="url"
                        placeholder={"재료 구매처의 링크를 입력해주세요."}
                        id={"murl"}
                      />
                      <img
                        className={styles.minusImg}
                        onClick={(e) => {
                          midx = i;
                          onClickMinusM(e);
                        }}
                        src={minusIconB}
                        alt="minusImg"
                      />
                    </div>
                  ))}
                  <div
                    className={styles.ingredientPlusBtn}
                    onClick={onClickPlusM}
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
