import { CardMedia } from "@mui/material";

import * as React from "react";
import "./MovieBackdrop.css";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieBackdrop = ({ movie }) => {
  return (
    <div className={"image"}>
      <img
        className={"image__img"}
        src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
        alt=""
      />
      <div className={"image__overlay"}>
        <p className={"image__title"}>{movie.title}</p>
      </div>
      <div className={"image__rating"}>
        <p>{movie.title}</p>
        <p>⭐{movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieBackdrop;
