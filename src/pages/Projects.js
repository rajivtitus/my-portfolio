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
        <div style={{ textAlign: "center" }}>
          <h3 style={{ textAlign: "left" }}>Music Player</h3>
          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat nisi nam ratione dignissimos, accusamus reprehenderit rerum
            optio tempore architecto molestias. Voluptatibus fugit laborum, ipsa
            quasi voluptatem dicta incidunt quia!
          </p>
          <img
            style={{
              width: "40%",
              height: "40vh",
              padding: "1rem 0rem",
              objectFit: "cover",
            }}
            src="https://social-labs.org/wp-content/uploads/2015/07/teal-spectrum.png"
            alt="project1"
          ></img>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            minus nulla blanditiis officiis libero harum impedit illum.
            Laudantium atque, eius ducimus possimus provident, et explicabo
            molestias quod accusamus, natus reiciendis.
          </p>
        </div>
      </Project>
      <Project
        ref={ref}
        variants={FadeAnim}
        initial="hidden"
        animate={controls}
      >
        <div style={{ textAlign: "center" }}>
          <h3 style={{ textAlign: "left" }}>Music Player</h3>
          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat nisi nam ratione dignissimos, accusamus reprehenderit rerum
            optio tempore architecto molestias. Voluptatibus fugit laborum, ipsa
            quasi voluptatem dicta incidunt quia!
          </p>
          <img
            style={{
              width: "40%",
              height: "40vh",
              padding: "1rem 0rem",
              objectFit: "cover",
            }}
            src="https://social-labs.org/wp-content/uploads/2015/07/teal-spectrum.png"
            alt="project2"
          ></img>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            minus nulla blanditiis officiis libero harum impedit illum.
            Laudantium atque, eius ducimus possimus provident, et explicabo
            molestias quod accusamus, natus reiciendis.
          </p>
        </div>
      </Project>
    </motion.div>
  );
};

const Project = styled(Container)`
  background: linear-gradient(transparent, rgb(27, 27, 27, 1));
`;

export default Projects;
