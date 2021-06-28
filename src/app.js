import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './pages/Home/home';
import AddModal from './components/add-modal/add-modal';
import Movie from './pages/Movie page/movie';
import './app.css';
import { Context } from '.';

const App = observer(() => {
   const {movie} = useContext(Context);
   function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }

    return (
        <div>
            {isEmpty(movie.selectMovie) ?
                <Header/> 
                : 
                <Movie/>
            }
            
            <Home/>
            <Footer/>
            <AddModal/>
        </div>
    )
})

export default App;