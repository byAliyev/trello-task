import axios from 'axios';

let headers;

const baseURL = 'http://localhost:3001';

try {
    headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };
}catch (e){
    console.log(e);
}


const instance = axios.create({
    baseURL,
    timeout: 0,
    headers
})

instance.interceptors.response.use(
    function (response){
        return response;
    },
    function (error) {
        return error;
    }
)

export default instance;