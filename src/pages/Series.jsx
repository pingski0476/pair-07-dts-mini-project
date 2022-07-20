import React from 'react';
import TrendingSeriesList from '../containers/TrendingSeriesList';
import image from '../components/Navbar/image 3.png'
import './Series.css'

const Series = () => {
  
  return (
    <div className={"image"}>
      <img className={"image__img"} src={image} alt=""/>
      <div className={"image__overlay"}>
        <p>ini gambarnya</p>
      </div>
    </div>
  )
}

export default Series;



// {`${BASE_IMAGE_URL}${movie.backdrop_path}`}