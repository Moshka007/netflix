import React, { useContext, useEffect } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Content from '../content/content';
import AddModal from '../add-modal/add-modal';
import { fetchMovies } from '../../http/movieAPI';
import './app.css';
import { Context } from '../../index';
import {observer} from 'mobx-react-lite'



const App = observer(() => {
    const {movie} = useContext(Context);

    useEffect(() => {
        fetchMovies(movie.selectedGenre, movie.sort, 'desc').then((data)=> {movie.setMovies(data.data);
            movie.setTotalCount(data.totalAmount)});
    }, [movie.selectedGenre, movie.sort]);
    
   
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
            <AddModal/>
        </div>
    )
})

export default App;