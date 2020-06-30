import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-6bbb5.firebaseio.com/'
});

export default instance;