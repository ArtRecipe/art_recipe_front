import React, { useRef, useState} from 'react';
import {
    ContentWrap,
    CreateAdvice,
    CreateWrap,
    Form, IngredientInputWrap, IngredientPlusBtn, PlusImg, PostBtnWrap, PostCancelBtn,
    PostContent, PostContentWrap,
    PostImage, PostMaterialSubTitle, PostSaveBtn,
    Title
} from "./styles";

import plusIcon from "../../../assets/images/plusBtn.svg";
import minusIcon from "../../../assets/images/minBtn.svg";
import Plusinput from "./plusinput";
import PostBanner from "../banner";


const PostCreate = () => {

    const ref = useRef(null);
    const [inputarr, setInputarr] = useState([1]);

    const [file, setFile] = useState('');
    const [previewURL, setPreviewURL] = useState('');
    let post_preview = null;
    if(file !== ''){
        // post_preview = <PostPreview src={previewURL} />
        const PostImage = document.querySelector("#post_image");
        PostImage.style.background = `url(${previewURL}) no-repeat center #6C6C6C` ;
        PostImage.style.opacity = 0.5;
    }

    const onChangeInput = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setFile(file);
            setPreviewURL(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const onClickPlusBtn = (e) => {
        setInputarr([...inputarr, 0]);
    }

    const onClickImageUpload = (e) => {
        ref.current.click();
    }

    const onCLickMinusBtn = (e) => {
        setFile('');
        setPreviewURL('');
    }

return (
    <>
        <PostBanner />
        <CreateWrap>
            <CreateAdvice>나만의 재료와 미술작품을 공유하고, 작품에 스토리를 더하세요 !</CreateAdvice>
            <ContentWrap>
                <Form action="#" method='post'>
                        <PostImage onClick={onClickImageUpload} id={"post_image"}>
                            <input type="file" name={"post_img"} onChange={onChangeInput} ref={ref}/>
                            { file ? <PlusImg src={minusIcon} alt="minusIcon" onClick={onCLickMinusBtn}/> : <PlusImg src={plusIcon} alt="plusIcon"/>}
                        </PostImage>
                    <PostContent>
                        <PostContentWrap>
                            <Title htmlFor={"post_title"}>TITLE</Title>
                            <input type="text" placeholder={"작품 제목을 입력해주세요."} id={"post_title"}/>
                        </PostContentWrap>
                        <PostContentWrap>
                            <Title>MATERIAL</Title>
                            <PostMaterialSubTitle>작품에 사용된 재료를 입력해주세요.</PostMaterialSubTitle>
                            <IngredientInputWrap>
                                {inputarr.map((item) => <Plusinput />)}
                                <IngredientPlusBtn onClick={onClickPlusBtn}>
                                    <img src={plusIcon} alt="plusIcon"/>
                                </IngredientPlusBtn>
                            </IngredientInputWrap>
                        </PostContentWrap>
                        <PostContentWrap>
                            <Title htmlFor={"post_color"}>COLOR</Title>
                            <input type="text" placeholder={"작품의 색상들을 입력해주세요."} id={"post_color"}/>
                        </PostContentWrap>
                        <PostBtnWrap>
                            <PostSaveBtn type="submit">저장</PostSaveBtn>
                            <PostCancelBtn>취소</PostCancelBtn>
                        </PostBtnWrap>
                    </PostContent>
                </Form>
            </ContentWrap>
        </CreateWrap>
    </>
    )

}
export default PostCreate;
