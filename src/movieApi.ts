const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Dates {
  maximum: string;
  minimum: string;
}

export interface MoviesResponse {
  dates: Dates;
  page: number;
  results: Movie[];
}

export async function getMovies() {
  return await fetch(
    `${BASE_PATH}/movie/now_playing?language=ko&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
}

export interface Similar {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SimilarResponse {
  page: number;
  results: Similar[];
}

export async function getSmilar(id: number) {
  return await fetch(
    `${BASE_PATH}/movie/${id}/similar?language=ko&page=1&api_key=${API_KEY}`
  ).then((response) => response.json());
}
