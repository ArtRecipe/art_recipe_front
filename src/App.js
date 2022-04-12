import React from "react";
import { Route, Routes } from "react-router-dom";
import "./globalstyle.scss";

import NavBar from "./components/layout/NavBar/NavBar";

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
    <div className="global-form">
      <NavBar />

      <Routes>
        <Route path="/" component={MainPage} exact={true} />
        {/*<Route path="/:id" component={PostDetail} />*/}
        <Route path="/MyPage" element={AuthRoute}>
          <Route path="/MyPage" component={MyPage} />
        </Route>
        <Route path="/auth" component={Auth} />
        <Route path="/create" element={AuthRoute}>
          <Route path="/create" component={PostCreate} />
        </Route>
        <Route path="/list" component={PostList} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
