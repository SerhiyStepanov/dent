import BoxView from "../components/BoxView";
import Example from "../components/Carousel";

export default function GalleryViews() {
  return (
    <BoxView>
      <h4
        style={{
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "30px",
          color: "var(--dark-color)",
        }}
      >
        Галерея
      </h4>
      <div style={{ width: "380px", marginLeft: "auto", marginRight: "auto" }}>
        <Example />
      </div>
    </BoxView>
  );
}
