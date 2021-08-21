import React from "react";
import { Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./views/post/MainPage";
import NavBar from "../../art_recipe_front/src/components/layout/NavBar/NavBar.js";
import Footer from "./components/layout/footer/Footer.js";

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
      {/* <Route path="/" component={PostList} />
      <Route path="/" component={MyPage}  />
      <Route path="/" component={Auth}  /> */}
      <Footer />
    </div>
  );
}

export default App;
