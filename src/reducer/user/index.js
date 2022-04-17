//1차 준비 완료

// import { getUserById, Logout } from "../axios/user/action.js";

// export const SET_USER = "user/index/setUser";
// export const SET_ACCESSTOKEN = "user/index/setAccesstoken";
// export const REMOVE_USER = "user/index/removeUser";
// export const REMOVE_ACCESSTOKEN = "user/index/removeAccestoken";

// // Initial State
// const initialState = {
//   // user: {
//   // 	id: 2,
//   // 	email: 'hello1@email.com',
//   // 	idFirebase: 'RKN8DBF3',
//   // 	createdAt: '2021-11-28T14:15:29.724Z',
//   // 	updatedAt: '2021-11-28T14:15:29.724Z',
//   // 	isDeleted: false,
//   // 	organization: '고려대학교',
//   // 	loginId: 'seol2',
//   // },
//   // accesstoken: 'eW1WwuY29tIiwiaW2VzhpdM',
// };

// //action
// export const setUser = (user) => ({
//   type: SET_USER,
//   payload: user,
// });

// export const setAccesstoken = (accesstoken) => ({
//   type: SET_ACCESSTOKEN,
//   payload: accesstoken,
// });

// export const removeUser = () => ({
//   type: REMOVE_USER,
// });

// export const removeAccesstoken = () => ({
//   type: REMOVE_ACCESSTOKEN,
// });

// export const getUser = () => {
//   return async function getUserThunk(dispatch, getState) {
//     try {
//       const id = getState().user.user.id;
//       const res = await getUserById(id);
//       dispatch(setUser(res.data.user));
//     } catch (err) {
//       console.error(err);
//       console.log(err.response.data.message);
//     }
//   };
// };

// export const userLogout = async (dispatch, getState) => {
//   try {
//     const accesstoken = getState().user.accesstoken;
//     const res = await Logout(accesstoken);
//     alert(res.data.message);
//     dispatch(removeAccesstoken);
//     dispatch(removeUser());
//   } catch (err) {
//     console.log(err);
//     alert("로그아웃 에러입니다. ");
//   }
// };

// // Reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER: {
//       return {
//         ...state,
//         user: action.payload,
//         login: {
//           status: "SUCCESS",
//         },
//         status: {
//           ...state.status,
//           isLoading: true,
//           currentUser: action.username,
//         },
//       };
//     }
//     case SET_ACCESSTOKEN: {
//       return {
//         ...state,
//         accesstoken: action.payload,
//       };
//     }
//     case REMOVE_USER: {
//       return {
//         ...state,
//         user: undefined,
//         login: undefined,
//         status: undefined,
//       };
//     }
//     case REMOVE_ACCESSTOKEN: {
//       return {
//         ...state,
//         accesstoken: undefined,
//       };
//     }

//     default:
//       return state;
//   }
// };

// export default reducer;
