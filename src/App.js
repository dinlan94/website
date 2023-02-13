import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import NotFound from "pages/404";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
