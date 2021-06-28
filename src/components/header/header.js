import React, { useContext, useState } from 'react';
import {Context} from '../../index';
import './header.css';

const Header = () => {
    const {movie} = useContext(Context);

    function setSearchContext(e) {
        e.preventDefault();
        movie.setSearch(document.querySelector('.search-input').value.trim());
        console.log(movie.search);
    }
        
    function showModal() {
        document.querySelector('.add-modal-container').style.display = 'flex';
    }

    return (
        <header className="header">
            
            <div className="container">
                
                <div className="logo-panel">
                    <h3 id="logo">
                    <div id="logo">
                        <div className="large-logo">
                            netflix
                        </div>
                        <div className="litle-logo">
                            roulete
                        </div>
                    </div>
                    </h3>
                    <button onClick={showModal}className="btn btn-logo">
                        + ADD MOVIE
                    </button>
                </div>

                <div className="search-block">
                    <h1 id="search-heading">FIND YOUR MOVIE</h1>
                    <form onSubmit={setSearchContext} className="search-panel">
                        <input 
                            className="search-input"
                            type="text"
                            placeholder="What do you want to watch?"
                        />
                        <button type="submit" className="btn btn-search">
                            SEARCH
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Header;