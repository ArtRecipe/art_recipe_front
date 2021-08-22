import {DefaultProfile, PostCardWrap, ProfileImg, Thumbnail, UserDetail, UserName} from "./styles";

const PostCard = ({thumbnail, username, profile}) => {
    return (
        <PostCardWrap>
            <Thumbnail src={thumbnail} alt={thumbnail}/>
            <UserDetail>
                {/*{profile ? <img src={prifle} alt={profile} /> : <DefaultProfile />}*/}
                <UserName>{username}</UserName>
            </UserDetail>
        </PostCardWrap>
    );
}

export default PostCard;