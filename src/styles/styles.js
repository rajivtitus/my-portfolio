import styled from "styled-components";
import { motion } from "framer-motion";

//Creating reusable styled components
export const Container = styled(motion.div)`
  display: flex;
  width: 100%;
  min-height: 90vh;
  padding: 3.5rem 8.5rem;
`;

export const Hide = styled.div`
  overflow: hidden;
`;
