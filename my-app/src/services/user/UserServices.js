// Il faut yarn add axios
import axios from 'axios';

const apiMPR = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    Headers: {"Access-Control-Allow-Origin": "true"},
    crossorigin:true
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
      this.then((response) => {
         return response
            .then((data) => {
                console.log(data);
            })
    }, (error) => {
        return error.response.data.message;
      });

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