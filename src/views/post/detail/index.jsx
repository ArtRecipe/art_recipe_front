import React, {useEffect} from 'react';
import {getDataOnly} from "../../../services/api";

const PostDetail = () => {
    // const id = match.params.id;

    // console.log(id);
    console.log('디테일페이지');
    console.log(window.location.href);
    const id = "1";

    useEffect(() => {
        getDataOnly().then((res)=>{
            console.log(res);
        }).then((rej)=>{
            console.error(rej);
        })
    }, []);


    return (
        <div>Post Detail Page</div>
    )
}

export default PostDetail;