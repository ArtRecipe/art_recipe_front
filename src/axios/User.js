//1차 준비 완료
import axios from "axios";

// export signUp = () =>{     소셜로그인/회원가입을 하더라도 소셜로그인 진행 후 백에서 우리 서비스 자체 토큰 발급해야함
//     return axios({
//         method: 'POST',
//         url: '',
//         data.
//     });
// };

export const userData = () => {
  return axios({
    method: "GET",
    url: `http://localhost:8000/api/accounts/user/profile/`,
  });
};

export const sociallogin = () => {
  return axios({
    method: "POST",
    url: `http://localhost:8000/api/oauth/google/login/`,
  });
};

// export const login = (data) = >{
//     return axios ({
//         method: 'POST',
//         url: '',
//         data,
//     });
// };

// export const getMyInfo = (userId: String)=>{
//     return axios({
//         method:'GET',
//         url: '',
//     });
// };

// export const putReviseMyInfo = (accesstoken:String, objectData:Object)=>{
//     return axios({
//         method:'PUT',
//         url: '',
//         headers: {accesstoken},
//         data:objectData,
//     });
// };

// export const logout = (accesstoken: String) => {
// 	return axios(
// 		{
// 			method: '',
// 			url: '',
// 			headers: { accesstoken },
// 		},
// 		{ withCredentials: true }
// 	);
// };
