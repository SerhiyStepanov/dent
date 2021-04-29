import { Route, Switch, useRouteMatch } from "react-router-dom";

import BoxView from "../components/BoxView";
import ListService from "../components/ListService";
import PricesTable from "../components/PricesTable";

import endodontics from "../components/Prices/endodontics .json";
import implants from "../components/Prices/implants.json";
import therapeutic from "../components/Prices/therapeutic.json";
import orthopaedist from "../components/Prices/orthopaedist.json";
import babyDantist from "../components/Prices/babyDantist.json";
import orthodontics from "../components/Prices/orthodontics.json";
import prevention from "../components/Prices/prevention.json";

export default function ServiceViews() {
  const { path } = useRouteMatch();
  return (
    <BoxView>
      <h3
        style={{
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "30px",
          color: "var(--dark-color)",
        }}
      >
        Перелік усіх послуг
      </h3>

      <div>
        <ListService />

        <Switch>
          <Route path={`${path}/therapeutic`}>
            <PricesTable title="Терапія." prices={therapeutic} />
          </Route>

          <Route path={`${path}/implants`}>
            <PricesTable title="Імплантати." prices={implants} />
          </Route>

          <Route path={`${path}/endodontics`}>
            <PricesTable title="Ендодонтія." prices={endodontics} />
          </Route>

          <Route path={`${path}/orthopaedist`}>
            <PricesTable
              title="Ортопедична стоматологія."
              prices={orthopaedist}
            />
          </Route>

          <Route path={`${path}/baby`}>
            <PricesTable title="Дитяча стоматологія." prices={babyDantist} />
          </Route>

          <Route path={`${path}/orthodontics`}>
            <PricesTable title="Ортодонтія." prices={orthodontics} />
          </Route>

          <Route path={`${path}/prevention`}>
            <PricesTable title="Профілактика і гігієна." prices={prevention} />
          </Route>
        </Switch>
      </div>
    </BoxView>
  );
}
