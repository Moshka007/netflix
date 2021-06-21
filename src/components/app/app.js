import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Content from '../content/content';
import AddModal from '../add-modal/add-modal';
import './app.css';


const App = () => {
    const values = [
        {id: 337167, title: "Fifty Shades Freed", tagline: "Don't miss the climax", vote_average: 6.1, vote_count: 1195},
        {id: 269149, title: "Zootopia", tagline: "Welcome to the urban jungle.", vote_average: 7.7, vote_count: 6795},
        {id: 181808, title: "Star Wars: The Last Jedi", tagline: "The Saga Continues", vote_average: 7.1, vote_count: 4732},
        {id: 284054, title: "Black Panther", tagline: "Long live the king", vote_average: 7.3, vote_count: 3788},
        {id: 354912, title: "Coco", tagline: "The celebration of a lifetime", vote_average: 7.8, vote_count: 3619},
        {id: 333339, title: "Ready Player One", tagline: "A better reality awaits.", vote_average: 8.1, vote_count: 617},
        {id: 338970, title: "Tomb Raider", tagline: "Her legend begins", vote_average: 6.2, vote_count: 817},
        {id: 284053, title: "Thor: Ragnarok", tagline: "No Hammer. No Problem.", vote_average: 7.4, vote_count: 5349},
        {id: 321612, title: "Beauty and the Beast", tagline: "Be our guest.", vote_average: 6.8, vote_count: 7861},
        {id: 399055, title: "The Shape of Water", tagline: "A Fairy Tale for Troubled Times", vote_average: 7.3, vote_count: 3200}
    ];


    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
            <AddModal/>
        </div>
    )
}

export default App;