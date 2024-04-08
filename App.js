import React from "react";
import ReactDOM from "react-dom/client";

/*
const heading = React.createElement(
"h1",

{id :'heading'},

"Hello world from React library !");
*/

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

/*
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

/* This is how we use Core React to create React Element*/
//React.createElement=> ReactElement - JS Object =>HTML ELEMENT (RENDERED)

//const heading = React.createElement('h1',{id:'heading'},"Namaste from React Episode - 03");
//const root = ReactDOM.createRoot(document.getElementById('root'));

/*---------------Creating React Element using JSX--------------------------------------------------------- */
//JSX(transpiled before it reaches to Javascript Engine)- Parcel-bable
//JSX=React.createElement=> ReactElement - JS Object =>HTMLElement (Rendered)
// Jsx prevent cross site attack when js expression passed inside{}

//React functional Component - It's normal javascript function which returns piece of JSX.
// Functional component should start with Upper case letter

const Title =  () => (
  <h1 className="head" tabIndex= '5' >
  Namaste react using JSX !
  </h1>
);

//Component Compostion

const HeadingComponent = () => (
  <div id="container">
  <Title />
  {Title()}
  <Title> </Title>
    <h1 className="heading">Namaste react from functional component!</h1>
  </div>
);

//const heading = <h1 id='heading'>Namste React using JSX </h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
