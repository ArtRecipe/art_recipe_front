import React from "react";
import { Route, Routes } from "react-router-dom";
import "./globalstyle.scss";
import NavBar from "./components/NavBar/index";
import AuthRoute from "./components/routing/AuthRoute";
import PostMainPage from "./views/post/mainPage";
import PostList from "./views/post/list";
import PostCreate from "./views/post/create/index";
import PostDetail from "./views/post/detail";
import AuthPage from "./views/user/authPage/index";
import MyPage from "./views/user/myPage/index";
import GalleryPage from "./views/user/galleryViewPage/index";

function App() {
  return (
    <div className="global">
      <NavBar />
      <Routes className="global-form">
        <Route path="/" element={<PostMainPage />} exact={true} />
        <Route path="*" element={<h2>ERROR : 없는 페이지 입니다.</h2>} />
        <Route path="/write" element={<AuthRoute />}>
          <Route path="/write" element={<MyPage />} />
        </Route>
        <Route path="/myPage" element={<AuthRoute />}>
          <Route path="/myPage" element={<MyPage />} />
        </Route>
        <Route path="/gallery/:galleryId" element={<AuthRoute />}>
          <Route path="/gallery/:galleryId" element={<GalleryPage />} />
          <Route path="/gallery/:galleryId" element={<GalleryPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/create" element={<AuthRoute />}>
          <Route path="/create" element={<PostCreate />} />
        </Route>
        <Route path="/list" element={<PostList />} />
        <Route path="/detail/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
