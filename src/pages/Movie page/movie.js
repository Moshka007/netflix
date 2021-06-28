
import React, { useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import Search from '../../static/search.png';
import './movie.css'

const Movie = observer(() => {
    const {movie} = useContext(Context);
    console.log(movie);
    return (
        <div className="header-movie">
            <div className="movie-item-page">
            <div className="movie-item-container">
                <div className="logo-panel">
                    <h3 id="logo">
                        <div id="logo">
                            <div className="large-logo">
                                netflix
                            </div>
                            <div className="litle-logo">
                                roulete
                            </div>
                        </div>
                    </h3>
                    <div>
                        <img onClick={() => movie.setSelectMovie({})} className="search-logo" src={Search} alt="search"/>
                    </div>  
                </div>

                <div className="movie-card-wrapper">
                    <div className="movie-card-img">
                        <img  src={movie.selectMovie.poster_path} alt="movie img" />
                    </div>
                    <div className="movie-text-wrapper">
                            <div className="heading-card">
                                <div className="movie-card-heading">
                                    {movie.selectMovie.title}
                                </div>
                                <div className="rating">
                                    {movie.selectMovie.vote_average}
                                </div>
                            </div>
                            <div className="movie-card-genres">
                                {movie.selectMovie.genres.map((genre, i) =>  {
                                     if(i === movie.selectMovie.genres.length-1){
                                        return genre 
                                    } else {
                                        return genre + ', '
                                    }
                                })}
                            </div>
                            <div className="movie-card-year">
                                <div className="year">
                                    {movie.selectMovie.release_date.substr(0,4)}
                                </div>
                                <div className="duration">
                                    {
                                       movie.selectMovie.runtime === null ||  movie.selectMovie.runtime + ' min' 
                                    }
                                </div>
                            </div>
                            <div className="movie-card-description">
                                    {movie.selectMovie.overview}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
});

export default Movie;