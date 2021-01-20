//creating animation variants

export const PageAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 1.25,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const SlideAnim = {
  hidden: {
    opactiy: 0,
    y: 300,
  },
  show: {
    opactiy: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export const FadeAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.25,
      ease: "easeOut",
    },
  },
};
