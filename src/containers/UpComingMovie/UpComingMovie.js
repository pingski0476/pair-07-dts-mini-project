import { Box } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import tmdb from '../../apis/tmdb'
import MovieBackdrop from '../../components/movieBackdrop/MovieBackdrop'

import './UpComingMovie.css'
const UpComingMovie = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const fetchedMovies = await tmdb.get("movie/upcoming");
                setMovies(fetchedMovies.data.results.slice());
            }catch(error){
                console.log(error);
            }
        };
        fetchMovies();
    },[]);
  return (
    <div>
        <Box className='rated-container'>
            <div className='rated-title'>
                <h3>Up Coming</h3>
            </div>
            <Box className='ratedM-list'>
            <div className='ratedM-items'>
                {movies.map((movie) => (
                    <Link to={`/movies/${movie.id}`} className='ratedM-item'>
                        <MovieBackdrop key={movie.title} movie={movie}/>
                    </Link>
                ))}
            </div>
            </Box>
        </Box>
    </div>
  )
}

export default UpComingMovie