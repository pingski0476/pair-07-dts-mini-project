import React from "react";

import MovieList from "../containers/MovieList";
import Hero from "../components/hero/Hero";
import SeriesList from "../containers/SeriesList";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <div>
        <MovieList />
        <SeriesList />
        </div>
      </div>
    </>
  );
};

export default Home;
