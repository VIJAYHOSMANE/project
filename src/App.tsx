import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppContext from "./Helpers/Context";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Adminpage from "./components/Adminpage";
import CustomerDetails from "./components/CustomerDetails";
import RoomDetails from "./components/RoomDetails";
import FoodDetails from "./components/FoodDetails";
import NotFound from "./Helpers/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import CustomerLogin from "./components/ClientSide/CustomerLogin";

function App() {
  const [gameState, setGameState] = useState("frontpage");
  return (
    <div className="App">
      <nav className="topbar">
        <h1
          className="heading"
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontFamily: "Amatic SC",
            width: "30%",
            minHeight: "10%",
          }}
        >
          Welcome to Room Services
        </h1>
      </nav>
      <nav className="bottombar">
        <p className="copyright">Copyright 2022 iHub | All rights reserved.</p>
      </nav>
      <AppContext.Provider
        value={{
          gameState,
          setGameState,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminpage" element={<Adminpage />} />
          <Route path="/CustomerDetails" element={<CustomerDetails />} />
          <Route path="/RoomDetails" element={<RoomDetails />} />
          <Route path="/FoodDetails" element={<FoodDetails />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/EditUser/:id" element={<EditUser />} />
          <Route path="/customerlogin" element={<CustomerLogin />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
