import PostBanner from "./views/post/banner";
import GlobalStyle from "./GlobalStyle";
import PostCreate from "./views/post/create";
import { getData} from "./services/api";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Route} from "react-router-dom";
import PostList from "./views/post/list";

function App() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Route path="/create" component={PostCreate}/>
              <Route path="/list" component={PostList}/>
          </BrowserRouter>
         <GlobalStyle/>

      </Provider>
  );
}

export default App;
