import { Box } from '@mui/material'
import React, {useEffect, useState} from 'react'
import tmdb from '../../apis/tmdb'
import MovieBackdrop from '../../components/movieBackdrop/MovieBackdrop'
import SeriesBackdrop from '../../components/seriesBackdrop/SeriesBackdrop'

import './TopRatedSeries.css'
const TopRatedSeries = () => {
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const fetchedMovies = await tmdb.get("tv/top_rated");
                setMovies(fetchedMovies.data.results.slice(2, 20));
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
                <h3>Top Rated</h3>
            </div>
            <Box className='ratedM-list'>
            <div className='ratedM-items'>
                {movies.map((movie) => (
                    <div className='ratedM-item'>
                        <SeriesBackdrop key={movie.name} movie={movie}/>
                    </div>
                ))}
            </div>
            </Box>
        </Box>
    </div>
  )
}

export default TopRatedSeries