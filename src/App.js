import React from "react";
import { Route, Routes } from "react-router-dom";
import "./globalstyle.scss";

import NavBar from "./components/layout/NavBar/index.js";

import Footer from "./components/layout/footer/Footer.js";
import MainPage from "./views/post/mainPage/index.js";
import Auth from "./views/user/authPage/index.js";
import MyPage from "./views/user/myPage/index.js";
import PostList from "./views/post/list";
import PostCreate from "./views/post/create";
import PostDetail from "./views/post/detail";
import AuthRoute from "./components/routing/authRoute";

function App() {
  return (
    <div className="global">
      <NavBar />
      <Auth />
      <Footer>
        <Routes className="global-format">
          <Route path="/" element={MainPage} exact={true} />
          {/*<Route path="/:id" component={PostDetail} />*/}
          <Route path="/myPage" element={AuthRoute}>
            <Route path="/myPage" element={MyPage} />
          </Route>
          <Route path="/auth" element={Auth} />
          <Route path="/create" element={AuthRoute}>
            <Route path="/create" element={PostCreate} />
          </Route>
          <Route path="/list" element={PostList} />
        </Routes>
      </Footer>
    </div>
  );
}

export default App;
