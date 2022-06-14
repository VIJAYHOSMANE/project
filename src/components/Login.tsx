// import { Button } from "@mui/material";
import { color, Container } from "@mui/system";
import { useContext } from "react";
import { Button, Transition } from "@mantine/core";
import { Link } from "react-router-dom";

import AppContext from "../Helpers/Context";

import "./Login.css";

function Login() {
  const { gameState, setGameState } = useContext(AppContext);
  return (
    <div className="frontpage">
      <div className="firstbutton">
        <Link to="/admin">
          {/* <Button
              variant="contained"
              onClick={() => {
                setGameState("admin");
              }}
            >
              Admin
            </Button> */}
          <Button
            radius="lg"
            size="lg"
            style={{ width: "150px", backgroundColor: "#2c3e50" }}
            onClick={() => {
              setGameState("admin");
            }}
          >
            ADMIN
          </Button>
          <br></br>
          <br></br>
        </Link>
        <Link to="/customerlogin">
          <div className="customerbutton">
            {/* <Button variant="contained">Customer</Button> */}
            <Button
              radius="lg"
              size="lg"
              style={{
                width: "150px",
                backgroundColor: "#2c3e50",
              }}
            >
              CUSTOMER
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
