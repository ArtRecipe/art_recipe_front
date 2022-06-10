import React, { useState } from "react";
import styles from "./create.module.scss";

import plusIcon from "../../../assets/images/plus_btn.svg";
import minusIcon from "../../../assets/images/min_btn.svg";
import minusIconB from "../../../assets/images/min_btn_b.svg";
import { PostCreateBanner } from "../../../components/Banner/postCreateBanner";

import { useNavigate } from "react-router-dom";
import { postPost } from "../../../axios/Post";

import { useSelector } from "react-redux";
//TODO : 서버 업데이트이후 formData(이미지) 전송
const PostCreate = () => {
  const userid = useSelector((user) => user.user.user.id);

  const [postForm, setPostForm] = useState({
    writer: { id: userid },
    title: "",
    color: "",
    desc: "",
    url: "",
    materials: [{ name: "", url: "" }],
  });
  const [materials, setMaterials] = useState([{ id: 0, name: "", url: "" }]);
  const [imgInfo, setImgInfo] = useState([{ id: 0, files: [] }]);
  const [nextId, setNextId] = useState(1);
  const [imgId, setImgId] = useState(1);

  const onChangeInput = (e) => {
    const val = e.target.value;
    const eid = e.target.id;
    if (eid === "post_youtube") {
      setPostForm({ ...postForm, url: val });
    } else if (eid === "post_title") {
      setPostForm({ ...postForm, title: val });
    } else if (eid === "post_color") {
      setPostForm({ ...postForm, color: val });
    } else if (eid === "post_desc") {
      setPostForm({ ...postForm, desc: val });
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
                <ImgInputs
                  imgInfo={imgInfo}
                  setImgInfo={setImgInfo}
                  imgId={imgId}
                  setImgId={setImgId}
                />
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
              <Materials
                materials={materials}
                setMaterials={setMaterials}
                setNextId={setNextId}
                nextId={nextId}
              />

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
              <SubmitButtons postForm={postForm} materials={materials} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function ImgInputs(props) {
  const onChangeFile = (e, img_id) => {
    //e.preventDefault();
    let file = e.target.files;
    let arr = [...props.imgInfo];
    arr = arr.filter((a) => a.id !== img_id);
    arr.push({ id: img_id, files: [...file] });
    props.setImgInfo(arr);
  };

  const onClickMinusImgInput = (e, index) => {
    console.log(props.imgInfo);
    if (props.imgInfo.length === 1) {
      const inputImg = document.getElementById("post_img");
      inputImg.value = null;
      props.setImgId(1);
      props.setImgInfo([{ id: 0, files: [] }]);
    } else {
      props.setImgInfo(props.imgInfo.filter((a) => a.id !== index));
    }
  };

  const onClickPlusImgInput = () => {
    if (props.imgInfo[props.imgInfo.length - 1].files.length === 0) {
      alert("이미지를 먼저 업로드해주세요.");
    } else {
      props.setImgInfo([...props.imgInfo, { id: props.imgId, files: [] }]);
      props.setImgId(props.imgId + 1);
    }
  };
  return (
    <>
      <div className={styles.title} htmlFor={"post_title"}>
        Image
      </div>
      {props.imgInfo.map((a, i) => (
        <div className={styles.form} key={a.id}>
          <input
            type="file"
            id={"post_img"}
            accept="image/*"
            multiple="multiple"
            onChange={(e) => {
              onChangeFile(e, a.id);
            }}
            style={{ cursor: "pointer" }}
          />
          <img
            className={styles.minusImg}
            onClick={(e) => {
              onClickMinusImgInput(e, a.id);
            }}
            src={minusIconB}
            alt="minusImg"
          />
        </div>
      ))}
      <div className={styles.ingredientPlusBtn} onClick={onClickPlusImgInput}>
        <img src={plusIcon} alt="plusIcon" />
      </div>
    </>
  );
}

function Materials(props) {
  const onChangeInput = (e, mid) => {
    const val = e.target.value;
    const eid = e.target.id;
    if (eid === "mt") {
      let copy = [...props.materials];
      let obj = copy.find((a) => {
        if (a.id === mid) {
          return true;
        }
      });
      const index = copy.indexOf(obj);
      if (index === -1) {
        alert("에러");
      } else {
        copy[index].name = val;
        props.setMaterials(copy);
      }
    } else if (eid === "murl") {
      let copy = props.materials;
      let obj = copy.find((a) => {
        if (a.id === mid) {
          return true;
        }
      });
      const index = copy.indexOf(obj);
      if (index === -1) {
        alert("에러");
      } else {
        copy[index].url = val;
        props.setMaterials(copy);
      }
    }
  };

  const onClickMinusM = (e, index) => {
    if (props.materials.length === 1) {
      props.setMaterials([{ id: 0, name: "", url: "" }]);
      const inputT = document.getElementById("mt");
      const inputURL = document.getElementById("murl");
      inputT.value = null;
      inputURL.value = null;
      props.setNextId(1);
    } else {
      props.setMaterials(
        props.materials.filter((material) => material.id !== index)
      );
    }
  };

  const onClickPlusM = (e) => {
    const name = props.materials[props.materials.length - 1].name;
    const url = props.materials[props.materials.length - 1].url;
    if (name === "" && url === "") {
      alert("Materials의 빈칸을 먼저 채워주세요.");
    } else {
      props.setMaterials([
        ...props.materials,
        { id: props.nextId, name: "", url: "" },
      ]);
      props.setNextId(props.nextId + 1);
    }
  };

  return (
    <div className={styles.postContentWrap}>
      <div className={styles.title}>MATERIAL</div>
      <div className={styles.postMaterialSubTitle}>
        작품에 사용된 재료를 입력해주세요.
      </div>
      <div className={styles.ingredientInputWrap}>
        {" "}
        {props.materials.map((item, index) => (
          <div className={styles.ingredientInputTop} key={item.id}>
            <input
              onChange={(e) => {
                onChangeInput(e, item.id);
              }}
              type="text"
              placeholder={"재료명"}
              id={"mt"}
            />
            <input
              onChange={(e) => {
                onChangeInput(e, item.id);
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
  );
}

function SubmitButtons(props) {
  const navigate = useNavigate();

  const onSubmitPost = async () => {
    let postSubmit = { ...props.postForm };
    for (let i = 0; i < props.materials.length; i++) {
      let arr = [];
      if (props.materials[i].name !== "" || props.materials[i].url !== "") {
        const mat = {
          name: props.materials[i].name,
          url: props.materials[i].url,
        };
        arr.push(mat);
      }
      postSubmit.materials = arr;
    }
    try {
      const res = await postPost(postSubmit);
      navigate("/list");
    } catch (err) {
      console.log(err);
      alert("게시물 업로드 실패");
    }
  };

  return (
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
  );
}

export default PostCreate;
