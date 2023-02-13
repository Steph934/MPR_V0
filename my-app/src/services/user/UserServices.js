// Il faut yarn add axios
import axios from 'axios';

const apiMPR = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
<<<<<<< HEAD
    Headers: {
        "Access-Control-Allow-Origin": "true"
    },
    crossorigin: true
});

// https://axios-http.com/fr/docs/instance <= config requet axios

const config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    },
}



export const testPost = async (params) => {
    await axios.post('http://localhost:8080/signup', params, config)
        //   .then((response) => {
        //     response.data.message
        // }, (error) => {
        //     error.response.data.message
        //   });
        .then((response) => console.log(response.data.message))
        .catch((error) => console.log(error));


}


export const test = {
    async signup(params) {
        try {
            // apiMPR.defaults.headers.common['Authorizations'] = '';
            const response = await apiMPR.post('/signup', params);

            return console.log(response)
        } catch (error) {
            return error.response
        }
    }
}

export default test
=======
    Headers: {"Access-Control-Allow-Origin": "true"},
});

export const signUp = (params) => {
    const myP =  apiMPR.post('http://localhost:8080/signup', params)
    return myP
} 
>>>>>>> 9e5b8bf8b15aafac64d8f513403f3a394310b183
