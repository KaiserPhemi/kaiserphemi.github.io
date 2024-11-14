// react libraries
import * as React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./components/App";

// @ts-ignore
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

if (rootElement) {
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element 'root' not found in the document.");
}
