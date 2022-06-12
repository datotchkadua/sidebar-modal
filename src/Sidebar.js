import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  // // კონტექსტით გადმოვიტანეთ რაც გვჭირდებოდა

  return (
    <aside
      // isSidebarOpen-ის დახმარებით ვადგენთ კლასნეიმს,რომლითაც
      //თუ isSidebarOpen არის true გამოჩნდება sidebar. თუ false არის არგამოჩნდება
      //true და false-ს ვცვლით ღილაკით
      className={` ${isSidebarOpen ? "sidebar show-sidebar" : "sidebar "}`}
    >
      <div className="sidebar-header">
        <img src={logo} className={logo} alt="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
