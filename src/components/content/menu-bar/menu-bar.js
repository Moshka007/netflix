import React from 'react';
import './menu-bar.css'

const MenuBar = () => {
    return (
        <div className="menu-container">
            <div className="menu-bar">
                    <div className="menu">
                        <ul>
                            <li>ALL</li>
                            <li>DOCUMENTARY</li>
                            <li>COMEDY</li>
                            <li>HORROR</li>
                            <li>CRIME</li>
                        </ul>
                    </div>
                    <div className="sort">
                        <ul>
                            <li>SORT BY</li>
                            <li>RELESE DATE</li>
                        </ul>
                    </div>
            </div>
            <hr/>
        </div>
    );
};

export default MenuBar;