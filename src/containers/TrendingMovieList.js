import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import tmdb from "../apis/tmdb";
import CardWithButton from "../components/CardWithButton";
import MovieCard from "../components/movieCard/MovieCard";
import { Link } from "react-router-dom";

import "./TrendingMovieList.css";

const TrendingMovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results.slice(1, 10));
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
              <Link to={`/movies/${movie.id}`} className="movies-item">
                <CardWithButton
                  key={movie.title}
                  movie={movie}
                ></CardWithButton>
              </Link>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TrendingMovieList;
