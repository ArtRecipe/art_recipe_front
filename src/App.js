import PostBanner from "./views/post/banner";
import GlobalStyle from "./GlobalStyle";
import PostCreate from "./views/post/create";

function App() {
  return (
      <>
         <GlobalStyle/>
         <PostBanner />
          <PostCreate/>
      </>
  );
}

export default App;
