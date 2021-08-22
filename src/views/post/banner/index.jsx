import React from 'react';
import {BannerSubTitle, BannerTitle, BannerTitleWrap, BannerWrap} from "./styles";


const PostBanner = () => {
    return (
        <>
            <BannerWrap>
                <BannerTitleWrap>
                    <BannerSubTitle>Art Recipe _ 나만의 재료 · 예술작품을 공유하고 아카이브</BannerSubTitle>
                    <BannerTitle>Everyday, Art Recipe</BannerTitle>
                </BannerTitleWrap>
            </BannerWrap>
        </>
    );
}

export default PostBanner;