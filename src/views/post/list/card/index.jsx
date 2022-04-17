import { PostCardWrap, ProfileImg, Thumbnail, UserDetail, UserName} from "./styles";
import DefaultProfile from '../../../../assets/images/profile.png'

const PostCard = ({thumbnail, username, profile}) => {
    return (
        <PostCardWrap>
            <Thumbnail src={thumbnail} alt={thumbnail}/>
            <UserDetail>
                {profile ? <img src={profile} alt={profile} /> : <img src={DefaultProfile} style={{height:'3rem',width:'3rem'}} alt={profile} />}
                <UserName>{username}</UserName>
            </UserDetail>
        </PostCardWrap>
    );
}

export default PostCard;