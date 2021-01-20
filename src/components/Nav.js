import React from "react";
//Importing Styled Components
import styled from "styled-components";
//Importing Link for routing between components
import { Link, useLocation } from "react-router-dom";
//import motion
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <ul>
        <Link to="/">
          <li>About</li>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </Link>
        <Link to="/projects">
          <li>Projects</li>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "100%" : "0%" }}
          />
        </Link>
        <Link to="/contact">
          <li>Contact</li>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </Link>
      </ul>
    </StyledNav>
  );
};

//Styled Component for Nav Bar
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  padding: 0.5rem 7.5rem;
  position: sticky;
  top: 0;
  background: #030506;

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    a {
      margin-right: 12.5%;
      text-decoration: none;
      color: #ecf0f1;
    }
    li {
      padding: 0.25rem 1rem;
      font-size: 1.25rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.25rem;
  width: 100%;
  background: #de354c;
`;

export default Nav;
