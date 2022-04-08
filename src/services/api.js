import axios from 'axios';
const Api = axios.create({baseURL: 'http://localhost:3001'}); //api vai rodar na 3001

export default Api;