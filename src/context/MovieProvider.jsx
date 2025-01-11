import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

const API_KEY = "e332a85a405006a000ce18fbd74909ee";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzMyYTg1YTQwNTAwNmEwMDBjZTE4ZmJkNzQ5MDllZSIsIm5iZiI6MTczNjYxMjY4Mi40NzEsInN1YiI6IjY3ODI5YjRhMjE4ZmQ1N2FjZjRlZTUyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SLH5JmDh0JZZZ7zZrT4FkTxGnbGDBxuaG6J6IBwYy0E";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (URL) => {
    setLoading(true);
    setError(null); 
    axios
      .get(URL, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => {
        console.log(err);
        setError("An error occurred while fetching movies");
      })
      .finally(() => setLoading(false));
  };

  return (
    <MovieContext.Provider value={{ movies, loading, error, getMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
