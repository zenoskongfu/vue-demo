import axios from "axios";

const httpAxios = axios.create();

const getAxios = async (url, options) => {
    return httpAxios.get(url, options);
}

const postAxios = async (url, options) => {
    return httpAxios.post(url, options);
}

export {httpAxios, getAxios, postAxios};