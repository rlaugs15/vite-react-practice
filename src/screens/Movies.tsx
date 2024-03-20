import { useQuery } from "react-query";
import { MoviesResponse, getMovies } from "../movieApi";
import Banner from "../movieComponents/Banner";
import Slide from "../movieComponents/Slide";
import { Outlet, useMatch } from "react-router-dom";

function Movies() {
  const { isLoading, data } = useQuery<MoviesResponse>(["movies"], getMovies);
  const match = useMatch(`/movies/:movieId`);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <span className="font-semibold text-7xl">로딩 중...</span>
        </div>
      ) : (
        <div>
          <Banner data={data!} isLoading={isLoading} />
          <Slide title="상영 중인 영화" movies={data?.results!} />
        </div>
      )}
      {match ? <Outlet /> : null}
    </>
  );
}

export default Movies;
