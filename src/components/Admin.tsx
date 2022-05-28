import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Helpers/Context";
import "./Admin.css";
function Admin() {
  const { gameState, setGameState } = useContext(AppContext);
  return (
    <div className="admin">
      <input className="adminid" placeholder="Enter your id"></input>
      <input
        className="adminpassword"
        placeholder="Enter your password"
      ></input>
      <div className="adminbutton">
        <Link to="/adminpage">
          <Button
            variant="contained"
            className="adminbutton"
            onClick={() => {
              setGameState("adminpage");
            }}
          >
            Submit
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
