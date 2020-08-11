import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TeacherList from "../Pages/TeacherList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import RecoverPass from "../Pages/RecoverPass";
import SetNewPass from "../Pages/SetNewPass";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1>To do</h1>} />
        <Route path="/study" component={TeacherList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/recover_pass" component={RecoverPass} />
        <Route path="/set-new-pass/:token" component={SetNewPass} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
