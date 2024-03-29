import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign in</button>
      );
    }
  }

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
      <React.Fragment>
        {this.renderHeader()}
        <Routes>
          <Route path="/" exact element={<CommentList />} />
          <Route path="/post" element={<CommentBox />} />
        </Routes>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
