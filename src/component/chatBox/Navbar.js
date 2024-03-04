import React from "react";
import logo from "../../image/avatar.png"

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo1">Moksh chat box</span>
      <div className="user">
        <img style={{backgroundColor: "#ddddf7", objectFit: "cover",
        height: "35px", width: "40px", borderRadius: "50%"}} src={logo} alt="" />
        <span className="name">Moksh</span> <button className="button">Log Out</button>{" "}
      </div>
    </div>
  );
}

export default Navbar;
