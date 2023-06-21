import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends Component {
  renderButton() {}

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <Routes>
        <Route path="/" exact element={<CommentList />} />
        <Route path="/post" element={<CommentBox />} />
      </Routes>
    );
  }
}

export default App;
