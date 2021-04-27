import { NavLink, Route, useParams, useRouteMatch } from "react-router-dom";
import BoxView from "../components/BoxView";
import ListService from "../components/ListService";
import Orthopaedist from "../components/Orthopaedist";
import BabyDantist from "../components/BabyDantist";
import Therapeutic from "../components/Therapeutic";
import Periodontology from "../components/Periodontology";

export default function ServiceViews() {
  const { url, path } = useRouteMatch();
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

        <Route path={`${path}/therapeutic`}>
          <Therapeutic />
        </Route>

        <Route path={`${path}/periodontology`}>
          <Periodontology />
        </Route>

        <Route path={`${path}/orthopaedist`}>
          <Orthopaedist />
        </Route>

        <Route path={`${path}/baby`}>
          <BabyDantist />
        </Route>

        <Route path={`${path}/orthodontics`}>...</Route>

        <Route path={`${path}/prevention`}>...</Route>
      </div>
    </BoxView>
  );
}
