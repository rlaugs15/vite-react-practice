import { useQuery } from "react-query";
import { Similar, SimilarResponse, getSmilar } from "../movieApi";
import { makeImagePath } from "../libs/utils";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { movieScroll } from "../atoms";

interface IMovieDetailList {
  movieId: string;
  text: string;
}

function MovieDetailList({ movieId, text }: IMovieDetailList) {
  const setMovieScroll = useSetRecoilState(movieScroll);
  const { data, isLoading } = useQuery<SimilarResponse>(
    ["slmilar", movieId],
    () => getSmilar(Number(movieId))
  );
  const nav = useNavigate();
  const onDetailClick = (movie: Similar) => {
    const { id, title, release_date, backdrop_path, overview } = movie;
    nav(`/movies/${id}`, {
      state: {
        id,
        title,
        release_date,
        backdrop_path,
        overview,
      },
    });
    // 클릭 이벤트 발생 시 div의 스크롤을 맨 위로 이동
    setMovieScroll(true);
  };
  return (
    <div className="p-4">
      <span className="text-3xl font-semibold ">{text}</span>
      {isLoading ? (
        <div className="text-5xl font-semibold text-center">로딩 중...</div>
      ) : (
        <main className="grid grid-cols-3 gap-5 my-10">
          {data?.results?.slice(0, 9).map((movie) => (
            <div
              onClick={() => onDetailClick(movie)}
              style={{
                backgroundImage: `url(${makeImagePath(
                  movie.backdrop_path + ""
                )})`,
              }}
              key={movie.id}
              className="bg-center bg-cover aspect-video bg-slate-400"
            />
          ))}
        </main>
      )}
    </div>
  );
}

export default MovieDetailList;
