import React, {useEffect} from 'react';
import {getData} from "../../../services/api";

const PostDetail = ({match}) => {
    const id = match.params.id;

    console.log(id);


    useEffect(() => {
        getData().then((res)=>{
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