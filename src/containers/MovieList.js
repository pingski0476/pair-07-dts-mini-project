import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


import MovieCard from "../components/movieCard/MovieCard";

import "./MovieList.css";

const MovieList = () => {
  const API_URL = "https://api.themoviedb.org/3"
	const [movies, setMovies] = useState([]);
	const [searchKey, setSearchKey] = useState("");

  
	const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";

		const {
      data: { results },
		} = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: "af715024a63a4ad95f21dff49888056e",
				query: searchKey,
			},
		});
    
		setMovies(results);
	};
  
	useEffect(() => {
    fetchMovies();
	}, []);
  
	const searchMovies = (e) => {
    e.preventDefault();
		fetchMovies(searchKey);
	};


  // -----------------------------------------
  // useEffect(() => {
  //   const fetchMovies = async (searchKey) => {
  //    const type: searchKey ? "search" : "discover"
  //     try {
  //       const fetchedMovies = await tmdb.get("discover/movie");
  //       setMovies(fetchedMovies.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);
  // ------------------------------------------
	return (
		<>
			<Box className={"container-list"}>
				<div className={"title-box"}>
					<Typography className={"container-title"} variant="h3" component="h3">
						Trending Movies
					</Typography>
				</div>
				<form onSubmit={searchMovies}>
					<input type="text" onChange={(e) => setSearchKey(e.target.value)}></input>
					<button type={"submit"}>Search</button>
				</form>
				<Box className={"list"}>
					<div>
						{movies.map((movie) => (
							<Link to={`/movies/${movie.id}`}>
								<MovieCard href key={movie.title} movie={movie}></MovieCard>
							</Link>
						))}
					</div>
				</Box>
			</Box>
		</>
	);
};

export default MovieList;

// export function getMovies() {
//   return movies;
// }

// // Asumsikan ini fungsi GET /id
// export function getMovie(movieId) {
//   return movies.find((movie) => movie.id === movieId);
// }
