import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="custom-nav">
        <nav class="menu">
          <ol>
            <li class="menu-item">
              <a href="#0" className="nav-btn">
                Home
              </a>
            </li>
            <li class="menu-item">
              <a href="#0" className="nav-btn">
                About
              </a>
            </li>
            <li class="menu-item">
              <a href="#0" className="nav-btn">
                Work
              </a>
              <ol class="sub-menu">
                <li class="menu-item">
                  <a href="#0">Big Widgets</a>
                </li>
                <li class="menu-item">
                  <a href="#0">Bigger Widgets</a>
                </li>
                <li class="menu-item">
                  <a href="#0">Huge Widgets</a>
                </li>
              </ol>
            </li>
            <li class="menu-item">
              <a href="#0" className="nav-btn">
                Kabobs
              </a>
              <ol class="sub-menu">
                <li class="menu-item">
                  <a href="#0">Shishkabobs</a>
                </li>
                <li class="menu-item">
                  <a href="#0">BBQ kabobs</a>
                </li>
                <li class="menu-item">
                  <a href="#0">Summer kabobs</a>
                </li>
              </ol>
            </li>
            <li class="menu-item">
              <a href="#0" className="nav-btn">
                Contact
              </a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Header;
