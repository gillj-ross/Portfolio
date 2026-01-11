/**
 * File: Header.tsx
 * Author: Jude Gill
 * Date Edited: 1-10-2026
 */

import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <span className="brand">
            <a href="#home">&gt;_ Jude Gill</a>
          </span>
        </div>
        <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
