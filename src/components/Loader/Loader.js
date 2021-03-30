import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function LoaderView() {
  return (
    <div
      style={{
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "-50% , -50%",
      }}
    >
      <Loader
        type="Audio"
        color="#fe6102"
        height={60}
        width={60}
        timeout={3000}
      />
    </div>
  );
}
