import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../Helpers/Context";

import "./Login.css";

function Login() {
  const { gameState, setGameState } = useContext(AppContext);
  return (
    <Container>
      <div className="frontpage">
        <div className="firstbutton">
          <Link to="/admin">
            <Button
              variant="contained"
              onClick={() => {
                setGameState("admin");
              }}
            >
              Admin
            </Button>
          </Link>

          <div className="customerbutton">
            <Button variant="contained">Customer</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
