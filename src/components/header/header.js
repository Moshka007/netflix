import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-panel">
                    <h3 id="logo">Logo</h3>
                    <button className="btn btn-logo">
                        + ADD MOVIE
                    </button>
                </div>

                <div className="search-block">
                    <h1 id="search-heading">FIND YOUR MOVIE</h1>
                    <form className="search-panel">
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