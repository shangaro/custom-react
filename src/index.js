import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hello world from react app.</p>;
}

render(<Hi />, document.getElementById("app"));
