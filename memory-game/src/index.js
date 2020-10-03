import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";

import Cards from "./components/Cards";

function App() {
  return <Cards />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
