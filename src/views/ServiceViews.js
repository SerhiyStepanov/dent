import BoxView from "../components/BoxView";
import ListService from "../components/ListService";
import Treatment from "../components/Treatment";
import BabyDantist from "../components/BabyDantist";

export default function ServiceViews() {
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

      <div

      // style={
      //   window.innerWidth > 768 ? { display: "flex" } : { display: "block" }
      // }
      >
        <ListService />
        {/* <Treatment /> */}

        {/* <BabyDantist /> */}
      </div>
    </BoxView>
  );
}
