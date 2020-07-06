import React from "react";
import logo from "./mintbean.png";
import "./styles/index.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Homepage />
    </React.Fragment>
  );
}

export default App;
