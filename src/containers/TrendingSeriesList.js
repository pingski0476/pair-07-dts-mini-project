import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import tmdb from "../apis/tmdb";
import MovieCard from "../components/movieCard/MovieCard";
import "./TrendingSeriesList.css";

const TrendingSeriesList = () => {
	const [movies, setMovies] = useState([]);
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const fatchedMovies = await tmdb.get("trending/tv/week");
				setMovies(fatchedMovies.data.results);
			} catch (error) {
				console.log(error);
			}
		};

		fetchMovies();
	}, []);

	useEffect(() => {
		console.log(carousel.current.scrollWidth, carousel.current.offsideWidh);
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<>
			<Box className={"series-list"}>
				<div className={"series-titleBox"}>
					<Typography className={"series-title"} variant="h3" component="h3">
						Trending Series
					</Typography>
				</div>
				<motion.div ref={carousel}>
					<motion.div drag="x" dragConstraints={{ right: 0, left: -1610}} className="series-carousel">
						{movies.map((movie) => (
							// <SeriesCard key={movie.title} movie={movie}></SeriesCard>
							<Link to={`/series/${movie.id}`} className="series-item">
								<MovieCard key={movie.title} movie={movie}></MovieCard>
							</Link>
						))}
					</motion.div>
				</motion.div>
			</Box>
		</>
	);
};

export default TrendingSeriesList;
