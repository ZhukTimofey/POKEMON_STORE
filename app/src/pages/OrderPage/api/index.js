import api from "../../../api/apiConfig";

export const postOrder = (body) => api.post("/order", body);
