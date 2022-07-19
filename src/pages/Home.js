import React from 'react';

import TrendingMovieList from '../containers/TrendingMovieList';
import Hero from '../components/hero/Hero'
import TrendingSeriesList from '../containers/TrendingSeriesList';


import MovieList from "../containers/MovieList";
import SeriesList from "../containers/SeriesList";

const Home = () => {
  return (
    <>
      <div>
      <Hero/>
      <TrendingMovieList/>
      <TrendingSeriesList/>
      </div>
    </>
  );
};

export default Home;
