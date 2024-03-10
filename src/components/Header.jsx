import React from "react";
import "./Header.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Header(props) {
  const { theme, setTheme } = props;
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span
          onClick={() => {
            setTheme(!theme);
          }}
        >
          {theme ? "โหมดกลางวัน" : "โหมดกลางคืน"}
        </span>
        <span
          className="icon"
          onClick={() => {
            setTheme(!theme);
          }}
        >
          {theme ? <MdOutlineWbSunny /> : <FaMoon />}
        </span>
      </div>
    </header>
  );
}

export default Header;
