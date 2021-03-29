import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import ButtonCall from "./components/ButtonCall";
import HomeViews from "./views/HomeViews";
import "./App.css";

const TeamViews = lazy(() => import("./views/TeamViews.js"));
const ServiceViews = lazy(() => import("./views/ServiceViews.js"));
const ContactsViews = lazy(() => import("./views/ContactsViews.js"));

export default function App() {
  return (
    <Fragment>
      <Navigation />
      <Suspense fallback={<h1>D E N T</h1>}>
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

      <ButtonCall />
    </Fragment>
  );
}
