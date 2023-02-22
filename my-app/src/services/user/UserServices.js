// Il faut yarn add axios
import axios from 'axios';

const apiMPR = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    Headers: {
        "Access-Control-Allow-Origin": "true"
    },
    crossorigin: true
});

// https://axios-http.com/fr/docs/instance <= config requet axios

// const config = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     },
// }



export const signUp =  (params) => {
    apiMPR.post('signup', params)
}


// export const test = {
//     async signup(params) {
//         try {
//             // apiMPR.defaults.headers.common['Authorizations'] = '';
//             const response = await apiMPR.post('/signup', params);

//             return console.log(response)
//         } catch (error) {
//             return error.response
//         }
//     }
// }

// export default test
