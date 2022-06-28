import React from "react";
import ItemList from "./components/ItemList";
import "./index.css";
const App = () => {
  return (
    <div className="App">
      <h2 style={{textAlign: "center", color: "#1776D1"}} >Todo APP</h2>
      <ItemList />
    </div>
  );
};

export default App;
