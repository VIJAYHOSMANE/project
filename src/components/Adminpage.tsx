import React, { useContext } from "react";
import AppContext from "../Helpers/Context";
import "./Adminpage.css";
import Sidebar from "../Helpers/Sidebar";

function Adminpage() {
  const { gameState, setGameState } = useContext(AppContext);
  return (
    <div className="adminpage">
      <Sidebar />
    </div>
  );
}

export default Adminpage;
