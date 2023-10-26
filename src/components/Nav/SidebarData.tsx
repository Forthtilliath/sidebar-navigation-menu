import { FaCartPlus, FaEnvelopeOpenText } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoIosPaper, IoMdHelpCircle, IoMdPeople } from "react-icons/io";

import Home from "../../pages/Home";
import Reports from "../../pages/Reports";
import Products from "../../pages/Products";
import Team from "../../pages/Team";
import Messages from "../../pages/Messages";
import Support from "../../pages/Support";

export const titleStartBy = "Navbar - ";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
    element: <Home />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    cName: "nav-text",
    element: <Reports />,
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaCartPlus />,
    cName: "nav-text",
    element: <Products />,
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoMdPeople />,
    cName: "nav-text",
    element: <Team />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaEnvelopeOpenText />,
    cName: "nav-text",
    element: <Messages />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoMdHelpCircle />,
    cName: "nav-text",
    element: <Support />,
  },
];
