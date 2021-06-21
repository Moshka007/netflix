import axios from 'axios';

export const fetchMovies = async () => {
    const {data} = await axios.get(`http://localhost:4000/movies`)
    return data
}

export const fetchUserRepos = async (user) => {
    const {data} = await axios.get(`https://api.github.com/users/${user}/repos`, {params: {per_page: 4}})
    return data
}