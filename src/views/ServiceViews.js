import { Route, Switch, useRouteMatch } from "react-router-dom";

import BoxView from "../components/BoxView";
import ListService from "../components/ListService";
import PricesTable from "../components/PricesTable";

import periodontology from "../components/Prices/periodontology.json";
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
        Перелік усіх послуг:
      </h3>

      <div>
        <ListService />

        <Switch>
          <Route path={`${path}/therapeutic`}>
            <PricesTable
              title="Терапевтична стоматологія."
              prices={therapeutic}
            />
          </Route>

          <Route path={`${path}/periodontology`}>
            <PricesTable title="Пародонтологія." prices={periodontology} />
          </Route>

          <Route path={`${path}/orthopaedist`}>
            <PricesTable
              title="Ортопедична стоматологія."
              prices={orthopaedist}
            />
          </Route>

          <Route path={`${path}/baby`}>
            <PricesTable
              title="Стоматологія дитячого віку."
              prices={babyDantist}
            />
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
