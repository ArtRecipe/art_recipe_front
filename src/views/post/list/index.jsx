import React, {useEffect, useState} from 'react';
import {getData} from "../../../services/api";
import PostBanner from "../banner";
import {PostListWrap} from "./styles";
import PostCard from "./card";

const PostList = () => {
    const [postlist,setPostlist] = useState([]);


    useEffect(() => {
        const res = getData().then(function (res){
            setPostlist([...res.data]);
            console.log('POST LIST GET SUCCESS')
            console.log(res);
        }).catch(function (rej){
            console.log(rej);
            
        });
    }, []);

    
    console.log('포스트 리스트페이지')
    console.log(postlist);
    console.log('--------')
    return (
        <>
        
            <PostBanner/>
            <PostListWrap>
                {postlist.map((post)=><PostCard key={post} thumbnail={post.thumbnail} username={post.writer.username} profile={post.profile} />)}
            </PostListWrap>
        </>
    );
}

export default PostList;