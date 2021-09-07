import React from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./views/post/MainPage";
import Footer from "./components/layout/footer/Footer.js";
import Auth from "./views/user/AuthPage/AuthPage.js";
import MyPage from "./views/user/MyPage/MyPage";
import PostList from "./views/post/list";
import PostCreate from "./views/post/create";
import NavBar from "./components/layout/NavBar/NavBar";
import PostDetail from "./views/post/detail";

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Route path="/" component={MainPage} exact={true} />
       {/*<Route path="/:id" component={PostDetail} />*/}
      <Route path="/MyPage" component={MyPage} />
      <Route path="/Auth" component={Auth} />
      <Route path="/create" component={PostCreate}/>
      <Route path="/list" component={PostList}/>
      <Footer />
    </div>
  );
}

export default App;
