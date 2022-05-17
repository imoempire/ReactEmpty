import React from "react";
import "./style.css";
import logo from "../../Assets/logo2.png";
import hamMenu from "../../Assets/Hamburger.svg";
import menu from "../../Assets/menu.png";
import user from "../../Assets/user.png";

const Navbar = () => {
  return (
    <div class="navbar">
      <img src={logo} alt="" />
      <img className="menu" src={hamMenu} alt="" />
      
      <ul className="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li class="navbar-icons">
        <img src={user} alt="" />
        </li>
        <li class="navbar-icons">
        <img src={menu} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

<div class="navbar">
  <img src={hamMenu} alt="" />
  <ul>
    <li>
      <a href="#">Home</a>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
  <div class="navbar-icons">
    <img src={user} alt="" />
    <img src={menu} alt="" />{" "}
  </div>
</div>;
