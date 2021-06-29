import {makeAutoObservable} from 'mobx';

export default class MovieStore {
    constructor() {
        this._movies = []
        this._selectMovie = {};
        this._totalCount = 0
        this._selectedGenre = ''
        this._sortBy = 'release_date'
        this._search = '';
        this._limit = 6;
        this._offset = 0;
        this._currentPage = 1
        makeAutoObservable(this);
    }

    setCurrentPage(page) {
        this._currentPage = page;
    }

    setOffset(offset) {
        this._offset = offset;
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

    get offset() {
        return this._offset;
    }

    get limit() {
        return this._limit;
    }

    get currentPage() {
        return this._currentPage
    }
}