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
  const userid = useSelector((user) => user.user.user.id);
  console.log(userid);

  const [postForm, setPostForm] = useState({
    writer: { id: userid },
    title: "",
    color: "",
    desc: "",
    url: "",
    materials: [{ name: "", url: "" }],
  });
  const [materials, setMaterials] = useState([{ id: 0, name: "", url: "" }]); // materials의 id는 삭제 기능을 위한 것으로 서버에 보낼 시 mateirals의 id를 제외하고 postForm materials 에 저장해야함
  let midx = 0;
  const [imgInfo, setImgInfo] = useState([{ id: 0, files: null }]);
  const [imgFile, setImgFile] = useState([]);

  let nextId = 1;
  let imgId = 0;

  const onChangeFile = (e, img_id) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files;
    console.log(file);
    // reader.onloadend = () => {
    let arr = [...imgInfo];
    arr = arr.filter((a) => a.id !== img_id);
    arr.push({ id: img_id, files: [...file] });
    setImgInfo(arr);
    console.log("imgInfo");
    console.log(imgInfo);
    // let copy = [...imgInfo];
    // let obj = copy.find((a) => {
    //   if (a.id === img_id) {
    //     return true;
    //   }
    // });
    // const index = copy.indexOf(obj);
    // if (index === -1) {
    //   alert("에러");
    // } else {
    //   copy[index].index = reader.result;
    //   setImgInfo(copy);
    // }
    // };
    // if (file) {
    //   reader.readAsDataURL(file);
    //   if (e.target.files[0]) {
    //     const img_formD = new FormData();
    //     img_formD.append("file", e.target.files[0]);
    //   }
    // }
  };

  const onClickPlusImgInput = () => {
    //이미지 입력칸 추가
    console.log(imgInfo);
    if (imgInfo[imgInfo.length - 1].files === null) {
      alert("이미지를 먼저 업로드해주세요.");
    } else {
      imgId += 1;
      setImgInfo([...imgInfo, { id: imgId, files: null }]);
    }
  };

  const onClickMinusImgInput = (imgid) => {
    if (imgInfo.length === 1) {
      //업로드한 이미지input이 하나일때
      setImgInfo([{ id: 0, files: null }]);
      imgId = 0;
      const inputImg = document.getElementById("post_img");
      inputImg.value = null;
    } else {
      setImgInfo(imgInfo.filter((image) => image.id !== imgid));
    }
    console.log(imgInfo);
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
      let copy = [...materials];
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
      setMaterials([{ id: "0", name: "", url: "" }]); //한 칸 밖에 없는데 삭제 누를 경우 칸만 비워줌
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
    let postSubmit = { ...postForm };
    let formData = new FormData();
    for (let i = 0; i < materials.length; i++) {
      let arr = [];
      if (materials[i].name !== "" || materials[i].url !== "") {
        const mat = { name: materials[i].name, url: materials[i].url };
        arr.push(mat);
      }
      if (arr.length >= 1) {
        postSubmit.materials = arr;
      } else {
        postSubmit.materials = [];
      }

      for (let i = 0; i < imgInfo.length; i++) {
        if (imgInfo[i].files !== null) {
          for (let j = 0; j < imgInfo[i].files.length; j++) {
            formData.append("files", imgInfo[i].files[j]);
          }
        }
      }
      formData.append("data", postSubmit);
    }

    console.log(formData);
    try {
      const res = await postPost(postSubmit);
      //const res = await postPost(formData);
      console.log(res);
      navigate("/list");
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
        <div className={styles.contentWrap}>
          <form className={styles.form} action="#" method="post">
            <div className={styles.postContent}>
              <div className={styles.postContentWrap}>
                <div className={styles.title} htmlFor={"post_title"}>
                  Image
                </div>

                {imgInfo.map((a, i) => (
                  <div className={styles.form}>
                    <input
                      type="file"
                      id={"post_img"}
                      accept="image/*"
                      multiple="multiple"
                      onChange={(e) => {
                        onChangeFile(e, a.id);
                      }}
                    />
                    <img
                      className={styles.minusImg}
                      onClick={() => {
                        onClickMinusImgInput(a.id);
                      }}
                      src={minusIconB}
                      alt="minusImg"
                    />
                  </div>
                ))}

                <div
                  className={styles.ingredientPlusBtn}
                  onClick={onClickPlusImgInput}
                >
                  <img src={plusIcon} alt="plusIcon" />
                </div>
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
