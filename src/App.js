import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Suspense, lazy } from "react";
import LoaderView from "./components/Loader";
import Navigation from "./components/MobileNav";
import DesctopNav from "./components/DesctopNav";
import ButtonCall from "./components/ButtonCall";
import HomeViews from "./views/HomeViews";
import "./App.css";

const TeamViews = lazy(() => import("./views/TeamViews.js"));
const ServiceViews = lazy(() => import("./views/ServiceViews.js"));
const ContactsViews = lazy(() => import("./views/ContactsViews.js"));

export default function App() {
  return (
    <Fragment>
      {window.innerWidth > 768 ? <DesctopNav /> : <Navigation />}
      <Suspense fallback={<LoaderView />}>
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
