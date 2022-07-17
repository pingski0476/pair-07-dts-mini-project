import React, { useEffect, useRef, useState } from 'react';
import "./Hero.css"

import tmdb from '../../apis/tmdb';

import HeroItems from './HeroItems';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';


const Hero = () => {


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

    const heroRef = useRef();

    const handleClick = (direction) =>{
        let distance = heroRef.current.getBoundingClientRect().x -52;
        if(direction === "left"){
                heroRef.current.style.transform = `translateX(${-1920 + distance}px)`
        }
        // console.log(distance);
        if(direction === "right"){
            heroRef.current.style.transform = `translateX(${1920 + distance}px)`
    }
    }
  return (
    <div className='hero'>
            <span>Discover</span>
            <ArrowBackIosRounded className='left'onClick={() => handleClick("left")}/>
        <div className="hero-slide"  ref={heroRef}>
            {movieItems.map(movie => (
                <div className="hero-slidercontent">
                    {<HeroItems key={movie.title} movie={movie}/>}
                </div>
                ))
            }
        </div>
            <ArrowForwardIosRounded className='right' onClick={() => handleClick("right")}/>
 

    </div>
  );
}

export default Hero;