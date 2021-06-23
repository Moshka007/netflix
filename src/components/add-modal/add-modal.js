import React from 'react';
import './add-modal.css';

const AddModal = () => {
    return (
        <div className="add-modal-container">
            <div className="add-modal-content">
                <div className="cross">
                <img className="cross-img" src="https://img.icons8.com/material-sharp/24/000000/multiply.png" alt="error img"/>
                </div>
                <h1 className="add-heading">ADD MOVIE</h1>
                <div className="add-input-group">
                    <div className="input-title">
                        <h2 className="input-title-heading">TITLE</h2>
                        <input type="text"/>
                    </div>
                    <div className="input-title">
                        <h2 className="input-release-heading">RELEASE DATE</h2>
                        <input type="text"/>
                    </div>
                    <div className="input-title">
                        <h2 className="input-url-heading">MOVIE URL</h2>
                        <input type="text"/>
                    </div>
                    <div className="input-title">
                        <h2 className="input-genre-heading">GENRE</h2>
                        <input type="text"/>
                    </div>
                    <div className="input-title">
                        <h2 className="input-overview-heading">OVERVIEW</h2>
                        <input type="text"/>
                    </div>
                    <div className="input-title">
                        <h2 className="input-runtime-heading">RUNTIME</h2>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModal;