import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import Root from "Root";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>
);
