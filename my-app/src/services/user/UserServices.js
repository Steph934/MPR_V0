// Il faut yarn add axios
import axios from 'axios';

const apiMPR = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    Headers: {"Access-Control-Allow-Origin": "true"},
});

export const signUp = (params) => {
    const myP =  apiMPR.post('http://localhost:8080/signup', params)
    return myP
} 
