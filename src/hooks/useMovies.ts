import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB';

import {IMovie, IMovieData} from '../interfaces/Imovie';

interface MoviesState {
  nowPlaying: IMovieData[];
  popular: IMovieData[];
  topRated: IMovieData[];
  upcoming: IMovieData[];
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<IMovie>('/now_playing');
    const topRatedPromise = movieDB.get<IMovie>('/top_rated');
    const popularPromise = movieDB.get<IMovie>('/popular');
    const upcomingPromise = movieDB.get<IMovie>('/upcoming');

    const res = await Promise.all([
      nowPlayingPromise,
      topRatedPromise,
      popularPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: res[0].data.results,
      topRated: res[1].data.results,
      popular: res[2].data.results,
      upcoming: res[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};

export default useMovies;
