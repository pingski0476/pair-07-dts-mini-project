import { CardMedia } from "@mui/material";

import * as React from "react";
import './SeriesBackdrop.css';
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const SeriesBackdrop = ({ movie }) => {
	return (
		<div className={"image"}>
			<img
			className={"image__img"}
			src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
			alt=""/>
			<div className={"image__overlay"}>
				<p className={"image__title"}>{movie.name}</p>
			</div>
		</div>
	);
};

export default SeriesBackdrop;
