import { combineReducers } from "redux";
import App from "./app/reducer";

// import postsReducer from "./posts";
// import postReducer from "./post";
// import commentsReducer from "./comments";

import usersReducer from "./users";
import chatReducer from "./chat";
import LanguageSwitcher from "./languageSwitcher/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";

const rootReducer = combineReducers({
  App,
  users: usersReducer,
  chat: chatReducer,
  LanguageSwitcher,
  ThemeSwitcher,
});

export default rootReducer;
