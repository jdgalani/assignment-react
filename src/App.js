import React from "react";
import { Provider } from "react-redux";

import Store from "./utils/Store";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import PrivateRoute from "routes/PrivateRoute";

const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <PrivateRoute path="/admin" Component={Admin} />
          <Route path="/auth" component={Auth} />
          {/* add routes without layouts */}
          <Route path="/landing" exact component={Landing} />
          <PrivateRoute path="/profile" exact Component={Profile} />
          <Route path="/" exact component={Index} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
