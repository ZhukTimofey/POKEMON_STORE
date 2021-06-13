import api from "../../../api/apiConfig";

export const login = (body) => api.post("/auth/signIn", body);
