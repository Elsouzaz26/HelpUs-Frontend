import { combineReducers } from "redux";
import App from "./app/reducer";

// import postsReducer from "./posts";
// import postReducer from "./post";
// import commentsReducer from "./comments";

import usersReducer from "./users";
import LanguageSwitcher from "./languageSwitcher/reducer";
import ThemeSwitcher from "./themeSwitcher/reducer";

const rootReducer = combineReducers({
  App,
  users: usersReducer,
  LanguageSwitcher,
  ThemeSwitcher,
});

export default rootReducer;
