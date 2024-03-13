import { motion, Variants } from "framer-motion";
import { useRef } from "react";

function Ani() {
  const constraintsRef = useRef(null);
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <motion.div
        ref={constraintsRef}
        className="flex items-center justify-center overflow-hidden w-80 h-80 bg-slate-300"
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragSnapToOrigin
          dragElastic={0.1}
          className="w-32 h-32 bg-blue-400"
        />
      </motion.div>
    </div>
  );
}

export default Ani;
