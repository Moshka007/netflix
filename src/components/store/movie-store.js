import {makeAutoObservable} from 'mobx';

export default class MovieStore {
    constructor() {
        this._movies = [
        ]
        
        this._totalCount = 0
        this._selectedGenre = ''
        this._sortBy = 'release_date'
        makeAutoObservable(this);
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
}