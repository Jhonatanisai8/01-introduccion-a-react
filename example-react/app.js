import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";
const appDomElement = document.getElementById("app");
const root = ReactDOM.createRoot(appDomElement);

const button1 = React.createElement(
  "button",
  {
    "data-id": 173,
    class: "mi-boton",
  },
  "Boton 1"
);

const button2 = React.createElement(
  "button",
  {
    "data-id": 103,
    class: "mi-boton",
  },
  "Boton 2"
);

const button3 = React.createElement(
  "button",
  {
    "data-id": 113,
    class: "mi-boton",
  },
  "Boton 3"
);

// elemento padre que envolvera a los botones
const div = React.createElement(React.Fragment, null, [button1, button2, button3]);
root.render(div);
