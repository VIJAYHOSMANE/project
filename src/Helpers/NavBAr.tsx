import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar">
      <header
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "45px",
          fontSize: "40px",
          fontFamily: "Kdam Thmor Pro",
          alignItems: "center",
        }}
      >
        Welcome To Room Services
      </header>
    </div>
  );
}

export default NavBar;
