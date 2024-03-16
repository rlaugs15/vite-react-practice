import { useQuery } from "react-query";
import { MoviesResponse, getMovies } from "../movieApi";
import Banner from "../movieComponents/Banner";

function Movies() {
  const { isLoading, data } = useQuery<MoviesResponse>(["movies"], getMovies);
  return (
    <div>
      <Banner data={data!} isLoading={isLoading} />
      <main className="bg-green-700">
        <div className="mx-20 bg-red-300">hi</div>
      </main>
    </div>
  );
}

export default Movies;
