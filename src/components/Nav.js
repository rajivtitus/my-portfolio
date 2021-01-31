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
      <h1>
        <Link to="/">Rajiv Titus</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "90%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/projects">Projects</Link>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "90%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.8 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "90%" : "0%" }}
          />
        </li>
      </ul>
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

  @media (max-width: 1152px) {
    padding: 1.75rem 5.5rem;
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
