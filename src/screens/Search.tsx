import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { Movie, MoviesResponse, getMovies } from "../movieApi";
import { useState } from "react";
import { makeImagePath } from "../libs/utils";
import { Outlet, useMatch, useNavigate } from "react-router-dom";

interface IFromData {
  movieName: string;
}

function Search() {
  const { isLoading, data } = useQuery<MoviesResponse>(["movies"], getMovies);
  const [movieSearch, setMovieSearch] = useState("");
  const { register, handleSubmit } = useForm<IFromData>();
  const onSearchSubmit = ({ movieName }: IFromData) => {
    setMovieSearch(movieName);
  };
  const searchMovie = data?.results.filter((movie) =>
    movie.title.toLowerCase().includes(movieSearch?.toLowerCase() || "")
  );
  const match = useMatch("/movies/search/:movieId");
  const nav = useNavigate();
  const onDetailClick = (movie: Movie) => {
    const { id, title, release_date, backdrop_path, overview } = movie;
    if (movie) {
      nav(`/movies/search/${id}`, {
        state: { id, title, release_date, backdrop_path, overview },
      });
    } else {
      return;
    }
  };
  return (
    <div className="w-screen h-screen">
      <form
        onSubmit={handleSubmit(onSearchSubmit)}
        className="flex items-center justify-center w-screen mt-32 space-x-5"
      >
        <input
          {...register("movieName")}
          type="text"
          className="h-12 px-2 text-black border-2 border-black rounded-lg w-96 focus:ring-4 focus:ring-offset-2 focus:ring-slate-600"
        />
        <button className="font-semibold border-b-2 border-white focus:text-red-500">
          검색
        </button>
      </form>
      <main>
        {isLoading ? null : (
          <div className="mt-16 border-2 border-white mx-14">
            <article className="grid grid-cols-5 gap-3 p-7">
              {searchMovie &&
                searchMovie.map((movie) => (
                  <div>
                    <div
                      key={movie.id}
                      style={{
                        backgroundImage: `url(${makeImagePath(
                          movie.backdrop_path + ""
                        )})`,
                      }}
                      onClick={() => onDetailClick(movie)}
                      className="bg-center bg-cover h-96 aspect-auto"
                    />
                    <p className="py-3 text-2xl font-semibold text-center">
                      {movie.title}
                    </p>
                  </div>
                ))}
            </article>
          </div>
        )}
      </main>
      {match ? <Outlet /> : null}
    </div>
  );
}

export default Search;
