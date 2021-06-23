import React from 'react';
import './movie-list-item.css'

const MovieListItem = ({srcImg, title, year, genres}) => {
    return (
        <li className="wrapper">
            <div className="movie-item">
                <div className="movie-item-image">
                    <img className="movie-img" src={srcImg} alt="notfaound"/>
                </div>
                <div className="movie-name-wrap">
                    <div className="movie-name">
                        {title}
                    </div>
                    <div className="movie-year">
                        {year}
                    </div>
                </div>
                <div className="genry">
                    {genres.map((genre, i)=> {
                        if(i === genres.length-1){
                            return genre 
                        } else {
                            return genre + ', '
                        }
                    })}
                </div>
            </div>
        </li>
    );
};

export default MovieListItem;