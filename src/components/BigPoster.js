import * as React from "react";
import "./BigPoster.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { red } from "@mui/material/colors";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const BigPoster = ({ movie }) => {
	return (
		<div className={"Bposter"}>
			<img className={"Bposter__img"} src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={""} />
			<div className={"Bposter__overlay"}>
				<PlayCircleFilledWhiteIcon className={"Bposter__title"} sx={{ fontSize: 150, color: red[400], borderRadius: 5 }} />
			</div>
		</div>
	);
};

export default BigPoster;
