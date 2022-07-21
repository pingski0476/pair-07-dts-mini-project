import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import BigPoster from "../../components/BigPoster";

import tmdb from "../../apis/tmdb";
// import CardWithButton from "../components/CardWithButton";
// import MovieCard from "../components/movieCard/MovieCard";

import "./BigTrendingSeries.css";
import { Link } from "react-router-dom";

const BigTrendingSeries = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const fetchedMovies = await tmdb.get("trending/tv/week");
				setMovies(fetchedMovies.data.results.slice(0, 5));
			} catch (error) {
				console.log(error);
			}
		};

		fetchMovies();
	}, []);

	return (
		<>
			<Box className={"Tcontainer-list"}>
				<div className={"Ttitle-box"}>
					<Typography className={"Tcontainer-title"} variant="h3" component="h3">
						Top 5
					</Typography>
				</div>
				<Box className={"Tlist"}>
					<div className={"Tlist-container"}>
						{movies.map((movie) => (
							<Link to={`/series/${movie.id}`} className="Bmovies-item">
								<BigPoster key={movie.title} movie={movie}></BigPoster>
							</Link>
						))}
					</div>
				</Box>
			</Box>
		</>
	);
};

export default BigTrendingSeries;
