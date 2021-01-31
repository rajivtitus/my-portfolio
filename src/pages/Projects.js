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

const Projects = () => {
  const [controls, ref] = useScroll();

  return (
    <motion.div variants={PageAnim} initial="hidden" animate="show" exit="exit">
      <Project>
        <div className="project-description">
          <h3>Box Office Reviews</h3>
          <p>
            A web application which provides movie information for over 280,000
            titles.
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/rajiv-christopher-bsc-pdd-in-it-6626a6a7/"
              target="_blank"
              rel="noopener noreferrer"
              title="Movie Review Project"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
          <img
            src="https://social-labs.org/wp-content/uploads/2015/07/teal-spectrum.png"
            alt="project1"
          ></img>
          <div className="project-technology">
            <p>Built using React with Redux for state management.</p>
            <p>
              Libraries/APIs used: Motion Framer, Styled Components, React
              Router DOM
            </p>
          </div>
        </div>
      </Project>
      <Project
        ref={ref}
        variants={FadeAnim}
        initial="hidden"
        animate={controls}
      >
        <div className="project-description">
          <h3>Box Office Reviews</h3>
          <p>
            A web application which provides movie information for over 280,000
            titles.
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/rajiv-christopher-bsc-pdd-in-it-6626a6a7/"
              target="_blank"
              rel="noopener noreferrer"
              title="Music Player Project"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
          <img
            src="https://social-labs.org/wp-content/uploads/2015/07/teal-spectrum.png"
            alt="project1"
          ></img>
          <div className="project-technology">
            <p>Built using React with Redux for state management.</p>
            <p>
              Libraries/APIs used: Motion Framer, Styled Components, React
              Router DOM
            </p>
          </div>
        </div>
      </Project>
    </motion.div>
  );
};

const Project = styled(Container)`
  background: linear-gradient(transparent, rgb(27, 27, 27, 1));

  .project-description {
    img {
      display: block;
      width: 40%;
      height: 40vh;
      object-fit: cover;
      margin: 1.5rem auto;
    }
  }

  .project-technology {
    text-align: center;
  }
`;

export default Projects;
