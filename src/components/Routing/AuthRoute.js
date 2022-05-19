import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../../views/user/authPage";

const AuthRoute = () => {
  const isLoggedin = useSelector((state) => state.user.isLoggedin);

  console.log("로그인 상태 확인중....");
  isLoggedin
    ? console.log("로그인 상태 " + isLoggedin + " : 로그인 성공")
    : console.log("로그인 실패");
  return isLoggedin ? <Outlet /> : <Navigate to="/auth" element={Login} />;
};

export default AuthRoute;
