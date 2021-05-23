import BoxView from "../components/BoxView";
import Example from "../components/Carousel";

export default function GalleryViews() {
  return (
    <BoxView>
      <section>
        <h5
          style={{
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "30px",
            color: "var(--dark-color)",
          }}
        >
          Галерея
        </h5>
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Example />
        </div>
      </section>
    </BoxView>
  );
}
