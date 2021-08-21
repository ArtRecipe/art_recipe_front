import React from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./views/post/MainPage";
import NavBar from "../../art_recipe_front/src/components/layout/NavBar/NavBar.js";

{
  /* <div>ART{"&"}RECIPE</div>
<div>MY PAGE</div>
<div>LOG IN</div> */
}

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Route path="/" component={MainPage} exact={true} />
      {/* <Route path="/" component={PostList} exact={true} />
      <Route path="/" component={MyPage} exact={true} />
      <Route path="/" component={LogIn} exact={true} /> */}

      <div>hello world!</div>
    </div>
  );
}

export default App;
