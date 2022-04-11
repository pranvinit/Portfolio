export const DROPDOWN = {
  initial: { y: "-100vh" },
  animate: {
    y: 0,
    transition: { type: "spring", stiffness: 120, delay: 0.2, duration: 0.8 },
  },
};

export const OPACITY = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};
