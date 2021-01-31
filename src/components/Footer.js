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
    <StyledFooter>
      <Hide>
        <motion.div
          className="social-contact"
          variants={SlideAnim}
          initial="hidden"
          animate="show"
        >
          <a
            href="https://www.linkedin.com/in/rajiv-christopher-bsc-pdd-in-it-6626a6a7/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img src={linkedin} alt="linkedin-icon"></img>
          </a>
          <a
            href="https://github.com/rajivtitus"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src={github} alt="github-icon"></img>
          </a>
        </motion.div>
      </Hide>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.div)`
  flex: 1;

  .social-contact {
    text-align: right;

    a {
      padding: 1rem;
    }
  }
`;

export default Footer;
