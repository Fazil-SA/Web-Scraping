import Axios from 'axios';


export const axiosSearchInstance = Axios.create({
    baseURL: "http://localhost:5000"
})

