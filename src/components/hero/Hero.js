import React, { useEffect, useState } from 'react';
import "./Hero.css"

import SwiperCore, {Autoplay} from 'swiper';
import ArrowBackIosOutlined from '@mui/icons-material';

import tmdb from '../../apis/tmdb';

import HeroItems from './HeroItems';


const Hero = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
          
            try{
                const fetchedMovies = await tmdb.get("/discover/movie");
                setMovieItems(fetchedMovies.data.results.slice(1, 6));

            } catch (error) {
                console.log(error);
            }
        }
        fetchMovies();
    },[]);
  return (
    <div className='hero'>
        <div className="hero-slide">
            {movieItems.map(movie => (
                    <div className="hero-slidercontent">
                    {<HeroItems key={movie.title} movie={movie}/>}
                    </div>
                ))
            }
        </div>

    </div>
  );
}

export default Hero;