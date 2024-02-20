import React, { useEffect } from "react";
import "./header.scss";

function Header({ title = "Header" }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
    </header>
  );
}

export default Header;
