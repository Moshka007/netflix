import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../../index';
import MovieListItem from '../movie-list-item/movie-list-item';
import './movie-list.css';

const MovieList = observer(() => {
    const {movie} = useContext(Context);

    return (
        <div className="movie-list-wrapper">
            <ul className="movie-list">
                {
                    movie.movies.map(element => {
                        return <MovieListItem 
                                    key={element.id}
                                    srcImg={element.poster_path}
                                    title={element.title}
                                    year={element.release_date.substr(0,4)}
                                    genres={element.genres}/>
                    })
                }
            </ul>
        </div>
    );
});

export default MovieList;