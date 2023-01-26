import React from "react";
import { mount } from "enzyme";

import CommentBox from "../CommentBox";
import "../../setupTest";

it("Has a text area and a button", () => {
  const wrapped = mount(<CommentBox />);
  //   console.log(wrapped.find("textarea").length);
  //   console.log(wrapped.find("button").length);

  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
