import { Outlet } from "react-router-dom";
import MovieHeader from "./components/MovieHeader";

function MovieApp() {
  return (
    <div className="overflow-x-scroll text-white bg-black">
      <MovieHeader />
      <Outlet />
    </div>
  );
}

export default MovieApp;
