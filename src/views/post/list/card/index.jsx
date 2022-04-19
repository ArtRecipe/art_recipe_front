import { PostCardWrap, ProfileImg, Thumbnail, UserDetail, UserName} from "./styles";
import DefaultProfile from '../../../../assets/images/profile.png'
import Bookmark from '../../../../assets/images/bookmark.png';
import { useNavigate } from "react-router-dom";

const PostCard = ({post, thumbnail, username, profile}) => {
    const navigate = useNavigate();
    // let address = '/post/';
    const toDetail = ()=> {
        // navigate(address+post.writer.id);
        navigate(post.writer.id);
    }

    // const bookmark = ()=> {
    // }
    return (
        <div>
             {/* <img src={Bookmark} onClick={Bookmark} style={{height:'1.5rem', width:'1rem', opacity:'0.5'}} alt="icon"/> */}
        <PostCardWrap onClick={toDetail}>
            <Thumbnail src={thumbnail} alt={thumbnail}/>
            <UserDetail>
                {profile ? <img src={profile} alt={profile} /> : <img src={DefaultProfile} style={{height:'3rem',width:'3rem'}} alt={profile} />}
                <UserName>{username}</UserName>
            </UserDetail>
        </PostCardWrap>
        </div>
    );
}

export default PostCard;