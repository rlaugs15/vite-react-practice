import { Variants, motion } from "framer-motion";
import { makeImagePath } from "../libs/utils";
import { Movie } from "../movieApi";
import { useNavigate } from "react-router-dom";

interface IMovie {
  movie: Movie;
  index: number;
}

const slideVariant: Variants = {
  nomal: { scale: 1, y: 0, zIndex: 3 },
  hover: {
    scale: 1.3,
    y: -30,
    zIndex: 5,
  },
};

const infoVariant: Variants = {
  nomal: { scale: 0, opacity: 0, y: -100 },
  hover: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

function MovieCard({ movie, index }: IMovie) {
  const nav = useNavigate();
  const onCardClick = (movie: Movie) => {
    const { id, title, release_date, backdrop_path, overview } = movie;
    nav(`${id}`, {
      state: {
        id,
        title,
        release_date,
        backdrop_path,
        overview,
      },
    });
  };
  return (
    <div>
      <motion.div
        layoutId={movie.id + ""}
        onClick={() => onCardClick(movie)}
        variants={slideVariant}
        initial="nomal"
        whileHover="hover"
        style={{
          transformOrigin:
            index === 0
              ? "left center"
              : index === 4
              ? "right center"
              : "center center",
        }}
      >
        <motion.div
          style={{
            backgroundImage: `url(${makeImagePath(movie.backdrop_path + "")})`,
          }}
          className="bg-center bg-cover aspect-video"
          key={movie.id}
        />
        <motion.div
          variants={infoVariant}
          className="absolute z-30 w-full p-5 font-semibold rounded-b-lg opacity-0 bg-slate-800"
        >
          <div>제목: {movie.title}</div>
          <div>개봉일: {movie.release_date}</div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MovieCard;
