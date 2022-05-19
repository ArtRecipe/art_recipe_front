import React from "react";
import "./round-button.scss";
import { useNavigate } from "react-router-dom";

const Index = ({ name }) => {
  return <div className="round-button">{name}</div>;
};
export default Index;
