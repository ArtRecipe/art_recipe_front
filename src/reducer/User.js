// TODO : accesstoken을 isLoggedin 으로 대체

// import { getUserById, Logout } from "../axios/user/action.js";
import { getUserProfile } from "../axios/User";

// 액션 타입
export const SET_USER = "user/setUser";
export const GET_USER = "user/getUser"; // export const SET_ACCESSTOKEN = "user/index/setAccesstoken";  ==> setIsLoggedin
// export const REMOVE_USER = "user/index/removeUser";
// export const REMOVE_ACCESSTOKEN = "user/index/removeAccestoken";

// Initial State
const initialState = {
  isLoggedin: false,
  // date_joined: "2022-05-14T22:09:04.626584+09:00"
  // email: "helloking1234567890@gmail.com"
  // id: 3
  // last_login: "2022-05-16T09:08:35.305750+09:00"
  // profile: null
  // username: "do"
};

// //action 생성 함수
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

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

export const getUser = () => {
  return async function getUserThunk(dispatch, getState) {
    try {
      const id = getState().user;
      const res = await getUserProfile();
      dispatch(setUser(res.data.user));
      console.log(res);
    } catch (err) {
      console.error(err);
      alert("로그인 실패");
    }
  };
};

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
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        isLoggedin: true,
        user: action.payload,
        login: {
          status: "SUCCESS",
        },
        status: {
          ...state.status,
          isLoading: true,
          currentUser: action.user,
        },
      };
    }

    // case SET_ACCESSTOKEN: {
    //   return {
    //     ...state,
    //     accesstoken: action.payload,
    //   };
    // }
    // case REMOVE_USER: {
    //   return {
    //     ...state,
    //     user: undefined,
    //     login: undefined,
    //     status: undefined,
    //   };
    // }
    // case REMOVE_ACCESSTOKEN: {
    //   return {
    //     ...state,
    //     accesstoken: undefined,
    //   };
    // }

    default:
      return state;
  }
};

export default reducer;
