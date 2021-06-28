import axios from 'axios';

export const fetchMovies = async (filter = '', sortBy = '', sortOrder = 'desc', search = '') => {
    const {data} = await axios.get(`http://localhost:4000/movies`, {params: {limit: 15, offset:0, filter, sortBy, sortOrder, searchBy: "title", search}})
    return data
}
export const fetchOneMovie = async (id) => {
    const {data} = await axios.get(`http://localhost:4000/movies/${id}`)
    return data
}
export const addMovie = async (movie) => {
    const {data} = await axios.post(`http://localhost:4000/movies`, {...movie})
    return data
}
export const fetchUserRepos = async (user) => {
    const {data} = await axios.get(`https://api.github.com/users/${user}/repos`, {params: {per_page: 4}})
    return data
}