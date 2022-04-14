//1차 준비 완료

// //import {getPostDetailById} from '../../axios/Post';
// const initialState = {
//     //id
// };

// export const SET_POSTDETAIL = 'post/setPostDetail';

// // action creator
// export const setPostDetail = (postDetail) =>({
//     type:SET_POSTDETAIL,
//     payload:postDetail,
// });

// export const fetchPostDetail = (postId: String, accesstoken: String)=>{
//     return async (dispatch) =>{
//         try{
//             const res = await getPostDetail(postId, accesstoken);
//             dispatch(setPostDetail(res.data.data));
//             console.log(res.data.message);
//         } catch (err){
//             console.error(err);
//             console.log(err.response.data.message);
//         }
//     };
// };

// // Reducer
// const reducer = (state = initialState, action) => {
//     switch (action.type){
//         case SET_POSTDETAIL: {
//             return {
//                 ...state,
//                 detail: action.payload,
//             };
//         }
//         default:
//             return state;
//     }
// };
// export default reducer;
