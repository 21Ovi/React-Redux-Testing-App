import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Hi there");
  expect(linkElement).toBeInTheDocument();
});

// it("render wihtout crashing", () => {
//   const div = document.createElement("div");
//   render(<App />, div);

//   expect(div.innerHTML).toContain("Hi there");

//   // eslint-disable-next-line no-undef
//   unmountComponentAtNode(div);
// });
