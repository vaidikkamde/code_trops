import React from "react";
import Home from "./Home/Home";
import Students from "./Students/Students";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Layout() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/student" exact component={Students} />
        </Switch>
      </Router>
    </>
  );
}
export default Layout;
