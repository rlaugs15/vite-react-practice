import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";

const variant: Variants = {
  start: (isback: boolean) => {
    return {
      x: isback ? -300 : 300,
      scale: 0,
    };
  },
  visible: {
    x: 0,
    scale: 1,
  },
  exit: (isback: boolean) => {
    return {
      x: isback ? 300 : -300,
      scale: 0,
    };
  },
};

interface ICircle {
  layoutId: string;
}

function Circle({ layoutId }: ICircle) {
  return (
    <motion.div
      layoutId={layoutId}
      className="w-16 h-16 bg-green-400 rounded-full"
    />
  );
}

function Ani() {
  const [visible, setVisible] = useState(1);
  const [back, setIsback] = useState(false);
  const onLeftClick = () => {
    setIsback(false);
    setVisible((props) => (props === 1 ? 9 : props - 1));
  };
  const onRightClick = () => {
    setIsback(true);
    setVisible((props) => (props === 9 ? 1 : props + 1));
  };

  const [click, setClick] = useState(false);
  const onCircleChangeClick = () => {
    setClick((prov) => !prov);
  };
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-green-300">
      <div className="absolute flex space-x-3 top-10">
        <div className="flex items-center justify-center bg-red-300 w-28 h-28">
          {click ? <Circle layoutId="circle" /> : null}
        </div>
        <div className="flex items-center justify-center bg-red-300 w-28 h-28">
          {!click ? <Circle layoutId="circle" /> : null}
        </div>
        <button onClick={onCircleChangeClick}>버튼</button>
      </div>
      <AnimatePresence mode="wait" custom={back}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) =>
          visible === item ? (
            <motion.div
              key={item}
              custom={back}
              variants={variant}
              initial="start"
              animate="visible"
              exit="exit"
              className="absolute flex items-center justify-center w-24 h-24 font-semibold bg-white top-80 rounded-xl"
            >
              {item}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="mt-5 space-x-3">
        <button
          onClick={onLeftClick}
          className="px-6 py-3 bg-blue-300 rounded-lg"
        >
          -1
        </button>
        <button
          onClick={onRightClick}
          className="px-6 py-3 bg-blue-300 rounded-lg"
        >
          +1
        </button>
      </div>
    </div>
  );
}

export default Ani;
