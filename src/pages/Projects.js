import React from "react";
//Importing Styles
import { Container } from "../styles/styles";
import styled from "styled-components";
//Importing animation variants
import { PageAnim, FadeAnim } from "../animations/animations";
//importing motion
import { motion } from "framer-motion";
//importing useScroll function for scroll animations
import { useScroll } from "../components/useScroll";
//importing images
import projectimage1 from "../images/Box Office Review - Project Image.jpg";
import projectimage2 from "../images/Swirl Music Player - Project Image.jpg";

const Projects = () => {
  const [controls, ref] = useScroll();

  return (
    <motion.div variants={PageAnim} initial="hidden" animate="show" exit="exit">
      <Project>
        <div className="project-description">
          <h3>Box Office Reviews</h3>
          <p>
            A web application which provides movie reviews and ratings for over
            280,000 titles.
          </p>
          <br />
          <p>
            Built using React JS with Redux for state management.
            <br />
            Libraries/APIs used: Motion Framer, Styled Components, React Router
            DOM
          </p>
          <p>
            <a
              href="https://youthful-hopper-cd14e7.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Box Office Movie Reviews"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
        </div>
        <div className="project-image">
          <motion.img
            variants={FadeAnim}
            initial="hidden"
            animate="show"
            src={projectimage1}
            alt="Box Office Movie Reviews Project Cover"
          ></motion.img>
        </div>
      </Project>
      <Project
        ref={ref}
        variants={FadeAnim}
        initial="hidden"
        animate={controls}
      >
        <div className="project-description">
          <h3>Swirl Music Player</h3>
          <p>Music player with pre-loaded tunes to help you unwind.</p>
          <br />
          <p>
            Built using React JS
            <br />
            Libraries/APIs used: FontAwesome and SASS
          </p>
          <p>
            <a
              href="https://loving-blackwell-f3b69d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              title="Swirl Music Player Project"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
        </div>
        <div className="project-image">
          <img src={projectimage2} alt="Swirl Music Player Cover"></img>
        </div>
      </Project>
    </motion.div>
  );
};

const Project = styled(Container)`
  background: linear-gradient(transparent, rgb(27, 27, 27, 1));
  flex-direction: column;
  align-items: flex-start;

  .project-description {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project-image {
    flex: 1;
    width: 100%;
    img {
      display: block;
      width: 55%;
      object-fit: contain;
      margin: 3.5rem auto;

      //Resizing Project images for tablet
      @media (max-width: 1025px) {
        width: 75%;
        min-height: 40vh;
      }

      //Resizing Project images for mobile
      @media (max-width: 550px) {
        width: 80%;
        min-height: 30vh;
      }
    }
  }
`;

export default Projects;
