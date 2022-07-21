import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import tmdb from "../../apis/tmdb";
import SeriesBackdrop from "../../components/seriesBackdrop/SeriesBackdrop";
import { Link } from "react-router-dom";

import "./UpComingSeries.css";

const UpComingSeries = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("tv/popular");
        setMovies(fetchedMovies.data.results.slice());
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <Box className="rated-container">
        <div className="rated-title">
          <h3>Popular</h3>
        </div>
        <Box className="ratedM-list">
          <div className="ratedM-items">
            {movies.map((movie) => (
              <Link to={`/series/${movie.id}`}>
                <div className="ratedM-item">
                  <SeriesBackdrop key={movie.name} movie={movie} />
                </div>
              </Link>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default UpComingSeries;
