import React from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';
import './movie-list.css';

const MovieList = () => {
    return (
        <div className="movie-list-wrapper">
            <ul className="movie-list">
                <MovieListItem/>
                <MovieListItem/>
                <MovieListItem/>
                <MovieListItem/>
                <MovieListItem/>
                <MovieListItem/>
            </ul>
        </div>
    );
};

export default MovieList;