import React, { useContext } from 'react';
import { Context } from '../../index';
import { fetchOneMovie } from '../../resources/api/movieAPI';
import './movie-list-item.css'

const MovieListItem = ({srcImg, title, year, genres, movieId}) => {
    const {movie} = useContext(Context)

    async function getOneMovie(id) {
        const movieItem = await fetchOneMovie(id);
        movie.setSelectMovie(movieItem);
        document.documentElement.scrollTop = 0;
    }

    return (
        <li 
            key={movieId} 
            className="wrapper"
            onClick = {() => getOneMovie(movieId)}
        >
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