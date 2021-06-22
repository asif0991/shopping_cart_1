import axios from "axios";

export const getAllProductsApi = () => axios.get(`http://localhost:51774/product/Index`, API_SETTINGS)
const API_SETTINGS = {
    headers: {
        withCredentials: true,
        "X-Requested-With":"XMLHttpRequest",
        'Access-Control-Allow-Origin': true
    }
}