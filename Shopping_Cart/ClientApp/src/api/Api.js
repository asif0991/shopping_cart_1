import axios from "axios";

export const getAllProductsApi = () => axios.get(`http://localhost:4091/home/GetAllProducts`, API_SETTINGS)
const API_SETTINGS = {
    headers: {
        withCredentials: true,
        'Access-Control-Allow-Origin': true
    }
}