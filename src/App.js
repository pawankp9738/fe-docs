import { RedocStandalone } from "redoc";
import spec from "./specs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <RedocStandalone
        spec={spec}
        options={{
          nativeScrollbars: true,
          hideDownloadButton: true,
          theme: { colors: { primary: { main: "#B0171F" } } }
        }}
      />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
