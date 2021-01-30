import styled from "styled-components";
import { motion } from "framer-motion";

//Creating reusable styled components
export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  padding: 3.5rem 8rem;

  @media (max-width: 1152px) {
    padding: 1.75rem 5.5rem;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
