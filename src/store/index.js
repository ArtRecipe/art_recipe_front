import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default to local Storage for web

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState) => {
  const middelwares = [thunk];
  const enhancer = composeWithDevTools(applyMiddleware(...middelwares));
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
