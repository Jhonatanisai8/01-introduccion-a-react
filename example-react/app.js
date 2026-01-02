import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
const appDomElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDomElement);
const button = React.createElement(
  "button",
  {
    "data-id": 123,
    class: "mi-boton",
  },
  "Me gusta"
);
root.render(button);
