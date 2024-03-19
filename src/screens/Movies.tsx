import { useQuery } from "react-query";
import { MoviesResponse, getMovies } from "../movieApi";
import Banner from "../movieComponents/Banner";
import Slide from "../movieComponents/Slide";

function Movies() {
  const { isLoading, data } = useQuery<MoviesResponse>(["movies"], getMovies);

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
    </>
  );
}

export default Movies;
