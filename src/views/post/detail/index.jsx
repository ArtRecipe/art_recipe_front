import React, {useEffect, useState} from 'react';
import {getDataOnly} from "../../../services/api";
import DefaultProfile  from '../../../assets/images/profile.png';

const PostDetail = () => {
    // const id = match.params.id;
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
    // console.log(id);
    console.log('디테일페이지');
    console.log(window.location.href);
    

    useEffect(() => {
        setError(null);
		setDetails(null);
		setLoading(true);
        getDataOnly().then((res)=>{
            setDetails(res.data);
            
            console.log("Data Load SUCCESS: DETAIL PAGE");
            console.log(res.data);
        }).then((rej)=>{
            console.error(rej);
            setError(rej);
        })
        setLoading(false);
    }, []);
    // 대기중일때
	if (loading) {
		return <div className="list-block">로딩 중</div>;
	}
	if (error) return <div>에러가 발생했습니다</div>;
	// 아직 디테일s값이 설정되지 않았을때
	if (!details) {
		console.log('아직 값이 설정되지 않음');
		return null;
	}


    return (
        <div>
            <h1>Post Detail Page</h1>
            {details.writer.profile ? <div>{details.writer.profile}</div> :<img src={DefaultProfile} style={{height:'3rem',width:'3rem'}} alt="Profile" /> }
            {details.writer.username}
            <h3>{details.title}</h3>
            <img src={details.thumbnail} alt="picture" />
            {details.desc}
            <h3>최초 업로드 DATE</h3>
            {details.created_at}
            <h3>최신 업로드 DATE</h3>
            {details.updated_at}
        </div>
    )
}

export default PostDetail;