import React from "react";
//Importing Styles
import { Container } from "../styles/styles";
//importing Styled components
import styled from "styled-components";
//Importing animation variants
import { PageAnim } from "../animations/animations";
//importing Component
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
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
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </StyledForm>
      </StyledContact>
      <Footer />
    </>
  );
};

//Styled Components
const StyledContact = styled(Container)`
  min-height: 80vh;
  padding-top: 1rem;
  padding-bottom: 0;
`;

const StyledForm = styled.div`
  flex: 1;
  form {
    width: 42.5%;
    padding-top: 1rem;
    div {
      padding: 0.5rem 0rem;
      input,
      textarea {
        display: block;
        width: 100%;
        height: 3rem;
        background: #191919;
        color: #ecf0f1;
        border: none;
        padding: 0.5rem;
        margin-top: 0.5rem;
        border-radius: 10px;
      }
      textarea {
        height: 11.5rem;
        resize: none;
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

export default Contact;
