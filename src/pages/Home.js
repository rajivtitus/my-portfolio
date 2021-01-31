import React from "react";
//importing Styled Components
import styled from "styled-components";
//importing Styles
import { Container, Hide } from "../styles/styles";
//importing motion
import { motion } from "framer-motion";
//Importing animation variants
import { PageAnim, SlideAnim, FadeAnim } from "../animations/animations";
//importing image
import cover from "../images/cover.jpg";

const Home = () => {
  return (
    <StyledHome variants={PageAnim} initial="hidden" animate="show" exit="exit">
      <Description>
        <Hide>
          <motion.div variants={SlideAnim}>
            <h2>Hello!</h2>
            <h2>
              I'm <span>Raj</span>iv.
            </h2>
          </motion.div>
        </Hide>
        <motion.div variants={FadeAnim}>
          <motion.p>
            A passionate Web Developer hailing from an Information Technology
            background with experience in FinTech and the Retail industry.
            Problem-solving, relationship-building and excellence in service,
            are some of my key strengths.
          </motion.p>
          <motion.p>
            Throughout the course of my employment I developed new business
            ideas, provided relevant solutions to clients and had the pleasure
            of working in a collaberative environment.
          </motion.p>
          <motion.p>
            My Web Development motto is to make navigation easy and improve user
            engagement.
          </motion.p>
          <motion.p>
            <span>Fun Fact:</span> There's always room in my heart for an extra
            slice of pizza, music, travel and dogs.
          </motion.p>
        </motion.div>
      </Description>
    </StyledHome>
  );
};

const StyledHome = styled(Container)`
  background: linear-gradient(transparent, rgb(0, 0, 0, 0.75)), url(${cover});
  background-position: center;
  background-size: cover;
`;
const Description = styled(motion.div)`
  width: 62.5%;
  p {
    padding: 0.5rem 0rem;
  }

  //Media Queries for Description resizing
  @media (max-width: 1152px) {
    width: 75%;
  }

  @media (max-width: 798px) {
    width: 95%;
  }
`;

export default Home;
