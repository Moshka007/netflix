import React from 'react';
import MenuBar from './menu-bar/menu-bar';
import MovieList from './movie-list/movie-list';
import './content.css';

const Content = () => {
    return (
        <div className="content">
            <div className="container">
                <MenuBar/>
                <div className="count-movies">
                    <div className="count">39</div>
                    <div className="descr">movies found</div>
                </div>
                <MovieList/>
            </div>
        </div>
    );
};

export default Content;