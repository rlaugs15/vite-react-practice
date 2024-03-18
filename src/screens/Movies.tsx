import { useQuery } from "react-query";
import { MoviesResponse, getMovies } from "../movieApi";
import Banner from "../movieComponents/Banner";
import Slide from "../movieComponents/Slide";

function Movies() {
  const { isLoading, data } = useQuery<MoviesResponse>(["movies"], getMovies);

  return (
    <div>
      <Banner data={data!} isLoading={isLoading} />
      <Slide title="상영 중인 영화" movies={data?.results!} />
    </div>
  );
}

export default Movies;
