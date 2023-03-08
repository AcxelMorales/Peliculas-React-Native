import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '012e552a33aa7ab027efdf8b3b53c0f6',
    language: 'es-ES',
  },
});

export default movieDB;
