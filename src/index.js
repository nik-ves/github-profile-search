import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import GithubContextProvider from "./context/github-context";

ReactDOM.render(
  <GithubContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GithubContextProvider>,
  document.getElementById("root")
);
