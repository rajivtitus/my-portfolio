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
import projectImage1 from "../images/Capture - Project Image.PNG";
import projectImage2 from "../images/Box Office Review - Project Image.jpg";
import projectImage3 from "../images/Swirl Music Player - Project Image.jpg";
import projectImage4 from "../images/Palette Picker - Project Image.PNG";

const Projects = () => {
  const [controls1, ref1] = useScroll();
  const [controls2, ref2] = useScroll();
  const [controls3, ref3] = useScroll();

  return (
    <motion.div variants={PageAnim} initial="hidden" animate="show" exit="exit">
      <Project>
        <div className="project-description">
          <h3>Capture</h3>
          <p>Social media app to create, edit and like posts.</p>
          <p>
            Built using MERN stack with JWT/Google OAuth for authentication. Utilized Material UI for layout and styling
          </p>
          <br />
          <p>
            <a
              href="https://capture-gallery-project.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Capture Social Media App"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
        </div>
        <div className="project-image">
          <img src={projectImage1} alt="Capture Social Media App Cover"></img>
        </div>
      </Project>
      <Project ref={ref1} variants={FadeAnim} initial="hidden" animate={controls1}>
        <div className="project-description">
          <h3>Box Office Reviews</h3>
          <p>A web application which provides movie reviews and ratings for over 280,000 titles.</p>
          <p>
            Built using the OMDB API with React JS, Redux. Utilized Motion Framer and Styled Components for styling and
            animations.
          </p>
          <br />
          <p>
            <a
              href="https://box-office-reviews.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Box Office Movie Reviews"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
        </div>
        <div className="project-image">
          <img src={projectImage2} alt="Box Office Movie Reviews Project Cover"></img>
        </div>
      </Project>
      <Project ref={ref2} variants={FadeAnim} initial="hidden" animate={controls2}>
        <div className="project-description">
          <h3>Swirl Music Player</h3>
          <p>A responsive music player with chill-pop tunes to help you relax, study and concentrate better.</p>
          <p>Built using React JS and SASS with Font Awesome Icons.</p>
          <br />
          <p>
            <a
              href="https://swirl-music-player.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Swirl Music Player Project"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
        </div>
        <div className="project-image">
          <img src={projectImage3} alt="Swirl Music Player Cover"></img>
        </div>
      </Project>
      <Project ref={ref3} variants={FadeAnim} initial="hidden" animate={controls3}>
        <div className="project-description">
          <h3>Palette Picker</h3>
          <p>Choose and save custom palettes from a list of dyanimcally generated colors.</p>
          <p>
            Built using Vanilla JS, HTML and CSS.
            <br />
            Libraries used: Chroma JS and Font Awesome
          </p>
          <br />
          <p>
            <a
              href="https://color-palette-project.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Color Palette Picker"
            >
              <span>{`View Project...`}</span>
            </a>
          </p>
        </div>
        <div className="project-image">
          <img src={projectImage4} alt="Color Palette Project Cover"></img>
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
