import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tmdb from "../../apis/tmdb";
import MovieBackdrop from "../../components/movieBackdrop/MovieBackdrop";

import "./TopRatedMovie.css";
const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("/movie/top_rated");
        setMovies(fetchedMovies.data.results.slice(1, 6));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <Box className="rated-container">
        <div className="rated-title">
          <h3>Top Rated</h3>
        </div>
        <Box className="ratedM-list">
          <div className="ratedM-items">
            {movies.map((movie) => (
              <Link to={`/movies/${movie.id}`} className="ratedM-item">
                <MovieBackdrop key={movie.title} movie={movie} />
              </Link>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default TopRatedMovie;
