import axios from "axios";
const token:string = JSON.parse(localStorage.getItem('token'));
const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    timeout:10000
})
export default instance