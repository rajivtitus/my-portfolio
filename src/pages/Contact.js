import React from "react";
//Importing Styles
import { Container, Hide } from "../styles/styles";
//importing Styled components
import styled from "styled-components";
//Importing animation variants
import { PageAnim, SlideAnim } from "../animations/animations";
import { motion } from "framer-motion";
//importing social icons
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const Contact = () => {
  return (
    <StyledContact
      variants={PageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <StyledForm>
        <h3>Let's Talk</h3>
        <p>
          Get in touch via the form below, or email{" "}
          <a
            href="mailto:rajivtitus92@gmail.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
            title="Send Email"
          >
            <span>rajivtitus92@gmail.com</span>
          </a>
        </p>
        <form netlify>
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label for="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows="5"
              cols="30"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </StyledForm>
      {/* <Footer>
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
      </Footer> */}
    </StyledContact>
  );
};

//Styled Components
const StyledContact = styled(Container)``;

const StyledForm = styled.div`
  flex: 1;
  form {
    width: 45%;
    padding: 1rem 0rem;
    div {
      padding: 0.75rem 0rem;
      input,
      textarea {
        display: block;
        width: 100%;
        height: 3rem;
        background: #191919;
        color: #ecf0f1;
        border: none;
        padding: 1rem 0.5rem;
        margin-top: 0.5rem;
        border-radius: 10px;
      }
      textarea {
        height: 12.5rem;
        resize: none;
      }
      button {
        background: #191919;
        color: #de354c;
        border: none;
        margin-top: 1rem;
        width: 10rem;
        border-radius: 10px;
        padding: 1rem 2rem;
        font-weight: 800;
        transition: all 0.5s ease-out;
        &:hover {
          background: #de354c;
          color: #ecf0f1;
          transition: all 0.5s ease-out;
        }
      }
    }
    //Media Queries for Form resizing
    @media (max-width: 1152px) {
      width: 55%;
    }

    @media (max-width: 798px) {
      width: 85%;
    }
  }
`;

const Footer = styled(motion.div)`
  flex: 1;

  .social-contact {
    text-align: right;

    a {
      padding: 1rem;
    }
  }
`;

export default Contact;
