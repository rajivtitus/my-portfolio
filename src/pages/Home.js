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
import cover from "../images/cover2.png";

const Home = () => {
  return (
    <StyledHome variants={PageAnim} initial="hidden" animate="show" exit="exit">
      <Description>
        <Hide>
          <motion.div variants={SlideAnim}>
            <h1>Hello!</h1>
            <h1>
              I'm <span>Raj</span>iv.
            </h1>
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
        </motion.div>
      </Description>
      <Image>
        <img src={cover} alt="Home" />
      </Image>
    </StyledHome>
  );
};
const StyledHome = styled(Container)`
  align-items: center;
`;
const Description = styled(motion.div)`
  flex: 1.15;
  padding-right: 3.5rem;

  p {
    line-height: 1.65rem;
    padding: 0.5rem 0rem;
  }
`;

const Image = styled.div`
  flex: 0.85;
  overflow: hidden;
  text-align: center;
  box-shadow: 0px 0px 75px #220105;

  img {
    width: 100%;
    height: 75vh;
    object-fit: cover;
  }
`;

export default Home;
