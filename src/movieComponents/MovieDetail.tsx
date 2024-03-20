import { useLocation, useNavigate, useParams } from "react-router-dom";
import { makeImagePath } from "../libs/utils";
import { motion } from "framer-motion";
import MovieDetailList from "./MovieDetailList";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieScroll } from "../atoms";

function MovieDetail() {
  const {
    state: { id, title, release_date, backdrop_path, overview },
  } = useLocation();
  const { movieId } = useParams();
  const nav = useNavigate();
  const onBackClick = () => {
    nav("/movies");
  };
  //esc키 누르면 '/movies'화면으로
  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "Escape") {
        nav("/movies");
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [nav]);
  //버블링을 막아서 main 화면을 눌러도 /movies로 가지 않게 함
  const onBackCancel = (event: { stopPropagation: () => void }) => {
    event.stopPropagation();
  };
  //스크롤 맨 위로
  const [movieScrollValue, setMovieScrollValue] = useRecoilState(movieScroll);
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (movieScrollValue && mainRef.current) {
      mainRef.current.scrollTop = 0;
      setMovieScrollValue(false);
    }
  }, [mainRef, movieScrollValue]);
  return (
    <div
      onClick={onBackClick}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="fixed top-0 flex items-center justify-center w-screen h-screen px-24 py-16"
    >
      <motion.div
        ref={mainRef}
        layoutId={id + ""}
        className="z-20 max-w-5xl overflow-auto bg-black rounded-lg min-w-[900px] h-4/5"
        onClick={onBackCancel}
      >
        <main>
          <div className="text-5xl font-semibold text-center border-b-2 border-white py-7">
            {title}
          </div>
          <figure
            style={{
              backgroundImage: `url(${makeImagePath(backdrop_path + "")})`,
            }}
            className="bg-center bg-cover border-b-2 border-white aspect-video"
          />

          <div className="p-6 font-semibold border-b-4 border-white m-11">
            <span>
              개봉일: <br />
              {release_date}
            </span>
            <p>
              줄거리: <br />
              {overview}
            </p>
          </div>
        </main>
        <MovieDetailList movieId={movieId + ""} text="관련있는 영화" />
      </motion.div>
    </div>
  );
}

export default MovieDetail;
