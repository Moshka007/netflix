import React, {useContext} from 'react';
import { Context } from '../../index';
import './menu-bar.css'

const MenuBar = () => {
    const {movie} = useContext(Context);
    const setSortOnclick = () => {
        movie.setSort(document.querySelector(".sort-select").value)
    }

    return (
        <div className="menu-container">
            <div className="menu-bar">
                    <div className="menu">
                        <ul>
                            <li onClick={() => movie.setSelectedGenre('')}>ALL</li>
                            <li onClick={() => movie.setSelectedGenre('Documentary')}>DOCUMENTARY</li>
                            <li onClick={() => movie.setSelectedGenre('Comedy')}>COMEDY</li>
                            <li onClick={() => movie.setSelectedGenre('Horror')}>HORROR</li>
                            <li onClick={() => movie.setSelectedGenre('Comedy')}>CRIME</li>
                        </ul>
                    </div>
                    <div className="sort">
                        <div className="sort-heading">
                            SORT BY
                        </div>
                       <select onClick={setSortOnclick} className="sort-select">
                            <option className="sort-opt" value="release_date">DATE</option>
                            <option className="sort-opt" value="vote_average">RATING</option>
                        </select>
                    </div>
            </div>
            <hr/>
        </div>
    );
};

export default MenuBar;