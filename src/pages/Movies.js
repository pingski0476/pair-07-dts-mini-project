import React from 'react'
import TopRatedMovie from '../containers/topRatedMovie/TopRatedMovie'
import TrendingMovieList from '../containers/TrendingMovieList'


const Movies = () => {
  return (
    <div sx={{mt: '15px'}}>
        <TrendingMovieList/>
        <TopRatedMovie/>
    </div>
  )
}

export default Movies