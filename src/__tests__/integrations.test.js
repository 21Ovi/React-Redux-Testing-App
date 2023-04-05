/* eslint-disable testing-library/await-async-utils */
import "setupTest";

import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", () => {
  //  Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //  find the 'fetch comments' byutton and click it
  wrapped.find(".fetch-comments").simulate("click");

  // Introduce a TINY little pause
  moxios.wait(() => {
    wrapped.update();

    // Expect li find a list of comments!
    expect(wrapped.find("li").length).toEqual(2);

    // done();
    wrapped.unmount();
  });
});
