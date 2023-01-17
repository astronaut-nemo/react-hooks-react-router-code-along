import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// function App() {
//   return <Home />;
// }

// Step 2. Change so that the router is coordinating(controlling what is displayed)
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  document.getElementById("root")

);
