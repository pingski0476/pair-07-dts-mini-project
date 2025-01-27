import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import BigPoster from "../../components/BigPoster";

import tmdb from "../../apis/tmdb";
// import CardWithButton from "../components/CardWithButton";
// import MovieCard from "../components/movieCard/MovieCard";

import "./BigTrendingList.css";
import { Link } from "react-router-dom";

const BigTrendingList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results.slice(1, 6));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Box className={"Bcontainer-list"}>
        <div className={"Btitle-box"}>
          <Typography
            className={"Bcontainer-title"}
            variant="h3"
            component="h3"
          >
            Top 5
          </Typography>
        </div>
        <Box className={"Blist"}>
          <div className={"Blist-container"}>
            {movies.map((movie) => (
              <Link to={`/movies/${movie.id}`} className="Bmovies-item">
                <BigPoster key={movie.title} movie={movie}></BigPoster>
              </Link>
            ))}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default BigTrendingList;
