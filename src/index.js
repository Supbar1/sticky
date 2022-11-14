import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import ScrollToTop from "./components/navigation/footer/ScrollToTop";

ReactDOM.render(
  <React.Fragment>
    <Router>
    <ScrollToTop />
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);

// <React.StrictMode>
// </React.StrictMode>
