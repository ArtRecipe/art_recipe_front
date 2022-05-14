import React from "react";
import { Route, Routes } from "react-router-dom";
import "./globalstyle.scss";

import NavBar from "./components/NavBar/index.js";
import AuthRoute from "./components/routing/authRoute";

import PostMainPage from "./views/post/mainPage";
import PostList from "./views/post/list";
import PostCreate from "./views/post/create";
import PostDetail from "./views/post/detail";
import AuthPage from "./views/user/AuthPage";
import MyPage from "./views/user/MyPage";

function App() {
  return (
    <div className="global">
      <NavBar />
      {/* Todo : AuthRoute이 제대로 작동 안함 */}
      {/* Todo : Footer */}
      <Routes className="global-form">
        <Route path="/" element={<PostMainPage />} exact={true} />
        <Route
          path="*"
          element={
            <div>
              <h2 style={{ margin: "20%", color: "grey" }}>없는 페이지 입니다.</h2>
            </div>
          }
        />
        {/* <Route path="/detail/:id" element={<PostDetail />} /> */}
        <Route path="/myPage" element={<AuthRoute />}>
          <Route path="/myPage" element={<MyPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/create" element={<AuthPage />}>
          <Route path="/create" element={<PostCreate />} />
        </Route>
        <Route path="/list" element={<PostList />} />
        <Route path="/detail/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
