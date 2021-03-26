import { Switch, Route, Redirect } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "./components/Navigation";
import HomeViews from "./views/HomeViews";
import TeamViews from "./views/TeamViews";
import ServiceViews from "./views/ServiceViews";
import ContactsViews from "./views/ContactsViews";

import "./App.css";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <Navigation />

      <Suspense fallback={<h1>hallo</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeViews />
          </Route>

          <Route path="/team">
            <TeamViews />
          </Route>

          <Route path="/service">
            <ServiceViews />
          </Route>

          <Route path="/contacts">
            <ContactsViews />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Fragment>
  );
}
