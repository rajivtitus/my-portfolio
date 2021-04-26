import React from "react";
//importing Styled Components
import styled from "styled-components";
//importing Styles
import { Container, Hide } from "../styles/styles";
//importing motion
import { motion } from "framer-motion";
//Importing animation variants
import { PageAnim, SlideAnim, FadeAnim } from "../animations/animations";
import { useScroll } from "../components/useScroll";
//importing image
import cover from "../assets/cover.jpg";
import resume from '../assets/Rajiv Christopher - Resume.pdf'

const Home = () => {
  const [controls, ref] = useScroll();
  return (
    <motion.div variants={PageAnim} initial="hidden" animate="show" exit="exit">
      <StyledHome>
        <Description>
          <Hide>
            <motion.div variants={SlideAnim}>
              <h2>
                Hello!
                <br />
                I'm <span>Raj</span>iv.
              </h2>
            </motion.div>
          </Hide>
          <motion.div variants={FadeAnim}>
            <motion.p>
              I am a passionate Web Developer with an Information Technology background who loves solving problems and building interactive experiences.
            </motion.p>
            <motion.a href="#about-me">
              <button>Learn More</button>
            </motion.a>
            <motion.a href={resume} download>
              <button>View Resume</button>
            </motion.a>
          </motion.div>
        </Description>
      </StyledHome>
      <AboutMe id="about-me" ref={ref} variants={FadeAnim} initial="hidden" animate={controls}>
        <h3>About Me</h3>
        <p>
          Throughout my professional career, I worked in financial/retail sales and customer service where I enjoyed building relationships with customers and helping them solve
          their problems by providing relevant financial solutions catered to their needs and offering the product
          recommendations.
        </p>
        <p>My key strengths include:</p>
        <ul>
          <li>Responsive Web Development</li>
          <li>Creative problem solving</li>
          <li>Relationship building</li>
          <li>Time Management</li>
          <li>Teamwork</li>
        </ul>
        <p>
          In addition to my experience, I have a degree and a diploma in Information Technology where I gained knowledge
          of various web technologies, database management and design principles.
        </p>
        <br />
        <p>
          <span>Fun fact:</span> There's always room in my heart for &#127829;, &#128054;, &#9992;&#65039; and
          &#127925;.
        </p>
      </AboutMe>
    </motion.div>
  );
};

const StyledHome = styled(Container)`
  background: linear-gradient(transparent, rgb(0, 0, 0, 0.75)), url(${cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 550px) {
    background-position: 62.5%;
  }
`;
const Description = styled(motion.div)`
  width: 62.5%;
  p {
    padding: 0.5rem 0rem;
  }
  a {
    font-size: 1.55rem;
  }
  button {
    margin-right: 1.75rem;
  }

  //Media Queries for Description resizing
  @media (max-width: 1152px) {
    width: 75%;
  }

  @media (max-width: 802px) {
    width: 100%;
  }
`;

const AboutMe = styled(Container)`
  flex-direction: column;
  align-items: flex-start;
  padding-top: 5rem;
  padding-bottom: 5rem;
  ul {
    padding: 1rem 1rem 1rem 3.5rem;
    li {
      list-style-type: square;
    }
  }
`;

export default Home;
