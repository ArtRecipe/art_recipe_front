// const initialState = {
//     username: null,
//     snsurl: null,
//     introduce:null,
// }
//
// const userReducer = (state=initialState, action) => {
//         switch (action.type) {
//             case LOG_IN:
//                 return {
//                     ...state,
//                     username: action.username,
//                     snsurl:action.snsurl,
//                     introduce:action.introduce
//                 }
//
//             case LOG_OUT:
//                 return {
//                     ...state,
//                     username: null,
//                     snsurl: null,
//                     introduce: null
//                 }
//
//
//             default:
//                 return state;
//         }
//
//
// }
//
// export default userReducer();