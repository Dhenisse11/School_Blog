import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import ContainerHome from "./containers/ContainerHome";
import ContainerPoo from "./containers/ContainerPoo";
import ContainerDesweb from "./containers/ContainerDesweb";
import ContainerDesfront from "./containers/ContainerDesfront";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ContainerHome}></Route>
        <Route exact path="/poo" component={ContainerPoo}></Route>
        <Route exact path="/desarrollo_web" component={ContainerDesweb}></Route>
        <Route
          exact
          path="/desarrollo_front"
          component={ContainerDesfront}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
