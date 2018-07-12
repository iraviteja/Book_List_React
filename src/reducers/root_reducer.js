import { combineReducers } from "redux";

import BooksReducer from "./books_reducer";
import ActiveBook from "./active_book_reducer";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
