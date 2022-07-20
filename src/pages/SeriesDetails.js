import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const SeriesDetails = () => {
  const [movie, setMovie] = useState({});

  let params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await tmdb.get(`tv/${params.seriesId}`);
        setMovie(fetchedMovie.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [params.seriesId]);

  return (
    <>
      <div>{movie.title}</div>
      <div>{movie.overview}</div>
      <img src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt="" />
    </>
  );
};

export default SeriesDetails;
