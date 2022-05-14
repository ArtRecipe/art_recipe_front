import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../../views/user/authPage/index.js";

const AuthRoute = () => {
  const accesstoken = useSelector((state) => state.user.accesstoken);
  console.log("accesstoken 발급중....");
  accesstoken
    ? console.log("access토큰 발급 성공")
    : console.log("accesstoken발급 안받음");
  return accesstoken ? <Outlet /> : <Navigate to="/auth" element={Login} />;
};

export default AuthRoute;
