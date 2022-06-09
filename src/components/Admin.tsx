// import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../Helpers/Context";
import { Button } from "@mantine/core";
import { TextInput } from "@mantine/core";
import "./Admin.css";
function Admin() {
  const { gameState, setGameState } = useContext(AppContext);
  return (
    <div className="admin">
      <TextInput
        placeholder="Enter your id"
        className="adminid"
        label="User id"
        variant="filled"
        radius="md"
        size="md"
        required
      />
      <br></br>
      <TextInput
        placeholder="Enter your Password"
        className="adminpassword"
        label="Password"
        variant="filled"
        radius="md"
        size="md"
        required
      />
      <br></br>

      <div className="adminbutton">
        <Link to="/adminpage">
          {/* <Button
            variant="contained"
            className="adminbutton"
            onClick={() => {
              setGameState("adminpage");
            }}
          >
            Submit
          </Button> */}
          <Button
            radius="lg"
            size="lg"
            style={{ width: "150px", backgroundColor: "#2c3e50" }}
            onClick={() => {
              setGameState("adminpage");
            }}
          >
            ADMIN
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Admin;
