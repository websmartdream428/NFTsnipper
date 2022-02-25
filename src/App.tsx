import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/css/App.css";
import AppLayout from "layouts/AppLayout";
import { IndexPage } from "pages/index";
import { CalendarPage } from "pages/calendar";
import { CollectionPage } from "pages/collection";

function App() {
  return (
    <Router>
      <AppLayout>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/collection" component={CollectionPage} />
      </AppLayout>
    </Router>
  );
}

export default App;
