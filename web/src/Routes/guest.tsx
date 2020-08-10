import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import RecoverPass from "../Pages/RecoverPass";
import SetNewPass from "../Pages/SetNewPass";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/recover_pass" component={RecoverPass} />
        <Route path="/set-new-pass/:token" component={SetNewPass} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
