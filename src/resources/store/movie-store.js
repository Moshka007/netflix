import {makeAutoObservable} from 'mobx';

export default class MovieStore {
    constructor() {
        this._movies = []
        this._selectMovie = {};
        this._totalCount = 0
        this._selectedGenre = ''
        this._sortBy = 'release_date'
        this._search = '';
        makeAutoObservable(this);
    }

    setSelectMovie(movie) {
        this._selectMovie = movie;
    }

    setSearch(search) {
        this._search = search;
    }

    setSort(sortBy) {
        this._sortBy = sortBy;
    }

    setSelectedGenre(setSelectedGenre) {
        this._selectedGenre = setSelectedGenre;
    }

    setTotalCount(totalCount) {
        this._totalCount = totalCount
    }

    setMovies(movies) {
        this._movies = movies;
    }

    

    get totalCount() {
        return this._totalCount;
    }
    
    get movies() {
        return this._movies
    }

    get selectedGenre() {
        return this._selectedGenre;
    }

    get sort() {
        return this._sortBy;
    }

    get search() {
        return this._search;
    }

    get selectMovie() {
        return this._selectMovie;
    }
}