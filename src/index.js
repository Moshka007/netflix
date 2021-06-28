import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import MovieStore from './resources/store/movie-store';
import App from './app' 
import './index.css';

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value = {{
    movie: new MovieStore()
  }}>
  <App/>
  </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
