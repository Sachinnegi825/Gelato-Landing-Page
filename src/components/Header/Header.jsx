import React, { useState } from 'react';
import './header.css';
import LogoImg from "../../assets/gelato_logo_black.svg";
import Cart from "../../assets/cart.svg";
import Earth from "../../assets/earth.svg";
import Contact from "../../assets/contact.svg";
import User from "../../assets/user.svg";
import { IoIosArrowDown, IoIosArrowUp, IoMdMenu, IoMdClose } from 'react-icons/io';

function Header() {
  const [hovered, setHovered] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleHover = (key, value) => {
    setHovered(prev => ({ ...prev, [key]: value }));
  };

  const renderArrow = (key) => hovered[key] ? <IoIosArrowUp /> : <IoIosArrowDown />;

  return (
    <div className="header-container">
      <div className="top-bar">
        <div className="main-div">
          <div className="logo">
            <div className="hamburger-icon" onClick={() => setIsSidebarOpen(true)}>
              <IoMdMenu size={30} />
            </div>
            <img src={LogoImg} alt="Logo" />
          </div>

          <nav className="navbar">
            <a href="#home">
              <img src={Contact} alt="Contact Us" /> Contact Us
            </a>
            <a href="#services">
              <img src={Earth} alt="Services" /> Services
            </a>
            <a href="#about">
              <img src={Cart} alt="Cart" /> Cart
            </a>
            <a href="#contact">
              <img src={User} alt="Sign in" /> Sign in
            </a>
            <button className="button">Sign up for free</button>
          </nav>
        </div>
      </div>

      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={() => setIsSidebarOpen(false)}>
          <IoMdClose size={30} />
        </div>
        <a href="#home">
          <img src={Contact} alt="Contact Us" /> Contact Us
        </a>
        <a href="#services">
          <img src={Earth} alt="Services" /> Services
        </a>
        <a href="#about">
          <img src={Cart} alt="Cart" /> Cart
        </a>
        <a href="#contact">
          <img src={User} alt="Sign in" /> Sign in
        </a>
        <div
          className="dropdown"
          onMouseEnter={() => toggleHover("products", true)}
          onMouseLeave={() => toggleHover("products", false)}
        >
          <button className="drop-btn">
            Products {renderArrow("products")}
          </button>
          <div className="dropdown-content">
            <a href="#item1">Best Sellers</a>
            <div className="sub-dropdown">
              <a href="#item2">Clothing</a>
              <div className="sub-dropdown-content">
                <a href="#subitem1">item 1</a>
                <a href="#subitem2">item 2</a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="dropdown"
          onMouseEnter={() => toggleHover("pricing", true)}
          onMouseLeave={() => toggleHover("pricing", false)}
        >
          <button className="drop-btn">
            Pricing {renderArrow("pricing")}
          </button>
          <div className="dropdown-content">
            <a href="#item3">Item 3</a>
            <a href="#item4">Item 4</a>
          </div>
        </div>
      </div>

      <div className="top-bar dropdown-bar">
        <div className="main-div dropdown-div">
          <div
            className="dropdown"
            onMouseEnter={() => toggleHover("products", true)}
            onMouseLeave={() => toggleHover("products", false)}
          >
            <button className="drop-btn">
              Products {renderArrow("products")}
            </button>
            <div className="dropdown-content">
              <a href="#item1">Best Sellers</a>
              <div className="sub-dropdown">
                <a href="#item2">Clothing</a>
                <div className="sub-dropdown-content">
                  <a href="#subitem1">item 1</a>
                  <a href="#subitem2">item 2</a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="dropdown"
            onMouseEnter={() => toggleHover("pricing", true)}
            onMouseLeave={() => toggleHover("pricing", false)}
          >
            <button className="drop-btn">
              Pricing {renderArrow("pricing")}
            </button>
            <div className="dropdown-content">
              <a href="#item3">Item 3</a>
              <a href="#item4">Item 4</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
