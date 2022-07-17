import React from "react";
import "./HeroItem.css";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BACKGROUND_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const HeroItems = ({ movie }) => {
  return (
    <div className="hero-items">
      <div className="hero-bg-image">
        {movie.backdrop_path && <img src={BACKGROUND_IMAGE_URL + movie.backdrop_path} alt={movie.title} />}
      </div>
      <div className="hero-content">
        <h1 className={"movie-title"}>{movie.title}</h1>
        {movie.overview ? <p>{movie.overview}</p> : null}
        <button className="button-play">Play Trailer</button>
        <button className="button-more">More</button>
      </div>
    </div>
  );
};

export default HeroItems;
