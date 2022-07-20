import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import "./Hero.css";
import HeroItems from "./HeroItems";
import tmdb from "../../apis/tmdb";

const BACKGROUND_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const Hero = () => {
	const [movieItems, setMovieItems] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);

	const setting = {
		dots: true,
		infinite: true,
		speed: 500,
		// autoPlay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const fetchedMovies = await tmdb.get("/discover/movie");
				setMovieItems(fetchedMovies.data.results.slice(5, 10));
			} catch (error) {
				console.log(error);
			}
		};
		fetchMovies();
	}, []);

	return (
		<div className="hero">
			<span>Watch now!</span>
	
	{/*DATA HILANG SAAT REFRESH-----------------------  */}

					<div className="hero-slide">
					
						{movieItems.map((movie) => (
							<div className="hero-items">
								<HeroItems key={movie.title} movie={movie} />
							</div>
						))}
					
					</div>
	{/* --------------------------------------------------- */}
			

			{/* {movieItems && (
				<div className="hero-slide">
					{movieItems.map((movie) => (
						<div className="hero-items">
							<HeroItems key={movie.title} movie={movie} />
						</div>
					))}
				</div>
			)} */}
			{/* {data.results.map((movie) =>(
					<HeroItems key={movie.title} movie={movie} />
				))} */}
		</div>
	);
};

export default Hero;
