import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "../Pages/Landing";
import TeacherList from "../Pages/TeacherList";
import TeacherForm from "../Pages/TeacherForm";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-class" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Routes;
