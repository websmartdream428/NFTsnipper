import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/css/App.css";
import { IndexPage } from "pages/index";
import AppLayout from "layouts/AppLayout";

function App() {
  return (
    <Router>
      <AppLayout>
        <Route exact path="/" component={IndexPage} />
      </AppLayout>
    </Router>
  );
}

export default App;
