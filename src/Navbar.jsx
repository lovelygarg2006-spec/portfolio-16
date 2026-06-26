import React from "react";
import Navbar from "./Navbar";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 80px",
        backgroundColor: "#2b1c33",
        color: "white",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
     
      <h2
        style={{
          color: "#ff914d",
          margin: "0",
          cursor: "pointer",
        }}
      >
        Lovely Gupta
      </h2>

      
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "35px",
          margin: "0",
          padding: "0",
        }}
      >
        <li>
          <a
            href="#home"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        style={{
          backgroundColor: "#ff914d",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Hire Me
      </button>
         <NavLink to = "/">Home</NavLink>
      <NavLink to = "/about">About</NavLink>
      <NavLink to = "/home">Skills</NavLink>
      <NavLink to = "/profile">Projects</NavLink>
      <NavLink to = "/profile">Contact</NavLink>
    </nav>
  );
};

export default Navbar;