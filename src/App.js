import React from "react";
import "./styles/index.css";
import "./styles/homepage.css";
import "./styles/header.css";
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
