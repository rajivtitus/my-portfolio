import React from "react";
//Importing Styles
import { Container } from "../styles/styles";
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
      <Container>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ textAlign: "left" }}>Music Player</h2>
          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat nisi nam ratione dignissimos, accusamus reprehenderit rerum
            optio tempore architecto molestias. Voluptatibus fugit laborum, ipsa
            quasi voluptatem dicta incidunt quia!
          </p>
          <img
            style={{
              width: "40%",
              height: "70%",
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
      </Container>
      <Container
        ref={ref}
        variants={FadeAnim}
        initial="hidden"
        animate={controls}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ textAlign: "left" }}>Music Player</h2>
          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            quaerat nisi nam ratione dignissimos, accusamus reprehenderit rerum
            optio tempore architecto molestias. Voluptatibus fugit laborum, ipsa
            quasi voluptatem dicta incidunt quia!
          </p>
          <img
            style={{
              width: "40%",
              height: "50vh",
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
      </Container>
    </motion.div>
  );
};

export default Projects;
