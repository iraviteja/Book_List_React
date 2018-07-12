import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import RootReducer from "../reducers/root_reducer";
import BookList from "../containers/book_list";
import BookDetail from "../containers/book_detail";

const store = createStore(RootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <BookList />
          <BookDetail />
        </div>
      </Provider>
    );
  }
}

export default App;
