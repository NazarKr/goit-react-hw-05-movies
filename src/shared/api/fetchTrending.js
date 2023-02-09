import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ac72fb525d19148bd97395d88b810c51';


export const fetchTrending = async (page) => {
    const { data } = await axios.get(
      `${URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return data;
};

export const fetchMovies = async (query, page,) => {
  const response = await axios.get(
    `${URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data;
};