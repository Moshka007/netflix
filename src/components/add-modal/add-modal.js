import React, { useContext, useState } from 'react';
import { Context } from '../../index';
import { addMovie, fetchMovies } from '../../resources/api/movieAPI';
import './add-modal.css';

const AddModal = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [url, setUrl] = useState('');
    const [genres, setGenres] = useState('');
    const [overview, setOverview] = useState('');
    const [runtime, setRuntime] = useState(0);

    const {movie} = useContext(Context)

    function resetForm(e) {
        e.preventDefault();
        document.querySelector('.add-input-group').reset();
    }

    const fetchMovieList = async () => {
        let response = await fetchMovies(movie.sort, movie.search, movie.offset, movie.limit);
        movie.setMovies(response.movies.rows);
        movie.setTotalCount(response.movies.count);
        movie.setCurrentPage(1);
    }

    function hideModal() {
        document.querySelector('.add-modal-container').style.display = 'none';
        document.querySelector('.add-input-group').reset();
        fetchMovieList();
    }

   
    async function add(e) {
        e.preventDefault();

        try {
            await addMovie({title, release_date: date, poster_path: url, genres, overview, runtime });
            document.querySelector('.add-input-group').reset();
            alert('Фильм устпешно добавлен');

        } catch(e) {
            alert(e + "\nВведены некорректные данные");
        }
    }

    return (
        <div style={{display: 'none'}} className="add-modal-container">
            <div className="add-modal-content">
                <div onClick={hideModal} className="cross">
                    <img className="cross-img" src="https://img.icons8.com/material-sharp/24/000000/multiply.png" alt="error img"/>
                </div>
                    <div className="add-modal-wrapper">
                    <h1 className="add-heading">ADD MOVIE</h1>
                    <form className="add-input-group">
                        <div className="input-title">
                            <h2 className="heading input-title-heading">TITLE</h2>
                            <input 
                                onChange={(e) => {setTitle(e.target.value)}} 
                                className="input" 
                                type="text"
                            />
                        </div>
                        <div className="input-title">
                            <h2 className="heading input-release-heading">RELEASE DATE</h2>
                            <input
                                onChange={(e) => {setDate(e.target.value)}}  
                                className="input" 
                                type="date"
                            />
                        </div>
                        <div className="input-title">
                            <h2 className="heading input-url-heading">MOVIE URL</h2>
                            <input 
                                onChange={(e) => {setUrl(e.target.value)}}  
                                className="input" 
                                type="text"
                            />
                        </div>
                        <div className="input-title">
                            <h2 className="heading input-genre-heading">GENRE</h2>
                            <input 
                                onChange={(e) => {setGenres(e.target.value)}} 
                                className="input" 
                                type="text"
                            />
                        </div>
                        <div className="input-title">
                            <h2 className="heading input-overview-heading">OVERVIEW</h2>
                            <input
                                onChange={(e) => {setOverview(e.target.value)}}  
                                className="input" 
                                type="text"
                            />
                        </div>
                        <div className="input-title">
                            <h2 className="heading input-runtime-heading">RUNTIME</h2>
                            <input 
                                onChange={(e) => {setRuntime(parseInt(e.target.value))}} 
                                className="input" 
                                type="text"
                            />
                        </div>

                        <div className="btn-group">
                        <button onClick={resetForm} className='btn-add reset'>
                            RESET
                        </button>
                        <button onClick={add} type="submit" className='btn-add submit'>
                            SUBMIT
                        </button>
                    </div>
                    </form>

                    
                </div>
            </div>
        </div>
    );
};

export default AddModal;