import { Outlet } from "react-router-dom";
import MovieHeader from "./components/MovieHeader";

function MovieApp() {
  return (
    <div className="text-white bg-black">
      <MovieHeader />
      <Outlet />
    </div>
  );
}

export default MovieApp;
