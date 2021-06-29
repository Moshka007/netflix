import axios from 'axios';

export const fetchMovies = async (orderBy = 'release_date', titleQ = '', offset = 0, limit = 6, genre) => {
    const {data} = await axios.get(`http://localhost:3000/movie`, {params: {orderBy, titleQ, offset, limit, genre}})
    return data
}
export const fetchOneMovie = async (id) => {
    const {data} = await axios.get(`http://localhost:3000/movie/${id}`)
    return data
}
export const addMovie = async (movie) => {
    const {data} = await axios.post(`http://localhost:3000/movie`, {...movie})
    return data
}
