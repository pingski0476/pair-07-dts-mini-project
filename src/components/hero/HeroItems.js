import React from "react";
import "./HeroItem.css";

const BACKGROUND_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const HeroItems = ({ movie }) => {
  return (
    <div
      className="hero-items"
      style={{
        backgroundImage: `url(${BACKGROUND_IMAGE_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {/* <div className="hero-bg-image"> */}
      {/* </div> */}
      <div className="heroItems-content">
        <h1 className={"movie-title"}>{movie.title}</h1>

        <p className={"movie-overview"}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default HeroItems;
