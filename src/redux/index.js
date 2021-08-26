import { combineReducers } from "redux";
import App from "./app/reducer";

// import postsReducer from "./posts";
// import postReducer from "./post";
// import commentsReducer from "./comments";

import userReducer from "./user";
import chatReducer from "./chat";
import LanguageSwitcher from "./languageSwitcher/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";

const rootReducer = combineReducers({
  App,
  user: userReducer,
  chat: chatReducer,
  LanguageSwitcher,
  ThemeSwitcher,
});

export default rootReducer;
