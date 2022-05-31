import React, { useEffect, useRef, useState } from "react";
import styles from "./create.module.scss";

import plusIcon from "../../../assets/images/plus_btn.svg";
import minusIcon from "../../../assets/images/min_btn.svg";
import minusIconB from "../../../assets/images/min_btn_b.svg";
import PlusInput from "./plusInput"; //Materials 파트
import CreateBanner from "../../../components/CreateBanner";

import { useNavigate } from "react-router-dom";
//Todo : postForm을 jsonNested 하기 전에 postForm.materials에 materials에서 id를 제외하고 입력해야함
//Todo : postForm을 jsonNested 하기 전에 postForm 이미지배열에 imgUrl에서 id를 제외하고 입력해야함
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
  const [materials, setMaterials] = useState([{ id: 0, name: "", url: "" }]); // materials의 id는 삭제 기능을 위한 것으로 서버에 보낼 시 mateirals의 id를 제외하고 postForm materials 에 저장해야함
  let midx = 0;

  const [imageUrl, setImageUrl] = useState(null); //전에 진희의 작업사항
  const [imgUrl, setImgUrl] = useState([{ id: 0, image: PlusInput }]); //[{ image: "" }]

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState(null);

  let nextId = useRef(1);
  let imgId = useRef(0);

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

  // if (file) {
  //   const PostImage = document.querySelector("#post_image");
  //   // post_preview = <PostPreview src={previewURL} />;
  //   PostImage.style.background = `url(${previewURL}) no-repeat center #6C6C6C`;
  //   // PostImage.style.opacity = 0.5;
  // }

  const onChangeFile = (e, img_id) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      //setPreviewURL(reader.result);

      let copy = imgUrl;
      let obj = copy.find((a) => {
        if (a.id === img_id) {
          return true;
        }
      });
      const index = copy.indexOf(obj);
      if (index === -1) {
        alert("에러");
      } else {
        copy[index].image = reader.result;
        setImgUrl(copy);
      }

      // setImgUrl([...imgUrl, { name: file }]);
      // setPreviewURL(reader.result);
      //setPreviewURL(reader.result);
    };
    reader.readAsDataURL(file);
    if (e.target.files[0]) {
      const img = new FormData();
      img.append("file", e.target.files[0]);
    }
  };

  const onClickPlusImgInput = () => {
    //이미지 추가
    if (imgUrl[imgUrl.length - 1].image === PlusInput) {
      alert("이미지를 먼저 업로드해주세요.");
    } else {
      imgId.current += 1;
      setImgUrl([...imgUrl, { id: imgId.current, image: PlusInput }]);
    }
  };

  const onClickMinusImgInput = (idx) => {};

  const onClickImageUpload = (e) => {
    if (!file) {
      ref.current.click();
    }
  };

  const onClickMinusBtn = (e) => {
    //이미지 삭제
    setFile("");
    setPreviewURL("");

    const PostImage = document.querySelector("#post_image");
    // post_preview = <PostPreview src={previewURL} />;
    PostImage.style.background = "#6C6C6C";
    PostImage.style.opacity = 1;
  };

  //input Texts and URLS 값 관리
  const onChangeInput = (e) => {
    const val = e.target.value;
    const eid = e.target.id;
    if (eid === "post_youtube") {
      setPostForm({ ...postForm, url: val });
    } else if (eid === "post_title") {
      setPostForm({ ...postForm, title: val });
    } else if (eid === "mt") {
      let copy = materials;
      let obj = copy.find((a) => {
        if (a.id === midx) {
          return true;
        }
      });
      const index = copy.indexOf(obj);
      if (index === -1) {
        alert("에러");
      } else {
        copy[index].name = val;
        setMaterials(copy);
      }
    } else if (eid === "murl") {
      let copy = materials;
      let obj = copy.find((a) => {
        if (a.id === midx) {
          return true;
        }
      });
      const index = copy.indexOf(obj);
      if (index === -1) {
        alert("에러");
      } else {
        copy[index].url = val;
        setMaterials(copy);
      }
    } else if (eid === "post_color") {
      setPostForm({ ...postForm, color: val });
    }
  };

  const onClickPlusM = (e) => {
    const name = materials[materials.length - 1].name;
    const url = materials[materials.length - 1].url;
    if (name === "" && url === "") {
      alert("Materials의 빈칸을 먼저 채워주세요.");
    } else {
      setMaterials([...materials, { id: nextId.current, name: "", url: "" }]);
      nextId.current += 1;
    }
  };
  const onClickMinusM = (e, index) => {
    if (materials.length === 1) {
      //한 칸 밖에 없는데 삭제 누를 경우
      setMaterials([{ id: "0", name: "", url: "" }]); //칸만 비워줌
      const inputT = document.getElementById("mt");
      const inputURL = document.getElementById("murl");
      inputT.value = null;
      inputURL.value = null;
    } else {
      setMaterials(materials.filter((material) => material.id !== index));
    }
  };

  const onSubmitPost = () => {
    // const response = postData();
  };

  return (
    <>
      <div className={styles.postBanner}>
        <CreateBanner />
      </div>
      <div className={styles.createWrap}>
        <div className={styles.createAdvice}>
          나만의 재료와 미술작품을 공유하고, 작품에 스토리를 더하세요 !
        </div>
        <div className={styles.contentWrap}>
          <form className={styles.form} action="#" method="post">
            <div className={styles.postContent}>
              <div className={styles.postContentWrap}>
                {imgUrl.map((a, i) => (
                  <>
                    <div
                      key={a.id}
                      className={styles.ingredientPlusBtn}
                      onClick={() => {
                        onClickMinusImgInput(a.id);
                      }}
                      id={a.id}
                    >
                      <img
                        onClick={() => {
                          onClickMinusBtn(a.id);
                        }}
                        src={minusIcon}
                        style={{ height: "50%", width: "50%" }}
                        alt="minusIcon"
                      />
                    </div>
                    <div
                      className={styles.imgBtn}
                      onClick={onClickImageUpload}
                      style={{
                        background: `url(${a.image}) no-repeat center #6C6C6C`,
                      }}
                      id={"post_image"}
                      key={i}
                    >
                      <input
                        type="file"
                        name={"post_img"}
                        accept="image/*"
                        onChange={(e) => {
                          onChangeFile(e, a.id);
                        }}
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
                  {materials.map((item, index) => (
                    <div className={styles.ingredientInputTop} key={item.id}>
                      <input
                        onChange={(e) => {
                          midx = item.id;
                          onChangeInput(e);
                        }}
                        type="text"
                        placeholder={item.name}
                        id={"mt"}
                      />
                      <input
                        onChange={(e) => {
                          midx = item.id;
                          onChangeInput(e);
                        }}
                        type="url"
                        placeholder={item.url}
                        id={"murl"}
                      />
                      <img
                        className={styles.minusImg}
                        onClick={(e) => {
                          onClickMinusM(e, index);
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
