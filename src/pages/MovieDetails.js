import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../apis/tmdb";
import "./MovieDetails.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";
import YouTube from "react-youtube";
import { Modal, Box } from "@mui/material";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
};

const PlayButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  borderRadius: 25,
  marginRight: 15,
  height: 50,
  "&:hover": {
    backgroundColor: red[900],
  },
}));
const DetailsButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[50]),
  backgroundColor: grey[50],
  borderRadius: 25,
  marginRight: 15,
  height: 50,
  "&:hover": {
    backgroundColor: grey[300],
  },
}));

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [playTrailer, setPlayerTrailer] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let params = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await tmdb.get(`movie/${params.movieId}`);
        setMovie(fetchedMovie.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [params.movieId]);

  const renderTrailer = () => {
    const trailer = movie.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    return (
      <YouTube
        videoId={trailer.key}
        containerClassName={"youtube-container"}
        opts={{
          width: "800px",
          height: "550px",
          playerVars: {
            autoplay: 1,
            controls: 0,
          },
        }}
      />
    );
  };

  useEffect(() => {
    if (open) {
      setPlayerTrailer(true);
    }
  }, [open]);
  return (
    <div
      style={{
        backgroundImage: `url(${BASE_IMAGE_URL}${movie.backdrop_path})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          {movie.videos && playTrailer ? renderTrailer() : null}
        </Box>
      </Modal>

      <div className="heroItems-content">
        <h1 className={"movie-title"}>{movie.title}</h1>
        <p className={"movie-overview"}>{movie.overview}</p>
        <PlayButton variant="contained" size="large" onClick={handleOpen}>
          Play Trailer
        </PlayButton>
        <DetailsButton variant="contained" size="large">
          Details
        </DetailsButton>
      </div>
    </div>
  );
};

export default MovieDetails;
