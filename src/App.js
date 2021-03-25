import { Switch, Route, Redirect } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "./components/Navigation";

import "./App.css";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <Navigation />

      <Suspense fallback={<h1>hallo</h1>}>
        <Switch>
          <Route path="/" exact></Route>

          <Route path="/team"></Route>

          <Route path="/prices"></Route>

          <Route path="/contacts"></Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Fragment>
  );
}
