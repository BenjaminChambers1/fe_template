import axios from 'axios';
import store from './store';

let test = true;
let myaxios = axios.create({
    baseURL: test ? 'http://localhost:3000' : 'http://18.216.160.160/api/',
    timeout: 3000,
    withCredentials: true
});

myaxios.interceptors.request.use(
    req => {
        if (store.state.access_token) {
            req.headers['authorization'] = `Bearer ${store.state.access_token}`;
        }
        return req;
    },
    error => {
        console.log(error)
    }
);

export default myaxios;