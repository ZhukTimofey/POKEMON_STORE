import api from "../../../api/apiConfig";

export const getItemInfo = (id) => api.get(`/products/${id}`);
