import React, { useState } from "react";
// import { Menuitem } from "./menuitem";
import "./navbar.css";
import { Menuitem } from "../data/Menuitem";
function Navbar() {
    const[clicked,setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Portfolio</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ?"fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" :"nav-menu"}>
        {Menuitem.map((item, i) => {
          return (
            <li key={i}>
              <a className={item?.cName} href={item?.url}>
                <i className={item?.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
