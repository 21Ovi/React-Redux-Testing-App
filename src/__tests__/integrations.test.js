import React from "react";
import { mount } from "enzyme";
import Root from "Root";
import App from "components/App";
import "setupTest";

it("can fetch a list of comments and display them", () => {
  //  Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  //  find the 'fetch comments' byutton and click it
  // Expect ti find a list of comments!
});
