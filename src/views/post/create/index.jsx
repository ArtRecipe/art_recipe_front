import React, { useEffect, useRef, useState } from "react";
import styles from "./create.module.scss";

import plusIcon from "../../../assets/images/plus_btn.svg";
import minusIcon from "../../../assets/images/min_btn.svg";
import minusIconB from "../../../assets/images/min_btn_b.svg";
import PlusInput from "./plusInput"; //Materials 파트
import { PostCreateBanner } from "../../../components/Banner/postCreateBanner";

import { useNavigate } from "react-router-dom";
import { postPost } from "../../../axios/Post";

import { useSelector } from "react-redux";
//Todo : postForm을 jsonNested 하기 전에 postForm.materials에 materials에서 id를 제외하고 입력해야함
//Todo : postForm을 jsonNested 하기 전에 postForm 이미지배열에 imgUrl에서 id를 제외하고 입력해야함 + submit할때
// /api/post/post/ POST : 게시글 생성. 여러 개의 image 및 material 생성 가능 json nested하게 보내면 됨.
const PostCreate = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((user) => user.user.user);
  console.log(user);

  const [postForm, setPostForm] = useState({
    writer: user,
    title: "",
    color: "",
    desc: "",
    url: "",
    images: [],
    materials: [{ name: "", url: "" }],
  });
  const [materials, setMaterials] = useState([{ id: 0, name: "", url: "" }]); // materials의 id는 삭제 기능을 위한 것으로 서버에 보낼 시 mateirals의 id를 제외하고 postForm materials 에 저장해야함
  let midx = 0;

  const [imageUrl, setImageUrl] = useState(null); //전에 진희의 작업사항
  const [imgUrl, setImgUrl] = useState([{ id: 0, image: PlusInput }]); //[{ image: "" }]

  const [imgFile, setImgFile] = useState([]);
  const [previewURL, setPreviewURL] = useState(null);

  let nextId = 1;
  let imgId = 0;

  // useEffect(() => {
  //   if (imgFile) {
  //     const PostImage = document.querySelector("#post_image");
  //     // post_preview = <PostPreview src={previewURL} />;
  //     PostImage.style.background = `url(${previewURL}) no-repeat center #6C6C6C`;
  //     PostImage.style.opacity = 0.5;
  //   }
  //   // else {
  //   //   const PostImage = document.querySelector("#post_image");
  //   //   // post_preview = <PostPreview src={previewURL} />
  //   //   PostImage.style.background = "#6C6C6C";
  //   //   PostImage.style.opacity = 1;
  //   // }
  // }, [imgFile]);

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
      setImgFile([...imgFile, file]);
      //setPreviewURL(reader.result);

      let copy = [...imgUrl];
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
    if (file) {
      reader.readAsDataURL(file);
      if (e.target.files[0]) {
        const img_formD = new FormData();
        img_formD.append("file", e.target.files[0]);
      }
    }
  };

  const onClickPlusImgInput = () => {
    //이미지 입력칸 추가
    if (imgUrl[imgUrl.length - 1].image === PlusInput) {
      alert("이미지를 먼저 업로드해주세요.");
    } else {
      imgId += 1;
      setImgUrl([...imgUrl, { id: imgId, image: PlusInput }]);
    }
  };

  const onClickMinusImgInput = (imgid) => {
    console.log(imgid);
    if (imgUrl.length === 1) {
      //업로드한 이미지가 하나일때
      setImgFile([]);
      setImgUrl([{ id: 0, image: PlusInput }]);
      imgId = 0;
      const inputImg = document.getElementById("imgInput");
      inputImg.value = null;
    } else {
      setImgUrl(imgUrl.filter((image) => image.id !== imgid));
    }
    console.log(imgUrl);
  };

  const onClickImageUpload = (e, idx) => {
    if (imgFile.length === 0) {
      // ref.current.click();
    } else if (!imgFile[idx]) {
      // ref.current.click();
    }
  };

  const onClickMinusBtn = (e) => {
    //이미지 삭제 ---진희
    setImgFile("");
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
    } else if (eid === "post_desc") {
      setPostForm({ ...postForm, desc: val });
    }
    console.log(postForm);
  };

  const onClickPlusM = (e) => {
    const name = materials[materials.length - 1].name;
    const url = materials[materials.length - 1].url;
    if (name === "" && url === "") {
      alert("Materials의 빈칸을 먼저 채워주세요.");
    } else {
      setMaterials([...materials, { id: nextId, name: "", url: "" }]);
      nextId += 1;
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
      nextId = 1;
    } else {
      setMaterials(materials.filter((material) => material.id !== index));
    }
  };

  const onSubmitPost = async () => {
    // const response = postData();
    delete materials.id;
    let postSubmit = { ...postForm };
    // postSubmit.materials = [...materials];
    delete imgUrl.id;

    // postSubmit = { ...postSubmit, images: imgUrl };
    postSubmit = JSON.stringify(postSubmit);
    console.log(postSubmit);
    try {
      const res = await postPost(postSubmit);
      console.log(res);
    } catch (err) {
      console.log(err);
      alert("게시물 업로드 실패");
    }
  };

  return (
    <>
      <div className={styles.postBanner}>
        <PostCreateBanner />
      </div>
      <div className={styles.createWrap}>
        {/* <div className={styles.createAdvice}>
          나만의 재료와 미술작품을 공유하고, 작품에 스토리를 더하세요 !
        </div> */}
        <div className={styles.contentWrap}>
          <form className={styles.form} action="#" method="post">
            <div className={styles.postContent}>
              <div className={styles.postContentWrap}>
                <div className={styles.title} htmlFor={"post_title"}>
                  Image
                </div>
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
                        // onClick={() => {
                        //   // onClickMinusBtn(a.id);
                        //   onClickMinusImgInput(a.id);
                        // }}
                        src={minusIcon}
                        style={{ height: "50%", width: "50%" }}
                        alt="minusIcon"
                      />
                    </div>

                    <input
                      className={styles.fileUpload}
                      type="file"
                      name={"post_img"}
                      accept="image/*"
                      onChange={(e) => {
                        onChangeFile(e, a.id);
                      }}
                      ref={ref}
                      id={"imgInput"}
                    />
                  </>
                ))}

                <div className={styles.ingredientPlusBtn} onClick={onClickPlusImgInput}>
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
                  onChange={onChangeInput}
                  type="url"
                  placeholder={"영상의 유투브 URL을 입력해주세요."}
                  id={"post_youtube"}
                />
                <div className={styles.title} htmlFor={"post_title"}>
                  TITLE
                </div>
                <input
                  onChange={onChangeInput}
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
                        placeholder={"재료명"}
                        id={"mt"}
                      />
                      <input
                        onChange={(e) => {
                          midx = item.id;
                          onChangeInput(e);
                        }}
                        type="url"
                        placeholder={"구입처 URL"}
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
                  <div className={styles.ingredientPlusBtn} onClick={onClickPlusM}>
                    <img src={plusIcon} alt="plusIcon" />
                  </div>
                </div>
              </div>
              <div className={styles.postContentWrap}>
                <div className={styles.title} htmlFor={"post_color"}>
                  COLOR
                </div>
                <input
                  onChange={onChangeInput}
                  type="text"
                  placeholder={"작품의 색상들을 입력해주세요."}
                  id={"post_color"}
                />
              </div>

              <div className={styles.postContentWrap}>
                <div className={styles.title} htmlFor={"post_color"}>
                  DESCRIPTION
                </div>
                <input
                  onChange={onChangeInput}
                  type="text"
                  placeholder={"작품의 설명을 입력해주세요."}
                  id={"post_desc"}
                />
              </div>

              <div className={styles.postBtnWrap}>
                <div className={styles.postSaveBtn} onClick={onSubmitPost}>
                  저장
                </div>
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
