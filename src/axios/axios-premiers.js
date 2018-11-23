import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://beuptodate-b3720.firebaseio.com/'
});

export default instance;