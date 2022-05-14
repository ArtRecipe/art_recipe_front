import axios from "axios";

export const getUserProfile = async () => {
  return axios(
    {
      method: "GET",
      url: "/api/accounts/user/profile/",
    },
    {
      withCredentials: true,
    }
  );
};

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

// export signUp = () =>{     소셜로그인/회원가입을 하더라도 소셜로그인 진행 후 백에서 우리 서비스 자체 토큰 발급해야함
//     return axios({
//         method: 'POST',
//         url: '',
//         data.
//     });
// };
