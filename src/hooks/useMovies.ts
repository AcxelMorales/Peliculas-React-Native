import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB';

import {IMovie, IMovieData} from '../interfaces/Imovie';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesInTheater, setMoviesInTheater] = useState<IMovieData[]>([]);

  const getMovies = async () => {
    const {
      data: {results},
    } = await movieDB.get<IMovie>('/now_playing');

    setMoviesInTheater(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesInTheater,
    isLoading,
  };
};

export default useMovies;
