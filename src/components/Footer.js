import React from "react";
//Importing Styles
import { Hide } from "../styles/styles";
//importing Styled components
import styled from "styled-components";
//Importing animation variants
import { SlideAnim } from "../animations/animations";
import { motion } from "framer-motion";
//importing social icons
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const Footer = () => {
  return (
    <Hide>
      <StyledFooter
        className="social-contact"
        variants={SlideAnim}
        initial="hidden"
        animate="show"
      >
        <h1>Social:</h1>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/rajiv-christopher-bsc-pdd-in-it-6626a6a7/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <img src={linkedin} alt="linkedin-icon"></img>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rajivtitus"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <img src={github} alt="github-icon"></img>
            </a>
          </li>
        </ul>
      </StyledFooter>
    </Hide>
  );
};

const StyledFooter = styled(motion.footer)`
  min-height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0rem 5rem 2.5rem 5rem;

  ul {
    display: flex;
    li {
      padding: 0rem 2rem;
    }
  }
  //Resizing footer for mobile devices
  @media (max-width: 550px) {
    justify-content: center;
    padding: 2.5rem;
    gap: 2.5rem;
    img {
      width: 75%;
    }
  }
`;

export default Footer;
