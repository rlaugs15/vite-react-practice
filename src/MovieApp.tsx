import { Outlet } from "react-router-dom";
import MovieHeader from "./components/MovieHeader";

function MovieApp() {
  return (
    <>
      <MovieHeader />
      <Outlet />
    </>
  );
}

export default MovieApp;
