import axios from "axios";

export const getUserProfile = (username, password) => axios.get(`http://localhost:51774/product/Login?userName=${username}&password=${password}`, API_SETTINGS)

export const getAllProductsApi = () => axios.get(`http://localhost:51774/product/GetAllProducts`, API_SETTINGS)

export const getProductApi = (id) => axios.get(`http://localhost:51774/product/GetProducts?id=${id}`, API_SETTINGS)

export const checkUserApi = () => axios.get(`http://localhost:51774/product/CheckUser`, API_SETTINGS)

export const updateCartApi = (id, cart) => axios.get(`http://localhost:51774/product/UpdateCart?id=${id}&_cart=${cart}`, API_SETTINGS)

const API_SETTINGS = {
    headers: {

        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
        "X-Requested-With": "XMLHttpRequest",
        'Access-Control-Allow-Origin': true
    }
}