import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../../views/user/authPage";

const AuthRoute = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  console.log("로그인 상태 확인중....");
  isLoggedIn
    ? console.log("로그인 상태 " + isLoggedIn + " : 로그인 성공")
    : console.log("로그인 실패");
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" element={Login} />;
};

export default AuthRoute;
