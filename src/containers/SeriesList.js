import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/movieCard/MovieCard";
import "./SeriesList.css";

const SeriesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fatchedMovies = await tmdb.get("trending/tv/week");
        setMovies(fatchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Box className={"series-list"}>
        <div className={"series-titleBox"}>
          <Typography className={"series-title"} variant="h3" component="h3">
            Trending Series
          </Typography>
        </div>
        <Box className={"list-series"}>
          <div>
            {movies.map((movie) => (
              // <SeriesCard key={movie.title} movie={movie}></SeriesCard>
              <Link to={`/series/${movie.id}`}>
                <MovieCard key={movie.title} movie={movie}></MovieCard>
              </Link>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default SeriesList;
