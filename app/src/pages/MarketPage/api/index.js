import api from "../../../api/apiConfig";

export const getItems = (page) => api.get(`/products?page=${page}`);
