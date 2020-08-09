import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../Pages/Login";
import RecoverPass from "../Pages/RecoverPass";
import Register from "../Pages/Register";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recover_pass" component={RecoverPass} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
