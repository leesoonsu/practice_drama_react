import React from "react";
import "./DramaTemplete.css";

const DramaTemplete = ({ children }) => {
  return (
    <div claaname="DramaTemplete">
      <div clssName="app-title">동수의 추천 드라마</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default DramaTemplete;
