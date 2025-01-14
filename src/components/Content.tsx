import { motion } from "framer-motion";

function Content({ children }: any) {
  return (
    <div className="col-span-2">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Content;
