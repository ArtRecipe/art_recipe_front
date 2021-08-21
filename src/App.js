import React from "react";
import { Redirect, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import MainPage from "./views/post/MainPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Route path="/" component={MainPage} exact={true} />
      <Redirect from="*" to="/" />

      <div>hello world!</div>
    </div>
  );
}

export default App;
