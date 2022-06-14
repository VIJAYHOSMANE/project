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
import NavBar from "./Helpers/NavBAr";
import CustomerSignup from "./components/ClientSide/CustomerSignup";
import CustomerMain from "./components/ClientSide/CustomerMain";

function App() {
  const [gameState, setGameState] = useState("frontpage");
  return (
    <div className="App">
      <NavBar />
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
          <Route path="/customersignup" element={<CustomerSignup />} />
          <Route path="/customermain" element={<CustomerMain />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
