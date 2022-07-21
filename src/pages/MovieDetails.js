import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";
import "./MovieDetails.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const PlayButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  borderRadius: 25,
  marginRight: 15,
  height: 50,
  "&:hover": {
    backgroundColor: red[900],
  },
}));
const DetailsButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[50]),
  backgroundColor: grey[50],
  borderRadius: 25,
  marginRight: 15,
  height: 50,
  "&:hover": {
    backgroundColor: grey[300],
  },
}));

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await tmdb.get(`movie/${params.movieId}`);
        setMovie(fetchedMovie.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  return (
    <div
      style={{
        backgroundImage: `url(${BASE_IMAGE_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="heroItems-content">
        <h1 className={"movie-title"}>{movie.title}</h1>
        <p className={"movie-overview"}>{movie.overview}</p>
        <PlayButton variant="contained" size="large">
          Play Trailer
        </PlayButton>
        <DetailsButton variant="contained" size="large">
          Details
        </DetailsButton>
      </div>
    </div>
  );
};

export default MovieDetails;
