
import * as React from "react";
import './CardWIthButton.css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { red } from "@mui/material/colors";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const CardWithButton = ({ movie }) => {
	return (
		<div className={"poster"}>
			<img
			className={"poster__img"}
			src={`${BASE_IMAGE_URL}${movie.poster_path}`}
			alt=""/>
			<div className={"poster__overlay"}>
				<PlayCircleFilledWhiteIcon
				className={"poster__title"}
				sx={{fontSize: 60, color: red[400], borderRadius: 5}}
				>
					{movie.title}
				
				</PlayCircleFilledWhiteIcon>
			</div>
		</div>
	);
};

export default CardWithButton;