import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d46de-default-rtdb.firebaseio.com/'
});

export default instance;