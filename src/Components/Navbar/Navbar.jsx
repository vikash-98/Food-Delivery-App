import "./Navbar.css";
import { assets } from "../../../assets/assets";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=> setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={()=> setMenu("about")} className={menu === "about" ? "active" : ""}>Menu</li>
        <li onClick={()=> setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>mobile-app</li>
        <li onClick={()=> setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact-us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"> </div>
          <button>signin</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
