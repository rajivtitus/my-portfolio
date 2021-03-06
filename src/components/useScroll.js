import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [ref, view] = useInView({ threshold: 0.35 });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [controls, ref];
};
