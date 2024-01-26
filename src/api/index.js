import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers:{
        "Content-Type": "application/json",
        "Authorization": "token"
    },
    timeout:10000
})
export default instance