import React from 'react';
import './movie-list-item.css'

const MovieListItem = () => {
    return (
        <li className="wrapper">
            <div className="movie-item">
                <div className="movie-item-image">
                    <img className="movie-img" src="https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg" alt=""/>
                </div>
                <div className="movie-name-wrap">
                    <div className="movie-name">
                    Fifty Shades Freed
                    </div>
                    <div className="movie-year">
                        2004
                    </div>
                </div>
                <div className="genry">
                    Dramma, Biography
                </div>
            </div>
        </li>
    );
};

export default MovieListItem;