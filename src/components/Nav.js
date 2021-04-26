import React, { useState } from "react";
//Importing Styled Components
import styled from "styled-components";
//Importing Link for routing between components
import { Link, useLocation } from "react-router-dom";
//import motion
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  const [navBarStatus, setNavBarStatus] = useState(false);

  const navBarHandler = () => {
    setNavBarStatus(!navBarStatus);
  };

  return (
    <StyledNav>
      <h1>
        <Link to="/">Rajiv Titus</Link>
      </h1>
      <ul className={`${navBarStatus ? "nav-open" : ""}`}>
        <li>
          <Link to="/" onClick={navBarHandler}>
            About
          </Link>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "90%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects" onClick={navBarHandler}>
            Projects
          </Link>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "90%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact" onClick={navBarHandler}>
            Contact
          </Link>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "90%" : "0%" }}
          />
        </li>
      </ul>
      <div onClick={navBarHandler} className="nav-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledNav>
  );
};

//Styled Component for Nav Bar
const StyledNav = styled.nav`
  min-height: 10vh;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 8rem;
  background: #030506;
  border-bottom: 2.5px solid #191919;
  z-index: 2;

  @media (max-width: 1152px) {
    padding: 0.5rem 5.5rem;
  }

  @media (max-width: 802px) {
    padding: 0.35rem 3.75rem;
  }

  @media (max-width: 550px) {
    padding: 0.25rem 2.85rem;
  }

  //Fixing Nav Bar to top of the page in tablet and mobile
  @media (max-width: 1025px) {
    position: static;
  }

  h1 {
    flex: 1.5;
    padding: 0.5rem 0rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    li {
      padding: 0.5rem 1rem;
      position: relative;
    }
  }

  //Media query for Mobile Navbar
  @media (max-width: 1025px) {
    ul {
      height: 100vh;
      width: 100%;
      position: fixed;
      bottom: 0%;
      left: 125%;
      flex: 1;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 5rem 0rem;
      background: #030506;
      transition: all 1.25s ease-out;
      z-index: 3;
      li {
        font-size: 3rem;
      }
    }

    //Toggle Nav bar on and off
    .nav-menu {
      cursor: pointer;
      position: relative;
      z-index: 4;
      div {
        width: 3.5rem;
        height: 0.35rem;
        margin: 0.65rem;
        background: white;
      }
    }
    .nav-open {
      left: 0%;
      transition: all 0.75s ease-out;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.25rem;
  width: 0%;
  position: absolute;
  left: 5%;
  bottom: 5%;
  background: #de354c;
`;

export default Nav;
