import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import CustomerDetails from "../components/CustomerDetails";
import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../Helpers/Context";

function Sidebar() {
  const { gameState, setGameState } = useContext(AppContext);
  return (
    <div className="sidebar">
      <ul className="sidebarlist">
        {SidebarData.map((val, key) => {
          return (
            <Link to={val.Link}>
              <li
                className="row"
                id={window.location.pathname == val.Link ? "active" : ""}
                key={key}
                onClick={() => {
                  // window.location.pathname = val.Link;
                  setGameState(val.Link);
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
