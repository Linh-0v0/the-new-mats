import { motion } from "framer-motion";
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: { opacity: 0 },
};

/* TRANSITION BTW PAGES */
const Transitions = ({ children }) => {
  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
export default Transitions;
