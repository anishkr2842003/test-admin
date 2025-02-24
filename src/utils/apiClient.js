import axios from 'axios';

const apiClient = axios.create({
    baseURL : 'https://testapi.rasanonline.com/api'
})

export default apiClient;