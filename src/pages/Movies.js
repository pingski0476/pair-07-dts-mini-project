import React from "react";
import BigTrendingList from "../containers/BigTrendingList/BigTrendingList";
import TopRatedMovie from "../containers/topRatedMovie/TopRatedMovie";
import TrendingMovieList from "../containers/TrendingMovieList";
import UpComingMovie from "../containers/UpComingMovie/UpComingMovie";
import UpComingSeries from "../containers/upComingSeries/UpComingSeries";

const Movies = () => {
  return (
    <div sx={{ mt: "5px" }}>
      <BigTrendingList />
      <div>
        <TopRatedMovie />
      </div>
      <div style={{ marginTop: "2.5em" }}>
        <UpComingMovie />
      </div>
    </div>
  );
};

export default Movies;
