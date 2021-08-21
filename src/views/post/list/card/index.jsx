import {DefailtProfile, PostCardWrap, UserDetail, UserName} from "./styles";

const PostCard = ({thumbnail, username, profile}) => {
    return (
        <PostCardWrap>
            <img src={thumbnail} alt={thumbnail}/>
            <UserDetail>
                {profile ? <img src={profile} alt={profile} /> : <DefailtProfile />}
                <UserName>{username}</UserName>
            </UserDetail>
        </PostCardWrap>
    );
}

export default PostCard;