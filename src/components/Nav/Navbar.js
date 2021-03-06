import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <IconContext.Provider value={{ color: "var(--color-icons)" }}>
      {/* Icone affichée quand le menu est fermé */}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      {/* Navigation affichée quand le menu est ouvert */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {/* Affichage de la croix pour fermer le menu */}
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars" onClick={showSidebar}>
              <AiOutlineClose />
            </Link>
          </li>
          {/* Affichage des éléments du menu en fonction des données du fichier */}
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName} onClick={showSidebar}>
              <NavLink exact to={item.path} activeClassName="active">
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
