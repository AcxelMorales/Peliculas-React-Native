import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB';

import {MovieFull, Credits, Cast} from '../interfaces/Imovie';

interface MovieDetails {
  cast: Cast[];
  crew: Cast[];
  isLoading: boolean;
  movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
    crew: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const creditsPromise = movieDB.get<Credits>(`/${movieId}/credits`);

    const [{data}, {data: {cast, crew}}] = await Promise.all([
      movieDetailsPromise,
      creditsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: data,
      cast,
      crew,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
