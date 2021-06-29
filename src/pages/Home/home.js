import React, {useContext, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { fetchMovies } from '../../resources/api/movieAPI';
import MenuBar from '../../components/menu-bar/menu-bar';
import MovieList from '../../components/movie-list/movie-list';
import Pagination from '../../components/pagination/pagination';
import { Context } from '../../index';
import './home.css';

const Home = observer(() => {
    const {movie} = useContext(Context);

    const fetchMovieList = async () => {
        let response = await fetchMovies(movie.sort, movie.search, movie.offset, movie.limit, movie.selectedGenre);
        movie.setMovies(response.movies.rows);
        movie.setTotalCount(response.movies.count);
        movie.setCurrentPage(1);
    }

    useEffect(() => {
        fetchMovieList();
        
    }, [movie.selectedGenre, movie.sort, movie.search, movie.offset, movie.limit]);
    
    return (
        <div className="content">
            <div className="container">
                <MenuBar/>
                <div className="count-movies">
                    <div className="count">{movie.totalCount}</div>
                    <div className="descr">movies found</div>
                </div>
                <MovieList/>
                <Pagination/>
            </div>
        </div>
    );
});

export default Home;