import React from 'react';
import {observer} from 'mobx-react-lite'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import AddModal from './components/add-modal/add-modal';
import './app.css';

const App = observer(() => {
   
    return (
        <div>
            <Header/>
            <Home/>
            <Footer/>
            <AddModal/>
        </div>
    )
})

export default App;