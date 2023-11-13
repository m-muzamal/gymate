import React from "react";
import "./header.scss";

function Header({ title = "Header" }) {
  window.scrollTo(0, 0);
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
    </header>
  );
}

export default Header;
