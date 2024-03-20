import { MoviesResponse } from "../movieApi";
import { makeImagePath } from "../libs/utils";

interface IBanner {
  data: MoviesResponse;
  isLoading: boolean;
}

function Banner({ data, isLoading }: IBanner) {
  return (
    <div className="h-screen mt-14">
      {!isLoading
        ? data?.results.slice(0, 1)?.map((movie) => (
            <figure className="flex h-full" key={movie.id}>
              <aside className="flex flex-col items-center w-4/6 p-5 px-12 pt-20">
                <header className="flex-shrink font-semibold mb-14 text-[5vw]">
                  {movie?.title}
                </header>
                <main className="flex-shrink space-y-8 text-2xl font-semibold">
                  <span className="text-[1.4vw]">
                    개봉일: {movie?.release_date}
                  </span>
                  <div className="text-[1.6vw]">
                    <div>줄거리: </div>
                    {movie?.overview}
                  </div>
                </main>
              </aside>
              <div
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)) , linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)) , url(${makeImagePath(
                    movie.poster_path + ""
                  )})`,
                }}
                className="w-full h-full bg-center bg-cover"
              />
            </figure>
          ))
        : null}
    </div>
  );
}

export default Banner;
