import React from "react";
import { shallow } from "enzyme";

import "../../setupTest";

import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("Shows a comment box", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("Show a comment list", () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentList).length).toEqual(1);
});
