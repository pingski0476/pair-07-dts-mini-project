import React, { useEffect, useState } from "react";

import "./Hero.css";
import HeroItems from "./HeroItems";
import tmdb from "../../apis/tmdb";

const Hero = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("/discover/movie");
        setMovieItems(fetchedMovies.data.results.slice(5, 6));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="hero">
      <span>Discover</span>
      <div className="hero-content">
        <div className="hero-slide">
          {movieItems.map((movie) => {
            return <div>{<HeroItems key={movie.title} movie={movie} />}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
