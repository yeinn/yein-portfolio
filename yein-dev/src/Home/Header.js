import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="custom-nav">
        <nav class="menu">
          <ol>
            <li class="menu-item">
              <a href="#0" className="nav-btn">
                Home
              </a>
            </li>
            <li class="menu-item">
              <a href="#about" className="nav-btn">
                About
              </a>
            </li>
            <li class="menu-item">
              <a href="#career" className="nav-btn">
                Career
              </a>
            </li>
            <li class="menu-item">
              <a href="#works" className="nav-btn">
                Works
              </a>
            </li>
            <li class="menu-item">
              <a href="#0" className="nav-btn">
                Contact
              </a>
            </li>
          </ol>
        </nav>
      </header>
    );
  }
}

export default Header;
