import { AnimatePresence, Variants, motion } from "framer-motion";
import { useState } from "react";
import { makeImagePath } from "../libs/utils";
import { Movie } from "../movieApi";

interface ISlide {
  title: string;
  movies: Movie[];
}

const variant: Variants = {
  start: (back: boolean) => {
    return {
      x: back ? -window.outerWidth - 5 : window.outerWidth + 5,
    };
  },
  end: { x: 0 },
  exit: (back: boolean) => {
    return {
      x: back ? window.outerWidth + 5 : -window.outerWidth - 5,
    };
  },
};

function Slide({ title, movies }: ISlide) {
  let num = +movies?.length!;
  const [slideNum, setSlideNum] = useState(0);
  const [back, setBack] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const onLeftLideClick = () => {
    if (leaving) return;
    setLeaving(true);
    setBack(true);
    setSlideNum((prov) => (prov < 5 ? num - 5 : prov - 5));
  };
  const onRightClick = () => {
    if (leaving) return;
    setLeaving(true);
    setBack(false);
    setSlideNum((prov) => (prov + 5 >= num ? 0 : prov + 5));
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <main className="relative w-full h-96">
      <div className="ml-16 text-3xl font-semibold mb-7">{title}</div>
      <button
        onClick={onLeftLideClick}
        className="absolute flex justify-center text-5xl rounded-full w-14 top-36 left-3 aspect-square"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      >
        &lt;
      </button>
      <AnimatePresence
        initial={false}
        custom={back}
        onExitComplete={toggleLeaving}
      >
        <motion.div
          custom={back}
          variants={variant}
          initial="start"
          animate="end"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
          className="absolute w-[90%] grid grid-cols-5 mx-20 gap-x-4 p-7 rounded-xl "
          style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          key={slideNum}
        >
          {movies?.slice(slideNum, slideNum + 5).map((movie) => (
            <motion.div
              style={{
                backgroundImage: `url(${makeImagePath(
                  movie.backdrop_path + ""
                )})`,
              }}
              className="bg-center bg-cover aspect-video"
              key={movie.id}
            />
          ))}
        </motion.div>
      </AnimatePresence>
      <button
        onClick={onRightClick}
        className="absolute flex justify-center text-5xl rounded-full w-14 top-36 right-5 aspect-square"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
      >
        &gt;
      </button>
    </main>
  );
}

export default Slide;
