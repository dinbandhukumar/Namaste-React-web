

import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
"h1",

{id :'heading'},

"Hello world from React library !");

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "I am in h1 tag"),
    React.createElement("h2", { key: 2 }, "I am in h2 tag"),
  ])
); 

*/


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
