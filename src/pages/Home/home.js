import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { fetchMovies } from '../../resources/api/movieAPI';
import MenuBar from '../../components/menu-bar/menu-bar';
import MovieList from '../../components/movie-list/movie-list';
import { Context } from '../../index';
import './home.css';

const Home = observer(() => {
    const {movie} = useContext(Context);

    useEffect(() => {
        (async function(){
            let response = await fetchMovies(movie.selectedGenre, movie.sort, 'desc', movie.search);
            movie.setMovies(response.data);
            movie.setTotalCount(response.totalAmount);
        })();
    }, [movie.selectedGenre, movie.sort, movie.search]);
    
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

export default Home;