import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import Home from "../pages/Home";
import Reports from "../pages/Reports";
import Products from "../pages/Products";
import Team from "../pages/Team";
import Messages from "../pages/Messages";
import Support from "../pages/Support";

const titleStartBy = "Navbar - ";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    component: <Home titleStartBy={titleStartBy} />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    component: <Reports titleStartBy={titleStartBy} />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
    component: <Products titleStartBy={titleStartBy} />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
    component: <Team titleStartBy={titleStartBy} />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
    component: <Messages titleStartBy={titleStartBy} />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
    component: <Support titleStartBy={titleStartBy} />,
  },
];
