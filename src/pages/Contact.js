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
        <h2>Let's Talk</h2>
        <p>
          Get in touch via the form below, or email{" "}
          <a
            href="mailto:rajivtitus92@gmail.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>rajivtitus92@gmail.com</span>
          </a>
        </p>
        <form>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </StyledForm>
      <Social>
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
            >
              <img src={linkedin} alt="linkedin-icon"></img>
            </a>

            <a
              href="https://github.com/rajivtitus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github-icon"></img>
            </a>
          </motion.div>
        </Hide>
      </Social>
    </StyledContact>
  );
};

//Styled Components
const StyledContact = styled(Container)`
  align-items: flex-end;
`;

const StyledForm = styled.div`
  flex: 1;

  form {
    max-width: 500px;
    padding: 0.5rem 0rem;
    font-size: 1rem;

    div {
      padding: 0.75rem 0rem;

      input,
      textarea {
        display: block;
        width: 100%;
        height: 1.5rem;
        background: #191919;
        color: #ecf0f1;
        border: none;
        padding: 1rem 0.5rem;
        margin-top: 0.25rem;
        border-radius: 10px;
        font-family: "Roboto", sans-serif;
      }

      textarea {
        height: 7.5rem;
        resize: none;
      }

      button {
        background: #191919;
        color: #de354c;
        border: none;
        width: 100px;
        line-height: 1.75rem;
        text-align: center;
        border-radius: 10px;
        padding: 0.5rem 0.25rem;
        font-size: 1.15rem;
        font-weight: 500;
        transition: 0.5s ease-out;
        &:hover {
          background: #de354c;
          color: #ecf0f1;
          transition: 0.5s ease-out;
        }
      }
    }
  }
`;

const Social = styled(motion.div)`
  flex: 1;

  .social-contact {
    text-align: center;

    a {
      padding: 1rem;
    }
  }
`;

export default Contact;
