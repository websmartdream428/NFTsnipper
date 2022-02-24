import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/css/App.css";
import { IndexPage } from "pages/index";
import { Sidebar } from "layouts/sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Route exact path="/" component={IndexPage} />
    </Router>
  );
}

export default App;
