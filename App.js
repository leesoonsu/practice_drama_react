import React from "react";
import "./App.css";
import DramaType from "./DramaType";
import "./Design.css";


const App = () => {
  return (
    <div>
      <h1 className="Title">동수의 드라마 추천!</h1>
      <DramaType></DramaType>
    </div>
  );
};
export default App;
