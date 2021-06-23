import React, {useContext} from 'react';
import MenuBar from './menu-bar/menu-bar';
import MovieList from './movie-list/movie-list';
import { Context } from '../../index';
import './content.css';
import { observer } from 'mobx-react-lite';

const Content = observer(() => {
    const {movie} = useContext(Context);
    return (
        <div className="content">
            <div className="container">
                <MenuBar/>
                <div className="count-movies">
                    <div className="count">{movie.totalCount}</div>
                    <div className="descr">movies found</div>
                </div>
                <MovieList/>
            </div>
        </div>
    );
});

export default Content;