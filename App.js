import React from "react";
import ReactDOM from "react-dom/client"



const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1tag" }, "im h1 tag"),
    React.createElement("h2", { id: "h2tag" }, "im h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
