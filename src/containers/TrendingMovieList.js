import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/movieCard/MovieCard";

import "./TrendingMovieList.css";

const TrendingMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/day");
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Box className={"container-list"}>
        <div className={"title-box"}>
          <Typography className={"container-title"} variant="h3" component="h3">
            Trending Movies
          </Typography>
        </div>
        <Box className={"list"}>
          <div>
            {movies.map((movie) => (
              <div className="movies-item">
              <MovieCard key={movie.title} movie={movie}></MovieCard>
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TrendingMovieList;
